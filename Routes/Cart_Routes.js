
const express = require('express');
const router = express.Router();
const cartController = require('../Controllers/Cart/cart_Controller');

router.post('/',cartController.addToCart);
router.get('/',cartController.viewCart);
router.delete('/',cartController.removeFromCart);

module.exports = router;
