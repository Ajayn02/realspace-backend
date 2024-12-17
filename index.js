require("dotenv").config()
const express = require('express')
const cors = require('cors')
require("./connection/db")
const route = require('./routes/route')
// const http = require("http")
// const {Server}=require("socket.io")


const server = express()

server.use(cors())
server.use(express.json())
server.use(route)

server.use('/uploads', express.static('./uploads'))


const PORT = 3000 || process.env.PORT

 server.listen(3000, () => {
    console.log(`server running on port ${PORT}`);
})

server.get('/', (req, res) => {
    res.send("Welcome to RE-Server")
})

// socketio

// const socketServer=http.createServer(server)
// const io=new Server (socketServer,{
//     cors:{
//         origin:"http://localhost:5173"
//     },

// })

// io.on("connection",(socket)=>{


    // console.log(`socket io connected to ${socket.id}`);
    // console.log(socket);
    
    // socket.on("roomId",(id)=>{
    //     socket.join(id)
    //     console.log(`user-${socket.id} joined room-${id}`);
    //     // socket.emit("res",msg)
    // })

//     socket.on("newmsg",(data)=>{
//         // console.log(data);
//         socket.broadcast.emit("receive_msg",data)
//         // socket.emit("receive_msg",data)

//     })

//     socket.on("disconnect",()=>{
//         // console.log(`user disconnected ${socket.id}`);
        
//     })
    
// })

// socketServer.listen(3001,()=>{
//     console.log("socket server running ");
    
// })