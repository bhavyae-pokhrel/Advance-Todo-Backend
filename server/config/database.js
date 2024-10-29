const mongoose=require("mongoose");
require("dotenv").config();

const dbConnect=()=>{
  mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 20000,

  })
  .then(()=>{
      console.log('DB is connect')
  })
  .catch((error)=>{
    console.log('DB is not connect',error.message)
  })
  
} 
 
module.exports=dbConnect  