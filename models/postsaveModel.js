const mongoose=require("mongoose")

const saveSchema=new mongoose.Schema({
    postId:{
        type:String,
        required:true
    },
    saveId:{
        type:String,
        required:true
    },
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

const saveds=new mongoose.model('saveds',saveSchema)

module.exports=saveds