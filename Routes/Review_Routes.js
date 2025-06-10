const express = require('express');
const router = express.Router();
const Review_controller = require('../Controllers/review/Review_controller');

router.post('/',Review_controller.createReview);

module.exports=router;
