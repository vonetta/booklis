const app = require("express").Router();
const Book = require("../Schema/book");

app.get("/api/books", async (req, res) => {
  try {
    const books = await Book.find({})
      .lean()
      .exec();
    res.status(200).json(books);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/api/book/:id", async (req, res) => {
  const book = req.params.id;
  try {
    const book = await Book.findById(book)
      .lean()
      .exec();
    res.status(200).json(book);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/api/book", async (req, res) => {
  const bookToCreate = req.body.book;
  try {
    const newBook = await Book.create(bookToCreate);

    res.status(201).json(newBook.toJSON(newBook));
  } catch (e) {
    res.status(500).send(e);
  }
});

app.delete("/api/book/:id", async (req, res) => {
  const bookToDelete = req.params.id;
  try {
    const removeBook = await Book.findByIdAndDelete(bookToDelete);

    res.status(200).json(removeBook);
  } catch (e) {
    res.status(500).send(e);
  }
});
app.put("/api/book/:id", async (req, res) => {
  const bookToUpdate = req.params.id;
  const newBookInfo = req.body;
  console.log(newBookInfo);

  try {
    const updateBook = await Book.findByIdAndUpdate(bookToUpdate, newBookInfo, {
      new: true
    });
    res.status(200).json(updateBook);
  } catch (e) {
    res.status(500).send(e);
  }
});
module.exports = app;
