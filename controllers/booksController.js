const Book = require('../models/Book');
exports.getAll   = async (req,res) => res.json(await Book.find());
exports.getById  = async (req,res) => {
  const b = await Book.findById(req.params.id);
  return b ? res.json(b) : res.sendStatus(404);
};
exports.create   = async (req,res) => {
  const b = await Book.create(req.body);
  res.status(201).json({ id: b._id });
};
exports.update   = async (req,res) => {
  await Book.findByIdAndUpdate(req.params.id, req.body);
  res.sendStatus(204);
};
exports.remove   = async (req,res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
};
