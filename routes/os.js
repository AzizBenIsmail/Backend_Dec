var express = require('express');
var router = express.Router();
const os = require('os');
const osController = require('../controllers/osController');
/* GET home page. */
router.get('/osInformations', osController.getOsInformation);

module.exports = router;