/*
cons express = require('express')
const router = express.Router();
*/
//two lines in one
const router = require('express').Router();

router.use('/users', require('./users'))
router.use('/plants', require('./plants'));
router.use('/sites', require('./sites'));

// Error Handling
router.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
  })

module.exports = router;