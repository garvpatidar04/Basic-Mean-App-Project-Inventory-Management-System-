const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productCode: {
        type: String,
        required: [true, 'Product code is mandatory'],
        unique: true,
        trim: true
    },
    productName: {
        type: String,
        required: [true, 'Product name is mandatory'],
        trim: true
    },
    category: {
        type: String,
        required: [true, 'Category is mandatory'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Price is mandatory'],
        min: [0, 'Price cannot be negative']
    }
}, {
    timestamps: true
});
const Product = mongoose.model('product', productSchema);

module.exports = Product;