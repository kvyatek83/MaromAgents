var express = require('express');
var router = express.Router();

const User = require('../models/User');
var user_controller = require('../controllers/User_controller');

router.get('/', user_controller.get_all_items)
      .post('/', user_controller.is_user_valid)
      .post('/new', user_controller.save_user);

module.exports = router;