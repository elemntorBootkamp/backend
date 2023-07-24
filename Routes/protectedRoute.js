import express from 'express';
const protectedRout = express.Router();
import protected1 from '../controllers/protected.js';

protectedRout.get('/', protected1.getCheck);

export default protectedRout;
