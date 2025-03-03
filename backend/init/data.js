const data = [
  {
    productName: "Apple MacBook Air M2",
    productType: "Laptop",
    price: 1199,
    condition: "New",
    warranty: 12,
    rating: 4.7,
    stock: 42,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=600&auto=format&fit=crop",
    description:
      "Experience breakthrough performance with the razor-thin MacBook Air M2. Featuring Apple's next-generation M2 chip, a stunning Liquid Retina display, and up to 18 hours of battery life, all in a sleek, fan-less design that weighs just 2.7 pounds.",
  },
  {
    productName: "Samsung Galaxy S23 Ultra",
    productType: "Smartphone",
    price: 1299,
    condition: "New",
    warranty: 24,
    rating: 4.8,
    stock: 78,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTZwTDPKTSdKqonQydW83mgROP0WjiwCdpF6Uh_eKKmCzI_ju4fxuaaIWFjjkFtALVjffwFRZ-NnTIWKjbl00BeaHGzSSkBdFKeGjbdmzZNxL3vLbi9yEUR&usqp=CAE",
    description:
      "The Galaxy S23 Ultra features Samsung's most advanced camera system with a 200MP main sensor, 100x Space Zoom, and enhanced Nightography. Powered by the Snapdragon 8 Gen 2 processor and a massive 5,000mAh battery, with S Pen integration for enhanced productivity.",
  },
  {
    productName: "Sony WH-1000XM5",
    productType: "Headphones",
    price: 399,
    condition: "New",
    warranty: 12,
    rating: 4.6,
    stock: 120,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQhE2b_MEwQ20yHvi6Z2PGYL6MQdxiiHyrg9F5dCm6LhEZT1mBg7gzbqNffIBm2k_OfA7D4xcq6yzZzgz8awtLx7jd2fxVjBtbKv71jM0E&usqp=CAE",
    description:
      "Industry-leading noise cancellation powered by Sony's integrated V1 processor and eight microphones. Featuring 30-hour battery life, crystal-clear hands-free calling, and multipoint connection that lets you quickly switch between devices.",
  },
  {
    productName: "Dell XPS 15",
    productType: "Laptop",
    price: 1499,
    condition: "New",
    warranty: 24,
    rating: 4.5,
    stock: 35,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=600&auto=format&fit=crop",
    description:
      "The Dell XPS 15 combines stunning visuals on a 15.6-inch InfinityEdge display with powerful performance from Intel Core processors and NVIDIA graphics. Featuring premium materials like CNC machined aluminum, carbon fiber, and Gorilla Glass for durability and style.",
  },
  {
    productName: "iPad Pro 12.9-inch",
    productType: "Tablet",
    price: 1099,
    condition: "New",
    warranty: 12,
    rating: 4.7,
    stock: 65,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTn2GgqG2LYK48ug1ffwifvnQZlJM-yQb7T-S8gtxOxkfL5-ZxeFxcXyniBkuZFUiLErJL08VWcfu43VhL5vL9KfJaoBp2QkwW01DbGGAkU&usqp=CAE",
    description:
      "The ultimate iPad experience with the breakthrough M2 chip, an immersive 12.9-inch Liquid Retina XDR display, and ultrafast wireless connectivity. Perfect for creative professionals with Apple Pencil and Magic Keyboard support for enhanced productivity.",
  },
  {
    productName: "PlayStation 5",
    productType: "Gaming Console",
    price: 499,
    condition: "New",
    warranty: 12,
    rating: 4.9,
    stock: 28,
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=600&auto=format&fit=crop",
    description:
      "Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with haptic feedback, adaptive triggers, and 3D audio, plus stunning 4K graphics. The PS5 delivers next-generation gaming with backward compatibility for most PS4 games.",
  },
  {
    productName: "Bose SoundLink Revolve+",
    productType: "Speaker",
    price: 299,
    condition: "New",
    warranty: 12,
    rating: 4.6,
    stock: 92,
    image: "https://images.unsplash.com/photo-1589491106922-a8e488665b2c?q=80&w=600&auto=format&fit=crop",
    description:
      "Deep, loud, and immersive sound with true 360-degree coverage from this portable Bluetooth speaker. Featuring up to 17 hours of battery life, water-resistant design, and a flexible fabric handle that makes it easy to take anywhere.",
  },
  {
    productName: "Nikon Z6 II",
    productType: "Camera",
    price: 1999,
    condition: "New",
    warranty: 24,
    rating: 4.8,
    stock: 45,
    image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=600&auto=format&fit=crop",
    description:
      "A versatile 24.5MP mirrorless camera with dual EXPEED 6 processors for enhanced speed and performance. Capture stunning stills and 4K UHD video with excellent low-light performance, rapid autofocus, and 14 fps continuous shooting.",
  },
  {
    productName: "Xbox Series X",
    productType: "Gaming Console",
    price: 499,
    condition: "New",
    warranty: 12,
    rating: 4.7,
    stock: 32,
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=600&auto=format&fit=crop",
    description:
      "Microsoft's most powerful console ever featuring 12 teraflops of processing power for immersive 4K gaming at up to 120 FPS. With Quick Resume, lightning-fast load times, and backward compatibility spanning four generations of Xbox games.",
  },
  {
    productName: "GoPro Hero 11 Black",
    productType: "Camera",
    price: 499,
    condition: "New",
    warranty: 12,
    rating: 4.7,
    stock: 58,
    image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=600&auto=format&fit=crop",
    description:
      "Capture stunning 5.3K video and 27MP photos with the revolutionary new image sensor that delivers the largest vertical field of view ever on a GoPro. With unshakable HyperSmooth 5.0 stabilization and automatic cloud uploads.",
  },
  {
    productName: "Logitech MX Master 3",
    productType: "Mouse",
    price: 99,
    condition: "New",
    warranty: 24,
    rating: 4.8,
    stock: 110,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600&auto=format&fit=crop",
    description:
      "Precision-crafted ergonomic mouse with an electromagnetic MagSpeed scroll wheel that's 90% faster and 87% more precise. Connect to up to three devices via Bluetooth or the included USB receiver, with customizable buttons for application-specific commands.",
  },
  {
    productName: "HP Omen 16",
    productType: "Laptop",
    price: 1399,
    condition: "New",
    warranty: 24,
    rating: 4.6,
    stock: 40,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=600&auto=format&fit=crop",
    description:
      "A gaming powerhouse featuring Intel Core i7 processors and NVIDIA GeForce RTX graphics for competitive gameplay. With a fast refresh QHD display, advanced thermal management, and customizable RGB keyboard in a sleek design.",
  },
  {
    productName: "Canon EOS R6",
    productType: "Camera",
    price: 2499,
    condition: "New",
    warranty: 24,
    rating: 4.8,
    stock: 25,
    image: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?q=80&w=600&auto=format&fit=crop",
    description:
      "A professional-grade 20.1MP full-frame mirrorless camera with in-body image stabilization up to 8 stops. Featuring lightning-fast autofocus, 12 fps mechanical shutter, 20 fps electronic shutter, and impressive 4K 60p video recording capabilities.",
  },
  {
    productName: "JBL Flip 6",
    productType: "Speaker",
    price: 129,
    condition: "New",
    warranty: 12,
    rating: 4.7,
    stock: 85,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop",
    description:
      "Bold JBL sound with powerful racetrack-shaped woofer, separate tweeter, and dual passive radiators. This waterproof and dustproof portable speaker delivers up to 12 hours of playtime with rich bass and crystal-clear audio.",
  },
  {
    productName: "OnePlus 11 5G",
    productType: "Smartphone",
    price: 799,
    condition: "New",
    warranty: 24,
    rating: 4.6,
    stock: 70,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJ8G2N92wzdzPv-92hJZAnstdnCjkYxfl0iDFCjr6gnX4PvdqnnN3CnsO-WKG9gmro3cipfNSG42n6R1eHnoLjPWlp95drbj3ID8jOvpF_TAGg9LJZnPxa&usqp=CAE",
    description:
      "Flagship performance with Snapdragon 8 Gen 2 processor and Hasselblad camera system featuring a 50MP main sensor. With a stunning 6.7-inch 120Hz AMOLED display, 100W SUPERVOOC fast charging, and OxygenOS for a smooth user experience.",
  },
  {
    productName: "Samsung Galaxy S23 Ultra",
    productType: "Smartphone",
    price: 1299,
    condition: "New",
    warranty: 24,
    rating: 4.8,
    stock: 78,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTZwTDPKTSdKqonQydW83mgROP0WjiwCdpF6Uh_eKKmCzI_ju4fxuaaIWFjjkFtALVjffwFRZ-NnTIWKjbl00BeaHGzSSkBdFKeGjbdmzZNxL3vLbi9yEUR&usqp=CAE",
    description:
      "The Galaxy S23 Ultra features Samsung's most advanced camera system with a 200MP main sensor, 100x Space Zoom, and enhanced Nightography. Powered by the Snapdragon 8 Gen 2 processor and a massive 5,000mAh battery, with S Pen integration for enhanced productivity.",
  },
  {
    productName: "Apple iPhone 15 Pro Max",
    productType: "Smartphone",
    price: 1199,
    condition: "New",
    warranty: 12,
    rating: 4.9,
    stock: 45,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTBFxlSKm3agFVGLdYypPU1jDXH0FahrvObivpH8zSYAGTfq2-jOu6bFUlNaYsl-2H-1sTFlibMiU65OKODLEokEOC7vpbuXc2muKHF_nUkSOy7oEsQFEGurQ&usqp=CAE",
    description:
      "Apple's flagship smartphone featuring the A17 Pro chip, a titanium design, and a 48MP camera system with enhanced computational photography. Includes USB-C connectivity, improved battery life, and the Dynamic Island feature.",
  },
  
  {
    productName: 'LG C3 OLED 65"',
    productType: "Television",
    price: 1799,
    condition: "New",
    warranty: 24,
    rating: 4.9,
    stock: 28,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSXsp432z5RPVRtLTrz-XoVka1-T0YaX4hXp5wKfLCzBTVIwAJ3KuVxU1HeGm_cylX3UEQOUj4QV3QyIVFiqEmM_Hwm_b0u1zwNFbRY1tSGcV0orTgyuvM6&usqp=CAE",
    description:
      "LG's premium OLED TV with perfect blacks, infinite contrast, and over a billion colors. Features the α9 Gen6 AI Processor 4K for enhanced picture and sound quality, NVIDIA G-SYNC compatibility, and a sleek design.",
  },
  {
    productName: "Bose QuietComfort Earbuds II",
    productType: "Earbuds",
    price: 279,
    condition: "New",
    warranty: 12,
    rating: 4.6,
    stock: 95,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=600&auto=format&fit=crop",
    description:
      "Bose's most advanced noise cancelling earbuds with CustomTune technology that personalizes audio and noise cancellation to your ears. Up to 6 hours of battery life with an additional 18 hours from the charging case.",
  },
  {
    productName: "Canon EOS R6 Mark II",
    productType: "Camera",
    price: 2499,
    condition: "New",
    warranty: 24,
    rating: 4.8,
    stock: 22,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQs6dQGR5G_GNjlhbJzUYOaPM7kr4HzlUqaByNgxuTRKpAbTn3wrReqsdiA_AxtfbKoxXCZt3JWir9SCazK0043doO92kASyOMxSWnjCDn6RYkd4tYn7pen&usqp=CAE",
    description:
      "A professional-grade mirrorless camera with a 24.2MP CMOS sensor, in-body image stabilization, and 40fps continuous shooting. Capable of 4K60p video recording and featuring advanced subject detection autofocus.",
  },
  {
    productName: "iPad 12.9-inch",
    productType: "Tablet",
    price: 1099,
    condition: "New",
    warranty: 12,
    rating: 4.9,
    stock: 42,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTn2GgqG2LYK48ug1ffwifvnQZlJM-yQb7T-S8gtxOxkfL5-ZxeFxcXyniBkuZFUiLErJL08VWcfu43VhL5vL9KfJaoBp2QkwW01DbGGAkU&usqp=CAE",
    description:
      "Apple's most powerful tablet featuring the M2 chip, a stunning Liquid Retina XDR display with ProMotion technology, and support for Apple Pencil and Magic Keyboard. Perfect for creative professionals and power users.",
  },
  {
    productName: "Samsung Odyssey G9",
    productType: "Monitor",
    price: 1299,
    condition: "New",
    warranty: 36,
    rating: 4.7,
    stock: 18,
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=600&auto=format&fit=crop",
    description:
      "49-inch super ultrawide curved gaming monitor with dual QHD resolution (5120x1440), 240Hz refresh rate, 1ms response time, and QLED technology. Features G-Sync and FreeSync Premium Pro support.",
  },
  {
    productName: "Sony PlayStation 5",
    productType: "Gaming Console",
    price: 499,
    condition: "New",
    warranty: 12,
    rating: 4.8,
    stock: 50,
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=600&auto=format&fit=crop",
    description:
      "Next-generation gaming console featuring an ultra-high speed SSD, ray tracing support, 4K gaming at up to 120fps, and haptic feedback controllers. Backward compatible with most PS4 games.",
  },
  {
    productName: "Dyson V15 Detect",
    productType: "Vacuum Cleaner",
    price: 749,
    condition: "New",
    warranty: 24,
    rating: 4.7,
    stock: 65,
    image: "https://images.unsplash.com/photo-1622480916113-9000ac49b79d?q=80&w=600&auto=format&fit=crop",
    description:
      "Cordless vacuum with a laser that reveals microscopic dust, an LCD screen that counts and categories particles, and powerful suction. Includes multiple attachments and up to 60 minutes of fade-free power.",
  },
  {
    productName: "Dell XPS 15",
    productType: "Laptop",
    price: 1899,
    condition: "New",
    warranty: 12,
    rating: 4.6,
    stock: 40,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=600&auto=format&fit=crop",
    description:
      "Premium laptop with an InfinityEdge display, 13th Gen Intel Core processors, NVIDIA GeForce RTX graphics, and up to 64GB RAM. Features a CNC machined aluminum chassis and carbon fiber palm rest.",
  },
  {
    productName: "GoPro HERO11 Black",
    productType: "Action Camera",
    price: 399,
    condition: "New",
    warranty: 12,
    rating: 4.7,
    stock: 85,
    image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=600&auto=format&fit=crop",
    description:
      "Waterproof action camera with 5.3K video, 27MP photos, and HyperSmooth 5.0 stabilization. Features a new 8:7 aspect ratio sensor for more versatile content creation and improved low-light performance.",
  },
  {
    productName: "Samsung 980 PRO 2TB",
    productType: "SSD Storage",
    price: 229,
    condition: "New",
    warranty: 60,
    rating: 4.9,
    stock: 110,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRn9CRT355uG08Wgc1aTZmYuRfBugBibzvNEky9ouMyZpY598ffhf1rZz4lnGXaqAHa_sdavwHX1h8vBwbP7OyhYSDAHl2b6Csyw_1SshsfrMD_5SrqXZgxTA&usqp=CAE",
    description:
      "PCIe 4.0 NVMe SSD with read speeds up to 7,000 MB/s and write speeds up to 5,100 MB/s. Features nickel-coated controller and heat spreader for thermal management and Samsung Magician software support.",
  },
  {
    productName: "Microsoft Surface Pro 9",
    productType: "2-in-1 Laptop",
    price: 1299,
    condition: "New",
    warranty: 12,
    rating: 4.5,
    stock: 55,
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=600&auto=format&fit=crop",
    description:
      "Versatile 2-in-1 device with a 13-inch PixelSense display, choice of Intel Core or Microsoft SQ3 processors, and up to 16 hours of battery life. Includes Windows 11 and supports Surface Slim Pen 2.",
  },
  {
    productName: "Nintendo Switch OLED",
    productType: "Gaming Console",
    price: 349,
    condition: "New",
    warranty: 12,
    rating: 4.8,
    stock: 70,
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=600&auto=format&fit=crop",
    description:
      "Enhanced version of the Nintendo Switch featuring a 7-inch OLED screen, enhanced audio, 64GB internal storage, and a wired LAN port in the dock. Play at home on the TV or on the go in handheld mode.",
  },
  {
    productName: "Sonos Arc",
    productType: "Soundbar",
    price: 899,
    condition: "New",
    warranty: 24,
    rating: 4.7,
    stock: 38,
    image: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sonos-Arc-Black-01.jpg?v=1640346450&width=800",
    description:
      "Premium soundbar with Dolby Atmos support, 11 high-performance drivers, and Trueplay tuning technology. Features voice control with Amazon Alexa or Google Assistant and seamless integration with other Sonos speakers.",
  },
  {
    productName: "Garmin Fenix 7X Solar",
    productType: "Smartwatch",
    price: 899,
    condition: "New",
    warranty: 24,
    rating: 4.8,
    stock: 45,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop",
    description:
      "Advanced multisport GPS watch with solar charging capability, built-in flashlight, and up to 37 days of battery life. Features topographic maps, advanced training metrics, and multiple global navigation satellite systems.",
  },
  {
    productName: "Logitech MX Master 3S",
    productType: "Mouse",
    price: 99,
    condition: "New",
    warranty: 12,
    rating: 4.9,
    stock: 150,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600&auto=format&fit=crop",
    description:
      "Premium wireless mouse with an 8,000 DPI sensor, quiet clicks, and electromagnetic scrolling. Features app-specific customizations, works on any surface, and can connect to up to 3 devices simultaneously.",
  },
  {
    productName: "Breville Barista Express",
    productType: "Espresso Machine",
    price: 699,
    condition: "New",
    warranty: 24,
    rating: 4.7,
    stock: 32,
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=600&auto=format&fit=crop",
    description:
      "Semi-automatic espresso machine with an integrated conical burr grinder, digital temperature control, and manual milk texturing. Features a 15 bar Italian pump and precision extraction for café quality coffee at home.",
  },
  {
    productName: "LG CordZero A9",
    productType: "Vacuum Cleaner",
    price: 599,
    condition: "New",
    warranty: 24,
    rating: 4.6,
    stock: 48,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=600&auto=format&fit=crop",
    description:
      "Cordless stick vacuum with up to 60 minutes of run time, HEPA filtration, and a portable charging stand. Features a 5-step filtration system, detachable hand vacuum, and Power Drive Nozzle for effective cleaning.",
  },
  
 
  {
    productName: "DJI Mavic 3 Pro",
    productType: "Drone",
    price: 2199,
    condition: "New",
    warranty: 12,
    rating: 4.9,
    stock: 15,
    image: "https://images.unsplash.com/photo-1514043454212-14c181f46583?q=80&w=600&auto=format&fit=crop",
    description:
      "Professional-grade drone with a triple camera system including a Hasselblad 4/3 CMOS sensor, up to 43 minutes of flight time, and omnidirectional obstacle sensing. Features 15km video transmission and advanced return-to-home functionality.",
  },
  {
    productName: "Keychron Q1 Pro",
    productType: "Keyboard",
    price: 199,
    condition: "New",
    warranty: 12,
    rating: 4.7,
    stock: 60,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=600&auto=format&fit=crop",
    description:
      "Premium wireless mechanical keyboard with a fully customizable 75% layout, hot-swappable switches, and gasket-mount design. Features QMK/VIA support, RGB backlighting, and a CNC machined aluminum body.",
  },
  {
    productName: "Instant Pot Duo Plus",
    productType: "Kitchen Appliance",
    price: 129,
    condition: "New",
    warranty: 12,
    rating: 4.8,
    stock: 105,
    image: "https://images.unsplash.com/photo-1593998066526-65fcab3021a2?q=80&w=600&auto=format&fit=crop",
    description:
      "9-in-1 electric pressure cooker that works as a slow cooker, rice cooker, steamer, sauté pan, yogurt maker, sterilizer, and food warmer. Features 15 one-touch programs and an intuitive interface.",
  },
  {
    productName: "Fujifilm X-T5",
    productType: "Camera",
    price: 1699,
    condition: "New",
    warranty: 24,
    rating: 4.8,
    stock: 28,
    image: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?q=80&w=600&auto=format&fit=crop",
    description:
      "Compact mirrorless camera featuring a 40.2MP X-Trans CMOS 5 HR sensor, 5-axis in-body stabilization, and up to 6.2K video recording. Includes film simulation modes and a classic dial-based control system.",
  },
  {
    productName: "Ember Mug 2",
    productType: "Smart Mug",
    price: 129,
    condition: "New",
    warranty: 12,
    rating: 4.5,
    stock: 75,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTCUuUqDHFvW6WOeMl2XcxJzrKxxlz46BpPvrGxk2MxfkainW7IRYp6naUuAUhjTiaTjn5mpa6oxPX2gWt5S9HpNjevYqb0NY4iHB-zvXV4K328-0zwWBfCssZk&usqp=CAE",
    description:
      "Temperature-controlled smart mug that keeps your beverage at your preferred temperature (between 120°F - 145°F) for up to 1.5 hours on a single charge, or all day on the included charging coaster.",
  },
  {
    productName: "Alienware Aurora R15",
    productType: "Desktop PC",
    price: 2499,
    condition: "New",
    warranty: 24,
    rating: 4.7,
    stock: 20,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=600&auto=format&fit=crop",
    description:
      "High-performance gaming desktop with 13th Gen Intel Core i9 processor, NVIDIA GeForce RTX 4090 graphics, and liquid cooling. Features tool-less access, customizable AlienFX lighting, and extensive expansion options.",
  },
  {
    productName: "Beats Studio Pro",
    productType: "Headphones",
    price: 349,
    condition: "New",
    warranty: 12,
    rating: 4.6,
    stock: 85,
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=600&auto=format&fit=crop",
    description:
      "Premium wireless headphones with active noise cancellation, spatial audio, and up to 40 hours of battery life. Features lossless audio via USB-C, personalized listening with acoustic architecture, and seamless device switching.",
  },
  {
    productName: "Vitamix 5200",
    productType: "Blender",
    price: 549,
    condition: "New",
    warranty: 84,
    rating: 4.9,
    stock: 40,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQMjTWa_9kBGjNBC2OexWHSftNyZI67VcUvLnEVXCsCugyXiHYuiBI-XdkKa0Y3fQcwNKLKiIJPfdcbIUJZYpZoeWJt4aRQ0UlanWK0thm6ZExtjbbFXDgm&usqp=CAEp",
    description:
      "Professional-grade blender with a 2.2 HP motor, aircraft-"
  }
];

module.exports = data;