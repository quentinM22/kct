const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth');
const multer = require('../middleware/multer');

const PostController = require('../controllers/post.controller');

router.get('/getAllPost', PostController.getAllPost)
router.get('/getOnePost/:id', PostController.getOnePost)
router.post('/postCreatePost', auth, multer, PostController.postCreatPost)
router.put('/putUpdatePost/:id',auth, PostController.putUpdatePost)
router.delete('/deletePost/:id',auth, PostController.deletePost)
module.exports = router