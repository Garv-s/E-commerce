
import express from 'express';
const router = express.Router();
import productController from "../Controllers/product.controller.js";


router.post('/add', productController.create);
router.get('/', productController.list);
//router.get('/:id', productController.get);
//router.get('/cat/:category', productController.getCat);
router.put('/:id', productController.update);
router.delete('/:id', productController.remove);

export default router;
