const users = require("../models/userModel")
const jwt = require("jsonwebtoken")


exports.userRegister = async (req, res) => {
    try {
        const { email, username, password, image, background } = req.body
        const newUser = new users({
            email, username, password, image, background
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
    catch (err) {
        res.status(400).json('Email Already in use')
        console.log(err);
    }

}

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const existing = await users.findOne({ email, password })
        if (existing) {
            const token = jwt.sign({ userId: existing._id }, process.env.SECRET_KEY)
            res.status(200).json({ token, username: existing.username,profile:existing.image })
        } else {
            res.status(400).json("Invalid username/Password")
        }
    }
    catch (err) {
        res.status(400).json(err)
        console.log(err);
    }

}

exports.getUser = async (req, res) => {
    try {
        const userId = req.payload
        const loggedUser = await users.find({ _id: userId })
        res.status(200).json(loggedUser)
    }
    catch (err) {
        res.status(400).json(err)
        console.log(err);
    }

}




// const image = req.files.image[0].filename
// const background = req.files.background[0].filename

exports.updateUser = async (req, res) => {
    try {
        const userId = req.payload
        // console.log(req.files)
        // console.log(req.body);

      if(req.files){
        if(req.files.image && req.files.background){
            var  image = req.files.image[0].filename
            var background = req.files.background[0].filename
            // var {username} = req.body
        }else if(req.files.image){
            var  image = req.files.image[0].filename
            var {background} = req.body
            // var {username,background} = req.body
        }else{
            var background = req.files.background[0].filename
            var {image} = req.body
            // var {username,image} = req.body
        }
       
      }else{
        // var {username,image , background}=req.body
        var {image , background}=req.body

      }

      const existing= await users.findOne({_id:userId})
    //   existing.username=username
      existing.image=image
      existing.background=background
      await existing.save()
      res.status(200).json(existing)

    }
    catch (err) {
        res.status(400).json(err)
        console.log(err);
    }

}


// to get all users in admin dashboard

exports.getAllUsers=async(req,res)=>{
    try{
        const data=await users.find()
    res.status(200).json(data)
    }
    catch (err) {
        res.status(400).json(err)
        console.log(err);
    }
    
}