const Book = require('../models/Book');

exports.getAll = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    return book ? res.json(book) : res.sendStatus(404);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID format' });
  }
};

exports.create = async (req, res) => {
  const { title, author, year } = req.body;

  if (!title || !author || !year) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const book = await Book.create({ title, author, year });
    res.status(201).json({ id: book._id });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.update = async (req, res) => {
  const { title, author, year } = req.body;

  if (!title || !author || !year) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await Book.findByIdAndUpdate(req.params.id, { title, author, year });

    if (!result) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.remove = async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);

    if (!result) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.sendStatus(200);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
