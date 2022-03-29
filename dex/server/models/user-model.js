const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  entryDate: { type: Date, default: Date.now },
});

UserSchema.pre('save', function(next){ 
  if(!this.isModified('password'))
  return next(); 
  bcrypt.hash()
})

const UsersModel = mongoose.model("users", UserSchema);
module.exports = UsersModel;