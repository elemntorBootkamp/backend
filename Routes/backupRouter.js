import express from 'express';
const backupRout = express.Router();
import backupController from '../controllers/backupController.js';

backupRout.get('/',backupController.getAll);
backupRout.post('/',backupController.addBackup)
export default backupRout;
