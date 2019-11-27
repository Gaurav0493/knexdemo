var express = require('express');
var router = express.Router();
var todoRoute = require('./todo');

router.use('/todo', todoRoute);

module.exports = router; 