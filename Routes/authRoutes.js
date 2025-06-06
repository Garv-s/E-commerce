const express = require('express');
const router = express.Router();
const { signup, login } = require('../Controllers/auth/authController');
const { verifyToken } = require('../Controllers/auth/authMiddleware');

router.post('/signup', signup);
router.post('/login', login);

router.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Protected route accessed', user: req.user });
});

module.exports = router;
