const Post = require('../models/Post.Model')

// Get 
// Get ALL
const getAllPost = async(req,res,next)=>{
    try {
        const posts = await Post.find()
    return res.status(200).json(posts)
    } catch (error) {
        res.status(400).json({message: `Problème récupération données ${error}`})
    } 
}
// Get One Post 
const getOnePost = async(req,res,next)=>{
    try {
        const dataParams = req.params
        const id = dataParams.id
        const post = await Post.findById(id)
        return res.status(200).json(post)
    } catch (error) {
        res.status(400).json({message: `Problème récupération données ${error}`})
    }
}

// Post 
//Post one post
const postCreatPost = async(req,res,next)=> {
    try {
        const dataBody = req.body
        const post = Post.create({
            title: dataBody.title,
            subtitle: dataBody.subtitle,
        })
        return res.status(200).json(post)
    } catch (error) {
        res.status(400).json({message: `Problème création données ${error}`})
    }
}
// Update
// Update one post
const putUpdatePost = async(req,res,next)=>{
    try {
        const dataParams = req.params
        const dataBody = req.body
        const id = dataParams.id
        const post = await Post.findByIdAndUpdate({_id: id},{
            title: dataBody.title,
            subtitle: dataBody.subtitle,
        })
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({message: `Problème modification données ${error}`})
    }
}
// Delete
// Delete one post
const deletePost = async(req,res,next)=>{
    try {
        const dataParams = req.params
        const id = dataParams.id
        const deletePost = await Post.findById(id)
        await Post.findByIdAndDelete(id)
        res.status(200).json({message: `Post '${deletePost.title}' Suprimer avec Succès`})
    } catch (error) {
        res.status(400).json({message: `Problème suppression données ${error}`})
    }
}
module.exports = {
    getAllPost,
    getOnePost,
    postCreatPost,
    putUpdatePost,
    deletePost
}