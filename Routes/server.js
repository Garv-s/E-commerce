import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const router = express.Router();
import authRoutes from './authRoutes.js';
import productRoutes from './ProductRoutes.js';
import cartRoutes from './Cart_Routes.js';
import orderRoutes from './Order_Routes.js';
import reviewRoutes from './Review_Routes.js';
import {verifyToken} from "../Controllers/auth/authMiddleware.js";
import Razorpay from 'razorpay';

router.use(express.json());

router.use("/auth", authRoutes);
router.use("/products", verifyToken, productRoutes);
router.use("/cart", verifyToken, cartRoutes);
router.use("/order", verifyToken, orderRoutes);
router.use("/review", verifyToken, reviewRoutes);
export default router;
