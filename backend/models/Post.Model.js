const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    },
    subtitle: String,
    // description: String,
    // status: { type: String,
    //     enum: ["DRAFT", "PUBLISHED"]},
    // author: {type: mongoose.Types.ObjectId, ref:"User"},
    images: String,
    date: {
        type: Date,
        default: Date.now()
    }
},{timestamps: true })

module.exports = mongoose.model('Post', postSchema)