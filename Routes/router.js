import express from 'express';
const router = express.Router();
import defultcontroller from '../controllers/controller.js';

router.post('/', defultcontroller.Add);
router.get('/:id', defultcontroller.getById);
router.get('/', defultcontroller.getAll);
router.delete('/:id', defultcontroller.Delete);
router.put('/', defultcontroller.Update);

export default router;
