const express = require('express');
const router = express.Router();
let authController = require('../controllers/authentication');

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router; 