const mongoose = require("mongoose");
const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    des: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountPercentage: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },
    position: {
        type: Number,
        required: true,
    },
    deleted: {
        type: Boolean,
        default: false,
    },
});

const Products = mongoose.model("Products", ProductsSchema, "products");
module.exports = Products;
