import expressAsyncHandler from "express-async-handler";
import User from "../model/usermodel.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

export const createuser = async(req, res) => {
try {
  const {name, email,password,confirmpassword} = req.body;
  if (password!==confirmpassword) {
    return res.status(400).json({message:"password do not match"})
  }
  const userExist = await User.findOne({email})
  if (userExist) {
    return res.status(400).json({message:"user already exists"})
  }
  const hashPassword = await bcrypt.hash(password, 10)
  const user = await User.create({
    name,
    email,
    password:hashPassword,
    
  })
  if(user){
    res.status(201).json({
      name:user.name,
      email:user.email,

      _id:user._id,
      role:user.admin,
      message: "User created successfully"
  })
  }
} catch (error) {
  console.log(error)
  res.status(500).json({
    message: "Error creating user",
    error: error.message })
}
}
export const loginuser = expressAsyncHandler(async(req, res) => {
  const {email, password} = req.body;
  try {
  const user = await User.findOne({email})
  if (!user) {
    return res.status(401).json({message: "Invalid email or password"})
  }
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    return res.status(401).json({message: "Invalid email or password"})
  }
  const token = jwt.sign({_id: user._id}, process.env.SECRETKEY, {expiresIn:"1h"})
  res.cookie("jwt",token,{httpOnly:true, maxAge:1*60*60}) //1 hour cookie
  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    address: user.address,
    token,
    role: user.admin,
    message: "User logged in successfully"
  })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Error logging in user"})
  }
})


export const getUserProfile = expressAsyncHandler (async (req, res) => {
  const {id} = req.params;
  const user = await User.findById(id)
  if (user) {
    res.json({
      _id:user._id,
      name:user.name,
      email:user.email,
      address:user.address,
      role:user.admin
})
  }else{
    res.status(404).json({message:"User not found"})
  }
})
// export const loginuser =async (req,res)=> {
//  try {
//   const {email, password}= req.body;
//   const user =await User.findOne({email: email})
//   if (!user) {
//     throw new Error("invalid email or password")
//   }
//   res.json({
//     message: "User logged in Successfully",
//     user
//   })
// } catch (error) {
//   res.status(400).json({
//     message: "Invalid email or password",
//     error: error.message
//   })
// }
// }