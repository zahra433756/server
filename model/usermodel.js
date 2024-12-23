import mongoose, { Schema } from "mongoose";


export const userSchema = new Schema({
  name: {
    type: String,
    required: true
  
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  },
  role: {
    type: String,
    enum: ['user','admin', 'superamin'],
    default: "user"
  },
 
  address:{
    Street: String,
    City: String,
    State: String,
    Zip: String
    
  },
  contact:{
    Phone: String,
    Mobile: String
    
  },
})

const User = mongoose.model('User',userSchema)

export default User;