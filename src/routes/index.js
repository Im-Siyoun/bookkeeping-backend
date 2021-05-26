import { Router } from 'express';

import library from './library'

const router = Router();

router.use('/library', library);

export default router;