import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
export const protect = async(req,res,next) => {
const authtoken = req.cookies.jwt;
if(!authtoken){
  return res.status(401).json({message: "not authenticated"})
}
try {
const decode = jwt.verify(authtoken, process.env.SECRETKEY);
req.user = decoded.user;
next();
} catch (err) {
  return res.status(401).json({message: "Invalid or expired token"});
}
};