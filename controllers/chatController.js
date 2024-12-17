const chats = require("../models/chatModel")
const users = require("../models/userModel")

exports.addChat = async (req, res) => {
    try {
        const sendId = req.payload
        const { receiveId } = req.body

        if (sendId == receiveId) {
            res.status(404).json("its your Post")
        } else {
            const existing = await chats.findOne({ $or: [{ sendId, receiveId }, { sendId: receiveId, receiveId: sendId }] })

            if (existing) {
                res.status(406).json(existing)
            } else {

                const sendedUser = await users.findOne({ _id: sendId })
                const sendName = sendedUser.username
                const sendProfile=sendedUser.image

                const receivedUser = await users.findOne({ _id: receiveId })
                const receiveName = receivedUser.username
                const receiveProfile=receivedUser.image

                const newChat = new chats({
                    sendId, receiveId, sendName, receiveName,sendProfile,receiveProfile
                })
                await newChat.save()
                res.status(200).json(newChat)
            }
        }


    }
    catch (err) {
        res.status(400).json(err)
        console.log(err);

    }

}

exports.getChats = async (req, res) => {
    try {
        const myId = req.payload
        const myChats = await chats.find({ $or: [{ sendId: myId }, { receiveId: myId }] })
        res.status(200).json(myChats)
    }
    catch (err) {
        res.status(400).json(err)
    }

}

exports.getspecificChat=async(req,res)=>{
    try{
        const {id}=req.params
        const specificOne= await chats.findOne({_id:id})
        res.status(200).json(specificOne)
    }
    catch (err) {
        res.status(400).json(err)
    }

   
}

exports.addmsg = async (req, res) => {
    try {
        const {  send , content } = req.body
        
        const message={send,content}

        const {id} = req.params
        // console.log(req.body);
        

        const existing = await chats.findOne({_id:id})
        if (existing) {
            existing.message.push(message)
            await existing.save()
            res.status(200).json(existing)
        } else {
            res.status(404).json("Not Found Existing")
        }
    }
    catch (err) {
        res.status(400).json(err)
        console.log(err);
        
    }


}

exports.deleteChat=async(req,res)=>{
    try{
        const {id}=req.params
        
        const val=await chats.findOneAndDelete({_id:id})
        res.status(200).json(val)
    }
    catch (err) {
        res.status(400).json(err)
        console.log(err);
        
    }
   
}