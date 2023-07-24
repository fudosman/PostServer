const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DbService = require("./data.service");


const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const User = mongoose.model('User', userSchema);
const UserService = new DbService(User);


module.exports = {
  User,
  UserService
};
