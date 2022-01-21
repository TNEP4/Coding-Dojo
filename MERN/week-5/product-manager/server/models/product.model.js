const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A Product's title is required"],
        minlength: [3, "The title must be at least 3 characters long"],
    },
    price: {
        type: Number,
        required: [true, "A Product's price is required"]
    },
    description: {
        type: String,
        required: [true, "We need a description of the Product"],
    }
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;