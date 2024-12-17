const mongoose=require('mongoose')

const otherReportSchema=new mongoose.Schema({
    userId:{
        required:true,
        type:String
    },
    problem:{
        required:true,
        type:String
    }

})

const otherReports=new mongoose.model("otherReports",otherReportSchema)
module.exports=otherReports