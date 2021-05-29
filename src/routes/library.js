import { Router } from 'express';

import { publisher, book, post } from '../controllers/Library'
import Publisher from '../models/Publisher';
import Book from '../models/Book';
import multer from 'multer';
import select from 'mongoose';

const upload = multer({dest: 'images/'})
const router = Router();

router.post('/post', post)
router.post('/publisher', publisher);
router.post('/book', book);
router.get('/booklist', async (req, res) => {
	console.log('책 호출됨')
	var data = await Book.find().select('title');
	console.log('책 쿼리 완료')
	res.json({ booklist: data });
});

router.get('/publisherlist', async (req, res) => {
	console.log('퍼블리셔 호출됨')
	var data = await Publisher.find().select('name');
	console.log('퍼블리셔 전달')
	res.json({ publisherlist: data });
});
export default router;