const express = require('express');
const { signUp,deleteUser,verifyOtp } = require('../Controller/auth.controller');

const authRouter = express.Router();

authRouter.post('/signup',signUp);
authRouter.post('/otpVerification',verifyOtp);
authRouter.post('/deleteUser', deleteUser);

module.exports = authRouter