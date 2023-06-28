const express = require('express');
const { signUp,deleteUser,verifyOtp } = require('../Controller/auth.controller');

const router = express.Router();

router.post('/signup',signUp);
router.post('/otpVerification',verifyOtp);
router.post('/deleteUser', deleteUser)

module.exports = router