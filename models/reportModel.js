const mongoose=require('mongoose')

const reportSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    postId:{
        type:String,
        required:true
    }
})

const reports=new mongoose.model("reports",reportSchema)
module.exports=reports