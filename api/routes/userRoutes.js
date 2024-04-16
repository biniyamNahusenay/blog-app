import express from 'express';
import { test,updateUser,signout,deleteUser, getUserss} from '../controller/userController.js';
import {verifyToken} from '../utils/verifyUser.js'

const router = express.Router();

router.get('/test',test)
router.put('/update/:userId',verifyToken,updateUser)
router.delete('/delete/:userId',verifyToken,deleteUser)
router.post('/signout',signout)
router.get('/getusers',verifyToken,getUserss)

export default router;