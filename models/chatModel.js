const mongoose=require('mongoose')

const chatSchema=new mongoose.Schema({
    sendId:{
        required:true,
        type:String
    },
    receiveId:{
        required:true,
        type:String
    },
    message:{
        type:Array
    },
    sendName:{
        required:true,
        type:String
    }
    ,
    receiveName:{
        required:true,
        type:String
    }
    ,
    sendProfile:{
        required:true,
        type:String
    },
    receiveProfile:{
        required:true,
        type:String
    }


})

const chats=new mongoose.model('chats',chatSchema)
module.exports=chats