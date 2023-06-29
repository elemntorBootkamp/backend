import express from 'express';
const websiterout = express.Router();
import websitController from '../controllers/websitController.js';

websiterout.get('/',websitController.getall);
websiterout.put('/update', websitController.update);
websiterout.get('/validcpu',websitController.validCpu);
export default websiterout;