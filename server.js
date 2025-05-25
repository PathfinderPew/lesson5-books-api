require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const setupSwagger = require('./swagger');
const booksRoutes  = require('./routes/books');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(e => console.error(e));

// mount routes and swagger
app.use('/books', booksRoutes);
setupSwagger(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
