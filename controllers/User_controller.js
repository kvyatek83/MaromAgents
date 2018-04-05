var mongoose = require('mongoose');
var User = require('../models/User.js');

/* GET ALL ITEMS */
exports.get_all_items = function(req, res, next) {
    User.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
})};

/* SAVE USER */
exports.save_user = function(req, res, next) {
    User.create({username : req.body.username,
                 password : req.body.password,
                 premission : req.body.premission 
                }, function (err, post) {
        if (err) return next(err)
        res.json(post);
  })};

/* GET SINGLE USER'S premission BY USERNAME AND PASSWORD */
exports.is_user_valid = function(req, res) {
    User.findOne({username : req.body.username,
                  password : req.body.password          
    }, 'premission -_id', function(err, premission) {
    if (err)
        res.send(err);
    if(premission)
        res.json(premission)
    else
    {
        res.json({errMsg : 'The username or password invalid'})
    }
  });
};
