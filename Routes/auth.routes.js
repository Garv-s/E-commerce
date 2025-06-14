import express from 'express';
const router = express.Router();
import {signup,login} from "../Controllers/authController.js";
import {verifyToken} from "../middleware/auth.middleware.js";

router.post('/signup', signup);
router.post('/login', login);

router.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Protected route accessed', user: req.user });
});

export default router;
