require("dotenv").config();

const mongoose = require("mongoose");
const productModel = require("../models/ProductModel");
const sellDeviceModel = require("../models/SellDevice.js");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const geminiApiKey = "AIzaSyAzeIq20O7VzIASVTiXIljz9fzYBFnXEvk";

const arrData = require("./data.js");

const genAi = new GoogleGenerativeAI(geminiApiKey);
const model = genAi.getGenerativeModel({ model: "text-embedding-004" });

const connectDB = async (e) => {
  await mongoose.connect(
    "mongodb+srv://mansinarang155:u2JHh311Y4QHqC2m@ecogadgetdb.0kel3.mongodb.net/?retryWrites=true&w=majority&appName=ecogadgetdb"
  );
};

(async () => {
  await connectDB();
})();

const sampleSellDeviceData = [
  {
    deviceType: "smartphone",
    brand: "Apple",
    model: "iPhone 13 Pro",
    condition: "excellent",
    description:
      "iPhone 13 Pro with 256GB storage. Minor scratches on the back but screen is perfect. Comes with original charger and box.",
    askingPrice: 649.99,
    status: "pending",
  },
  {
    deviceType: "laptop",
    brand: "Dell",
    model: "XPS 15",
    condition: "good",
    description:
      "2022 Dell XPS 15 with Intel i7, 16GB RAM, 512GB SSD. Has some wear on the keyboard but fully functional. Battery holds about 80% of original capacity.",
    askingPrice: 899.0,
    status: "refurbish",
  },
  {
    deviceType: "tablet",
    brand: "Samsung",
    model: "Galaxy Tab S7+",
    condition: "like-new",
    description:
      "Samsung Galaxy Tab S7+ 128GB WiFi model. Used for only 2 months, in perfect condition with no scratches. Includes S Pen and protective case.",
    askingPrice: 529.99,
    status: "pending",
  },
  {
    deviceType: "desktop",
    brand: "HP",
    model: "Pavilion Gaming Desktop",
    condition: "fair",
    description:
      "HP Gaming Desktop with AMD Ryzen 5, NVIDIA GTX 1660, 8GB RAM, 1TB HDD. Has some cosmetic damage on the case and missing one USB port cover.",
    askingPrice: 459.5,
    status: "refurbish",
  },
  {
    deviceType: "other",
    brand: "Sony",
    model: "PlayStation 5",
    condition: "poor",
    description:
      "PS5 Disc Edition with controller. Has significant cosmetic damage and the disc drive makes noise during operation, but games run fine. Selling as-is.",
    askingPrice: 199.99,
    status: "recycle",
  },
];


const addProducts = async (data, sampleSellDeviceData) => {
  await productModel.deleteMany();
  await sellDeviceModel.deleteMany();
  data.forEach(async (d) => {
    await productModel.create(d);
  });

  await sellDeviceModel.insertMany(sampleSellDeviceData);

  console.log("data added");
};

async function getEmbedding(content) {
  const embedding = await model.embedContent(content);
  return embedding.embedding.values;
}

const addEmbeddings = async () => {
  const data = await productModel.find({});
  let cnt = 0;
  data.forEach(async (d, idx) => {
    const embedding = await getEmbedding(d.productName + "\n" + d.description);
    const id = d._id;

    await productModel.updateOne(
      { _id: id },
      {
        $set: {
          embedding,
        },
      },
      { upsert: true }
    );
    cnt++;
  });

  console.log("Embeddings are being added...");
};

async function createVectorSearchIndex() {
  const model = {
    name: "vector_index",
    type: "vectorSearch",
    definition: {
      fields: [
        {
          type: "vector",
          path: "embedding",
          numDimensions: 768,
          similarity: "cosine",
        },
      ],
    },
  };

  await productModel.createSearchIndex(model);
}

let vectorSearchIndex = async () => {
  await createVectorSearchIndex();
  console.log("Vector Search Index created");
};

async function performVectorSearch(userQuery, filter = {}) {
  let embedding = await getEmbedding(userQuery);

  const pipeline = [
    {
      $vectorSearch: {
        index: "vector_index",
        queryVector: embedding,
        path: "embedding",
        numCandidates: 50,
        filter: filter,
        limit: 5,
      },
    },
    {
      $project: {
        productName: 1,
        productType: 1,
        price: 1,
        condition: 1,
        warranty: 1,
        rating: 1,
        description: 1,
      },
    },
  ];

  return await productModel.aggregate(pipeline);
}

let fetchRes = async () => {
  let res = await performVectorSearch("I wish to buy a samsung device");
  console.log(res);
};

vectorSearchIndex();