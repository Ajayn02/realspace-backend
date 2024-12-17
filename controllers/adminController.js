const admins=require('../models/adminModel')


exports.adminLogin=async(req,res)=>{
    try{
        const {email,password}=req.body
        const existing=await admins.findOne({email,password})
        if(existing){
            res.status(200).json("Admin Exist")
        }else{
            res.status(404).json("Not found")
        } 
    }
    catch(err){
        res.status(400).json(err)
    }
}