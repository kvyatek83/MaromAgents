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
      .get('/status/:status', item_controller.get_by_status)
      .get('/category/:category/gender/:gender', item_controller.get_by_category_and_gender)
      .get('/category/:category/gender/:gender/status/:status', item_controller.get_by_category_and_gender_and_status)
      .get('/company/:company/family/:family/status/:status', item_controller.get_by_company_and_type_and_status);

module.exports = router;