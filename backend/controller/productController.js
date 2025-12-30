const Product = require('../Models/productModel');

async function handleGetAllProducts(req, res){
    try{
        const product = await Product.find({});
        res.json(product);
    }catch(err){
        res.status(500).json({message:`Error: ${err.message}`});
    }
}

async function handleCreateProduct(req, res){
    try{
        const body = req.body;
        const newProduct = await Product.create(body);
        res.status(201).json({
            message: 'Product created successfully',
            data: newProduct
        })
    }catch(err){
        if(err.code === 11000){
            res.status(409).json({
                message: 'Product with this code already exists'
            })
        }else{
            res.status(500).json({
                message: `Error: ${err}`
            })
        }
    }
}

async function handleGetProductById(req, res){
    try{
        const productid = req.params.id;
        const product = await Product.findById(productid);
        if(!product){
            res.status(404).json({
                message: 'Product not found'
            })
        }
        res.status(200).json(product);
    }catch(err){
        res.status(500).json({
            message: `Error: ${err}`
        })
    }
}

async function handleUpdateProductById(req, res){
    try{
        const productid = req.params.id;
        const body = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            productid,
            body,
            {
                new: true,
                runValidators: true
            }
        )
        if(!updatedProduct){
            res.status(404).json({
                message: 'Product not found'
            })
        }
        res.status(200).json({
            message: 'Product updated successfully',
            data: updatedProduct
        });
    }catch(err){    
        res.status(500).json({
            message: `Error: ${err}`
        })
    }
}

async function handleDeleteProductById(req, res){
    try{
        const productid = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(productid);
        if(!deletedProduct){
            res.status(404).json({
                message: 'Product not found'
            })
        }
        res.status(200).json({ message: 'Product deleted successfully'});
    }catch(err){
        res.status(500).json({
            message: `Error: ${err}`
        })  
    }
}

module.exports = {
    handleGetAllProducts,
    handleCreateProduct,
    handleGetProductById,
    handleUpdateProductById,
    handleDeleteProductById
}
