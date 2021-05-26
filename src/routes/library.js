import { Router } from 'express';

import { publisher, book } from '../controllers/Library'

import Book from '../models/Book';

import select from 'mongoose'

const router = Router();

router.post('/publisher', publisher);
router.post('/book', book);
router.get('/booklist', async (req, res) => {
	var data = await Book.find().select('title');
	res.json({ booklist: data });
});

export default router;