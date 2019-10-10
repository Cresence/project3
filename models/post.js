const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  news_title: { type: String, required: true },
  category: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
