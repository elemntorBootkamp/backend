import express from 'express';
const websiteRout = express.Router();
import websiteController from '../controllers/websiteController.js';

websiteRout.get('/', websiteController.getall);
websiteRout.put('/', websiteController.update);

export default websiteRout;
