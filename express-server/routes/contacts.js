import express from 'express';
const router = express.Router();

import { getAll, getSingle} from '../controllers/contactsController.js';

router.get('/', getAll);

router.get('/:id', getSingle);

export default router;
