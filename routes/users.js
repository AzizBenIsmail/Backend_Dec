var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const uploadFile = require('../middlewares/uploadFile')
/* GET users listing. */
router.get('/getAllUsers',userController.getAllUsers );
router.post('/addUserClient',userController.addUserClient );
router.post('/addUserWithImg',uploadFile.single("image_user"),userController.addUserWithImg );
router.delete('/deleteUser/:id',userController.deleteUser );
router.put('/updateUser/:id',userController.updateUser );
router.put('/updatepassword/:id',userController.updatepassword );
router.put('/updateUserWithImg/:id',uploadFile.single("image_user"),userController.updateUserWithImg );
router.get('/getSortUsersByAge',userController.getSortUsersByAge );
router.get('/getSortUsersByDate',userController.getSortUsersByDate );
router.get('/searchUsersByUsername',userController.searchUsersByUsername );

module.exports = router;
