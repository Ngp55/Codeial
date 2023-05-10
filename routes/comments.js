const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/comments_controller');
//required passport for authentication
const passport = require('passport');

//to verify user is logged in (using checkAuthentication present in the passport local strategy js)
router.post('/create',passport.checkAuthentication,commentsController.create);


module.exports = router;