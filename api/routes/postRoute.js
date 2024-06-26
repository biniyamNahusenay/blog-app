import express from 'express';
import {verifyToken} from '../utils/verifyUser.js'
import { create, deletePost, getPosts, updatepost} from '../controller/postController.js';

const router = express.Router();

router.post('/create',verifyToken,create)
router.get('/getPosts',getPosts)
router.delete('/deletepost/:postId/:userId',verifyToken,deletePost)
router.put('/updatepost/:postId/:userId',verifyToken,updatepost)

export default router