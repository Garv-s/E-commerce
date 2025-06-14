
import express from 'express';
const router = express.Router();
import orderController from "../Controllers/order.controller.js";

router.post('/', orderController.placeOrder);
router.get('/', orderController.orderHistory);

export default router;
