const posts = require("../models/postModel")

//to add post
exports.addPost = async (req, res) => {
    try {
        const userId = req.payload
        const { title, location, price, area, apartment, specialities, landmark, googlemap } = req.body
        const image = req.file.filename

        const newPost = new posts({
            userId, title, location, price, area, apartment, specialities, landmark, googlemap, image
        })
        await newPost.save()
        res.status(200).json(newPost)
    }
    catch (err) {
        res.status(400).json(err)
    }

}

//to display user uploaded posts on user profile
exports.getUserPosts = async (req, res) => {
    try {
        const userId = req.payload
        const userPosts = await posts.find({ userId })
        res.status(200).json(userPosts)
    }
    catch (err) {
        res.status(400).json(err)
    }

}

//to view more option
exports.getViewPost = async (req, res) => {
    try {
        const { id } = req.params
        const viewPost = await posts.findOne({ _id: id })
        res.status(200).json(viewPost)
    }
    catch (err) {
        res.status(400).json(err)
    }
}


//to delete user posts on user profile
exports.deletePost = async (req, res) => {
    try {
        const { id } = req.params
        const val = await posts.findOneAndDelete({ _id: id })
        res.status(200).json(val)
    }
    catch (err) {
        res.status(400).json(err)
    }
}

//to display all post in home 

exports.getHomePosts = async (req, res) => {
    try {
        const serach=req.query.searchkey
        // console.log(serach);
        
        const allposts = await posts.find({location:{$regex:serach , $options:'i'}})
        res.status(200).json(allposts)
    }
    catch (err) {
        res.status(400).json(err)
    }

}