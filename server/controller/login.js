const User=require("../models/User")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

exports.login=async(req,res)=>{
    try{
        const{email,password}=req.body;

        if(!email||!password){
            return res.status(400).json({
                message:'Please fill the form'
            })
        }
    
        const user=await User.findOne({email})
        
        if(!user){
            console.log('User is not register')
            return res.status(401).json({
                success:false,
                message:'User is not register'
            }) 
        }
        else{
            if(await bcrypt.compare(password, user.password)){
                const token=jwt.sign({email:user.email,id:user._id},"Bhavyae", {expiresIn: "24h"})
                    user.token=token;
                    user.password=undefined;
                    const options = {
                        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                        httpOnly: true,
                    }
                    return res.cookie("token",token,options).status(200).json({
                        success:true, 
                        data:user,
                        token,
                        message:'Login Successfully'
                    }) 
            }
                else{
                    console.log("Password is incorrect")
                    return res.status(500).json({
                        success:false,
                        message:`Password is incorrect`
                    })
                }
    
        }
    }
    catch(error){
        console.log("Can't login",error.message)
        return res.status(500).json({
            success: false,
            message: `Login Failure Please Try Again`,
        })
    }
    
} 