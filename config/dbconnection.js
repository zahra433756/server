import mongoose from 'mongoose';

export const dbconnection = async () => {
  try {
   let res = await mongoose.connect (process.env.DBCONNECTION)
    console.log(`db connection successfully ${res.connection.host}`)
  } catch (error) {
    console.log('error while connecting with mongodb')
  }
}
