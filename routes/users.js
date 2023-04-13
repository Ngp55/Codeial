const express = require('express');
const router = express.Router();

console.log('users routes is loadeded ->');

const usersController = require('../controllers/users_controller');

router.get('/profile',usersController.profile);




module.exports = router;