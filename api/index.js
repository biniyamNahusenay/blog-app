import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config();

const app = express()

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