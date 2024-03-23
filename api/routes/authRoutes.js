import express from 'express';
import { Signup, google } from '../controller/authController.js';
import {Signin} from '../controller/authController.js'

const router = express.Router();
router.post('/signup',Signup)
router.post('/signin',Signin)
router.post('/google',google)

export default router;