const mongoose=require("mongoose")

mongoose.connect(process.env.DB_CONNECTION).then((res)=>{
    console.log("server connected to mongo DB");
}).catch((err)=>{
    console.log(`db connection error ${err}`);
})