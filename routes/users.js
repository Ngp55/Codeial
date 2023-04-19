
const express = require('express');
const router = express.Router();

const usersConrtoller = require('../controllers/users_controller');

router.get('/profile', usersConrtoller.profile);
console.log("user router is loaded");

module.exports = router;

router.get('/sign-up' , usersConrtoller.signUp);
router.get('/sign-in',usersConrtoller.signIn);

router.post('/create', usersConrtoller.create);