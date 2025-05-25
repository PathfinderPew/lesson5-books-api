// routes/books.js
const express = require('express');
const ctl = require('../controllers/booksController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Books
 *     description: Book management
 */

/**
 * @swagger
 * /books:
 *   get:
 *     tags: [Books]
 *     summary: List all books
 *     responses:
 *       200:
 *         description: array of books
 */
router.get('/', ctl.getAll);

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     tags: [Books]
 *     summary: Get a book by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: single book }
 *       404: { description: not found }
 */
router.get('/:id', ctl.getById);

/**
 * @swagger
 * /books:
 *   post:
 *     tags: [Books]
 *     summary: Create a new book
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201: { description: created }
 */
router.post('/', ctl.create);

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     tags: [Books]
 *     summary: Update a book by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       204: { description: no content }
 */
router.put('/:id', ctl.update);

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     tags: [Books]
 *     summary: Delete a book by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: deleted }
 */
router.delete('/:id', ctl.remove);

module.exports = router;
