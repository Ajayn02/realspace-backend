const mongoose=require('mongoose')

const adminSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        required:true,
        type:String
    }
})

const admins=new mongoose.model('admins',adminSchema)
module.exports=admins