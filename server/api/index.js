/*
cons express = require('express')
const router = express.Router();
*/
//two lines in one
const router = require('express').Router();

router.use('/plants', require('./plants'));
router.use('/sites', require('./sites'));

module.exports = router;