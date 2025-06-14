import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const router = express.Router();
import authRoutes from './auth.routes.js';
import productRoutes from './product.routes.js';
import cartRoutes from './cart.routes.js';
import orderRoutes from './order.routes.js';
import reviewRoutes from './review.routes.js';
import {verifyToken} from "../middleware/auth.middleware.js";
import Razorpay from 'razorpay';

router.use(express.json());

router.use("/auth", authRoutes);
router.use("/products", verifyToken, productRoutes);
router.use("/cart", verifyToken, cartRoutes);
router.use("/order", verifyToken, orderRoutes);
router.use("/review", verifyToken, reviewRoutes);
export default router;
