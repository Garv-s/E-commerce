
import express from 'express';
const router = express.Router();
import orderController from "../Controllers//Order/order_Controller.js";

router.post('/', orderController.placeOrder);
router.get('/', orderController.orderHistory);

export default router;
