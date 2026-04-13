const express = require('express');
const router = express.Router()
const apiroute = require('./api')

router.use('/practice', apiroute)

module.exports= router