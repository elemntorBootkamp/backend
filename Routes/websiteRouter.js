import express from 'express';
const websiteRout = express.Router();
import websiteController from '../controllers/websiteController.js';

websiteRout.get('/', websiteController.getAll);
websiteRout.get('/:userId', websiteController.getByUserId);
websiteRout.get('/search/:userId', websiteController.search);
websiteRout.put('/', websiteController.update);

export default websiteRout;
