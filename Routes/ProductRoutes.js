
const express = require('express');
const router = express.Router();
const productController = require('../Controllers/Product/ProductController');


router.post('/add', productController.create);
router.get('/', productController.list);
router.get('/:id', productController.get);
router.put('/:id', productController.update);
router.delete('/:id', productController.remove);

module.exports = router;
