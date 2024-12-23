import express from 'express';
import { createproduct } from '../controller/product.js';
const productroutes = express.Router();
productroutes.route('/createproduct').post(createproduct)

export default productroutes;