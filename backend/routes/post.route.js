const express = require('express')
const router = express.Router()

const PostController = require('../controllers/post.controller');

router.get('/getAllPost', PostController.getAllPost)
router.get('/getOnePost/:id', PostController.getOnePost)
router.post('/postCreatePost', PostController.postCreatPost)
router.put('/putUpdatePost/:id', PostController.putUpdatePost)
router.delete('/deletePost/:id', PostController.deletePost)
module.exports = router