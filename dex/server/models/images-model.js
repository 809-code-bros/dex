const mongoose = require("mongoose");
// ,bcrypt = require(bcrypt);

const Schema = mongoose.Schema;

const ImageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc:{ 
    type:String,
    required:true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});
const ImagesModel = mongoose.model("images", ImageSchema);

module.exports = ImagesModel;
