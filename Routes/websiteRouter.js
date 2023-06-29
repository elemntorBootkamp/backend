import express from 'express';
const websiteRout = express.Router();
import websiteController from '../controllers/websiteController.js';

websiteRout.get('/', websiteController.getall);
websiteRout.put('/update', websiteController.update);
websiteRout.get('/validcpu', websiteController.validCpu);

export default websiteRout;
