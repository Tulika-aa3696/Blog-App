const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
