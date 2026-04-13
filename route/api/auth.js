const express = require('express');
const signupController = require('../../controllers/signupController');
const otpController = require('../../controllers/otpController');
const router = express.Router();


router.post('/signup', signupController)
router.post('/otp', otpController)


module.exports= router