const express=require('express')
const router=express.Router()

const{addUser}=require("../controller/addUser")
const {login}=require("../controller/login")
const {addTask}=require("../controller/addTask")
const {updateTask}=require("../controller/addTask")
const {deleteTask}=require("../controller/addTask")
const {getTask}=require("../controller/addTask")
const {sendOTP}=require("../controller/OTP")

router.post("/login",login)
router.post("/signup",addUser)  
router.post("/addTask",addTask)
router.put("/updateTask/:id",updateTask)
router.delete("/deleteTask/:id",deleteTask)
router.get("/getTask/:id",getTask)
router.post("/otp",sendOTP)

 
module.exports=router