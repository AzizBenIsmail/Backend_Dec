var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cars', function(req, res, next) {
  res.json('my cars');
});

module.exports = router;
