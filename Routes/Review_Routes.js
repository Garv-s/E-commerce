import express from 'express';
const router = express.Router();
import Review_controller from "../Controllers/review/Review_controller.js";

router.post("/", Review_controller.createReview);
router.get("/", Review_controller.viewReview);

export default router;
