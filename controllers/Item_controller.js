var mongoose = require('mongoose');
var Item = require('../models/Item.js');

/* GET ALL ITEMS */
exports.get_all_items = function(req, res, next) {
    Item.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
})};

/* SAVE ITEM */
exports.save_item = function(req, res, next) {
  Item.create({name : req.body.name,
    company : req.body.company,
    family : req.body.family,
    productCode : req.body.productCode,
              gender : req.body.gender,
              category : req.body.category,
              price : req.body.price, 
              status : req.body.status,
              ml : req.body.ml,
              image : req.body.image
              }, function (err, post) {
      if (err) return next(err)
      res.json(post);
})};

/* GET SINGLE ITEM BY ID */
exports.get_item_by_id = function(req, res, next) {
    Item.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
})};

/* UPDATE ITEM */
exports.update_item = function(req, res, next) {
    Item.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
})};

/* DELETE ITEM */
exports.delete_item = function(req, res, next) {
    Item.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
})};

/* GET BY CATEGORY */
exports.get_by_category = function(req, res, next) {
  Item.find({category : req.params.category}, function(err, products) {
    if (err) return next(err);
    res.json(products);
})};

/* GET BY STATUS */
exports.get_by_status = function(req, res, next) {
  Item.find({status : req.params.status}, function(err, products) {
    if (err) return next(err);
    res.json(products);
})};

/* GET BY CATEGORY AND GENDER */
exports.get_by_category_and_gender = function(req, res, next) {
  Item.find({category : req.params.category,
             gender : req.params.gender}, function(err, products) {
    if (err) return next(err);
    res.json(products);
})};

/* GET BY CATEGORY AND GENDER AND STATUS */
exports.get_by_category_and_gender_and_status = function(req, res, next) {
  Item.find({category : req.params.category,
             gender : req.params.gender,
             status : req.params.status}, function(err, products) {
    if (err) return next(err);
    res.json(products);
})};

/* GET BY COMPANY AND TYPE AND STATUS*/
exports.get_by_company_and_type_and_status = function(req, res, next) {
  Item.find({company : req.params.company,
             family : req.params.family,
             status : req.params.status}, function(err, products) {
    if (err) return next(err);
    res.json(products);
})};