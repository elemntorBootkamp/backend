import express from 'express';
const cpuRout=express.Router();
import cpuController from '../controllers/cpuController.js';

cpuRout.get('/',cpuController.getAll);

export default cpuRout;