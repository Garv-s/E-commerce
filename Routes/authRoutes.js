import express from 'express';
const router = express.Router();
import {signup,login} from "../Controllers/auth/authController.js";
import {verifyToken} from "../Controllers/auth/authMiddleware.js";

router.post('/signup', signup);
router.post('/login', login);

router.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Protected route accessed', user: req.user });
});

export default router;
