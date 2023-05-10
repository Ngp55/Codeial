const express = require('express');
const router = express.Router();

const postController = require('../controllers/post_controller');
//required passport for authentication
const passport = require('passport');

//to verify user is logged in (using checkAuthentication present in the passport local strategy js)
router.post('/create',passport.checkAuthentication,postController.create);


module.exports = router;