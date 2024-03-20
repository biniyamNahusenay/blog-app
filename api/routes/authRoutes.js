import express from 'express';
import { Signup } from '../controller/authController.js';
import {Signin} from '../controller/authController.js'

const router = express.Router();
router.post('/signup',Signup)
router.post('/signin',Signin)

export default router;