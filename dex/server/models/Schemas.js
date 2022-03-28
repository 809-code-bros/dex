const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique:true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  entryDate: { type: Date, default: Date.now },
});

const imageSchema = new Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    },
    user: {type:Schema.Types.ObjectId, ref: 'users'}
});
  


const Users = mongoose.model("users", UserSchema, "users");
const Images = mongoose.model("images", imageSchema, "images")
const mySchemas = { 'Users': Users, 'Images':Images};

module.exports = mySchemas;
