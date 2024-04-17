import express from 'express';
import { addBicy } from '../controller/controller.js';
const router = express.Router();


router.get('/', (req, res) => res.send('Hello World! desde router'));

router.post('/bicicleta', addBicy)


export default router