import mongoose from "mongoose";
export const variation = new mongoose.Schema({
  color: {
    type: String,
    
  },
  size: {
    type: String,
    
  },
 
  price: {
    type: Number,
   
  }
},{timestamps: true
  
})
export const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  variation: [variation],
},{timestamps: true})

const Product = mongoose.model("Product",productSchema);

export default Product;