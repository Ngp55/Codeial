
const express = require('express');
const router = express.Router();
const passport = require('passport');











const usersConrtoller = require('../controllers/users_controller');

router.get('/profile',passport.checkAuthentication,usersConrtoller.profile);
console.log("user router is loaded");



router.get('/sign-up' , usersConrtoller.signUp);
router.get('/sign-in',usersConrtoller.signIn);

router.post('/create', usersConrtoller.create);
//use passport as middlewaer to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
) ,usersConrtoller.createSession);


router.get('/sign-out',usersConrtoller.destorySession);

module.exports = router;