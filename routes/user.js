import express from 'express';
import { createuser, getUserProfile, loginuser } from '../controller/usercontroller.js';
import { protect } from '../middleware/authmiddleware.js';

const userroutes = express.Router();
userroutes.route("/create").post(createuser);
userroutes.route("/login").post(loginuser);
userroutes.route("/profile/:id").get(protect, getUserProfile);

export default userroutes;
