const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ImageSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});
const ImagesModel = mongoose.model("images", ImageSchema);

module.exports = ImagesModel;
