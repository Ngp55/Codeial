const express = require('express');
const router = express.Router();

console.log('Home router is loaded');

const homeController = require('../controllers/home_controller');


router.get('/', homeController.home);

router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));

//for any furter routes , access from here
//router.use('/routerName', require('./routerfile'));


module.exports = router;