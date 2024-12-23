import express from 'express';
import dotenv from 'dotenv';
import { dbconnection } from './config/dbconnection.js';
import userroutes from './routes/user.js';
import User from './model/usermodel.js';
import productroutes from './routes/product.js';
import cookieParser from 'cookie-parser';

import cors from 'cors';
import jobroutes from './routes/jobroutes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors(
  {
    origin: 'http://localhost:5173',
    credentials: true,
  }
))
const port =process.env.PORT || 5000
dbconnection();
app.use(cookieParser())
app.use("/api",userroutes)
app.use("/api",productroutes)
app.use("/api",jobroutes)
User();
app.listen(port,() => {
  console.log(`Server is listening on the port ${port}`)
})
