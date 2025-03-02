const { model } = require("mongoose");
const giveDeviceSchema = require("../schemas/giveDeviceSchema");

const giveDevice = new model("givedeivce", giveDeviceSchema);

module.exports = giveDevice;