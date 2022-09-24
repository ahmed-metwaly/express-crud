const express = require('express');
const router  = express.Router();
const User = require('../controllers/web/userController');


router.get('/', User.user); 

router.get('/add-user', User.addUser); 

module.exports = router; 