var express = require('express');
var router = express.Router();
const carController = require('../controllers/carController');

/* GET home page. */
router.get('/getCars', carController.getCars);
router.get('/getCarById/:id', carController.getCarById);
router.post('/AddCar', carController.AddCar);
router.put('/UpdateCar/:id', carController.UpdateCar);
router.put('/affectation', carController.affectation);
router.put('/desaffectation', carController.desaffectation);
router.delete('/DeleteCar/:id', carController.DeleteCar);

module.exports = router;
