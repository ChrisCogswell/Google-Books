const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: Array, required: true },
  author: { type: String, required: true },
  summary: String,
  image: { type: Array, required: true },
  link: { type: String, required: true, unique: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
