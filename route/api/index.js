const express = require('express');
const router= express.Router();
const authroute = require('./auth')
router.use(express.json())

router.use('/auth', authroute)

module.exports = router