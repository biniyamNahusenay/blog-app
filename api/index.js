import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import postRoutes from "./routes/postRoute.js"
import cookieParser from 'cookie-parser'
import commentRoute from './routes/commentRoute.js'
import path from 'path'

dotenv.config();

const __dirname = path.resolve()

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/post",postRoutes)
app.use("/api/comment",commentRoute)

app.use(express.static(path.join(__dirname,'/client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

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

app.use((err, req, res, next) =>{
  const statuscode = err.statuscode || 500
  const message = err.message || 'internal server error'
  res.status(statuscode).json({
    success:false,
    statuscode,
    message
  })
})