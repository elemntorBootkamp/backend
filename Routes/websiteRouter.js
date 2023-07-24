import express from 'express';
const websiteRout = express.Router();
import websiteController from '../controllers/websiteController.js';

websiteRout.get('/', websiteController.getall);
websiteRout.put('/', websiteController.update);
websiteRout.delete('/:websiteId/:userId', websiteController.delete);

export default websiteRout;
