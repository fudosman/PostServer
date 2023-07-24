const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DbService = require("./data.service");


const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  image: { type: String },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

const Post = mongoose.model('Post', postSchema);
const PostService = new DbService(Post);

module.exports = {
  Post,
  PostService
};

