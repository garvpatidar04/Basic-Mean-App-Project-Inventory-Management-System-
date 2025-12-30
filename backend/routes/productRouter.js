const express = require('express');
const productRouter = express.Router();

const {
    handleGetAllProducts,
    handleCreateProduct,
    handleGetProductById,
    handleUpdateProductById,
    handleDeleteProductById
} = require('../controller/productController')

productRouter.route('/')
.get(handleGetAllProducts)
.post(handleCreateProduct)

productRouter.route('/:id')
.get(handleGetProductById)
.put(handleUpdateProductById)
.delete(handleDeleteProductById)

module.exports = {
    productRouter,
}