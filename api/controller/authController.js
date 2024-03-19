import User from "../model/userModel.js"
import bcryptjs from "bcryptjs"

export const Signup = async (req,res)=>{
   const {username,email,password} = req.body

   if(!username || !email || !password || username === '' || email === '' || password === ''){
     return res.status(400).json({message:'All fields must be provided'})
   }
   const hashedPassword = bcryptjs.hashSync(password,10)

   const newUser = new User({
    username,
    email,
    password:hashedPassword
   })
   try {
    const user = await newUser.save()
    res.status(200).json({user})
   } catch (error) {
    res.status(404).json({message: error.message})
 }
}