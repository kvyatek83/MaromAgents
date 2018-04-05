const express = require('express');
const router = express.Router();

const Item = require('../models/Item');
const item_controller = require('../controllers/Item_controller');

router.get('/', item_controller.get_all_items)
      .post('/', item_controller.save_item)
      .get('/:id', item_controller.get_item_by_id)
      .put('/:id', item_controller.update_item)
      .delete('/:id', item_controller.delete_item)
      .get('/category/:category', item_controller.get_by_category)
      .get('/category/:category/gender/:gender', item_controller.get_by_category_and_gender);

router.get('/re', (req,res,next) => {
      res.send("re");
});

// router.get('/', function(req, res, next) {
//       Item.find(function (err, products) {
//         if (err) return next(err);
//         res.json(products);
//       });
//     });

module.exports = router;