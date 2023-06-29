import express from 'express';
const router = express.Router();
import defultcontroller from '../controllers/controller.js';

router.post('/Add', defultcontroller.Add);
router.get('/getById/:id', defultcontroller.getById);
router.get('/getAll', defultcontroller.getAll);
router.delete('/delete/:id', defultcontroller.Delete);
router.put('/update', defultcontroller.Update);

export default router;
