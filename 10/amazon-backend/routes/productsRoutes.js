const express = require('express');

const productRouter = express.Router();

const productsController = require('../controllers/productsController.js')

productRouter.route('/')
.get(productsController.getAllProducts);

module.exports = productRouter;