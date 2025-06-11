const express = require("express");
const router = express.Router();
const Review_controller = require("../Controllers/review/Review_controller");

router.post("/", Review_controller.createReview);
router.get("/", Review_controller.viewReview);

module.exports = router;
