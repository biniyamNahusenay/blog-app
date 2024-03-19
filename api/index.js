import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js"

dotenv.config();

const app = express()
app.use(express.json())

app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)

try{
    mongoose.connect(process.env.mongo_url)
  console.log("mongodb connected")
}catch(err){
   console.log(err)
   process.exit(1)
}

app.listen(3000,()=>{
    console.log('server is running on port 3000!!')
})