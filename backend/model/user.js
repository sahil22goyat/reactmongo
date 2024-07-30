const mongo = require("mongoose");
const userSchema = new mongo.Schema({

name:String,
  email:String,
  password:Intl,
  age:String,
  number:Intl






})
  const User = mongo.model('User', userSchema);

module.exports = User;