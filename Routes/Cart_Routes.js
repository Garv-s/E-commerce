
import express from 'express';
const router = express.Router();
import cartController from "../Controllers/Cart/cart_Controller.js";

router.post('/',cartController.addToCart);
router.get('/',cartController.viewCart);
router.delete('/',cartController.removeFromCart);

export default router;
