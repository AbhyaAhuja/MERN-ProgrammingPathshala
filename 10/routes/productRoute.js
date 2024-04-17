const express=require('express')
const productController = require('../controllers/productsController.js');
//.. here think 
const productRouter = express.Router();

productRouter.route('/')
.get(productController.getAllProducts)
.post(productController.postProduct)

productRouter.route('/:id')
.put(productController.addProduct)
.delete(productController.delProduct)

module.exports = productRouter;