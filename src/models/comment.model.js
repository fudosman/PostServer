const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DbService = require("./data.service");

const commentSchema = new Schema({
  body: { type: String, required: true },
  image: { type: String },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const Comment = mongoose.model('Comment', commentSchema);
const CommentService = new DbService(Comment)

module.exports = {
  Comment,
  CommentService
};
