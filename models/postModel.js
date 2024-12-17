const mongoose=require("mongoose")

const postSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    apartment:{
        type:String,
        required:true
    },
    specialities:{
        type:String,
        required:true
    },
    landmark:{
        type:String,
        required:true
    },
    googlemap:{
        type:String,
        required:true
       
    },
    image:{
        type:String,
        required:true
    }
})

const posts=new mongoose.model('posts',postSchema)

module.exports=posts