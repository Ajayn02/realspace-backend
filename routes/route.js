const express=require("express")
const userController=require("../controllers/userController")
const postController=require('../controllers/postController')
const saveController=require('../controllers/saveController')
const chatController=require('../controllers/chatController')
const adminController=require('../controllers/adminController')
const reportController=require('../controllers/reportController')
const jwtMiddle=require('../middlewares/jwtMiddle')
const multerMiddle=require('../middlewares/multerMiddleware')


const route=express.Router()

//user
route.post('/reg',userController.userRegister)
route.post('/log',userController.userLogin)
route.get('/getuser',jwtMiddle,userController.getUser)
route.put('/updateuser',jwtMiddle,multerMiddle.fields([{name:"image",maxCount:1},{name:"background",maxCount:1}]),userController.updateUser)
route.get("/getalluser",jwtMiddle,userController.getAllUsers)


//post
route.post('/addpost',jwtMiddle,multerMiddle.single('image'),postController.addPost)
route.get('/userposts',jwtMiddle,postController.getUserPosts)
route.get('/viewpost/:id',jwtMiddle,postController.getViewPost)
route.delete('/deletepost/:id',jwtMiddle,postController.deletePost)
route.get('/getallposts',jwtMiddle,postController.getHomePosts)

//saved
route.post('/addsave',jwtMiddle,saveController.addSave)
route.get('/getsaved',jwtMiddle,saveController.getSaved)
route.delete('/unsave/:id',jwtMiddle,saveController.unsave)

//chat
route.post('/addchat',jwtMiddle,chatController.addChat)
route.get('/getchats',jwtMiddle,chatController.getChats)
route.get('/getonechat/:id',jwtMiddle,chatController.getspecificChat)
route.put('/addmsg/:id',jwtMiddle,chatController.addmsg)
route.delete('/delchat/:id',jwtMiddle,chatController.deleteChat)


//admin
route.post('/admin',jwtMiddle,adminController.adminLogin)

//post-reports
route.post('/addreport',jwtMiddle,reportController.addReport)
route.get('/allreports',jwtMiddle,reportController.getReports)
route.delete('/delreport/:id',jwtMiddle,reportController.delReports)

//other-reports
route.post('/addotherrep',jwtMiddle,reportController.addOtherRep)
route.get("/getotherrep",jwtMiddle,reportController.getOtherRep)
route.delete('/delotherrep/:id',jwtMiddle,reportController.delotherRep)



module.exports=route