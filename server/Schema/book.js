const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    dateStarted: {
      type: Date
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("book", bookSchema);
