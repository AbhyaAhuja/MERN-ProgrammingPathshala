const express = require('express');

const productRouter = express.Router();

const productsController = require('../controllers/productsController.js')

productRouter.route('/')
.get(productsController.getAllProducts)
.post(productsController.addProduct)

productRouter.route('/:id')
.put(productsController.replaceProduct)
.delete(productsController.delProduct)
module.exports = productRouter;
