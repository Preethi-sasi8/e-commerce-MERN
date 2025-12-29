const express = require('express');
const { createorders } = require('../controllers/orderscontroller');
const router = express.Router()
router.route('/orders').post(createorders);
module.exports = router ;