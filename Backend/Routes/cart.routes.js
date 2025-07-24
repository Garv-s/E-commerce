
import express from 'express';
const router = express.Router();
import cartController from "../Controllers/cart.controller.js";

router.post('/',cartController.addToCart);
router.get('/',cartController.viewCart);
router.delete('/',cartController.removeFromCart);

export default router;
