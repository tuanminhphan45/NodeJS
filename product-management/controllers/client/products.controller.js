const Product = require("../../model/product.model");
module.exports.index = async (req, res) => {
    const Products = await Product.find({
        status: "active",
        deleted: false,
    });

    Products.forEach((item) => {
        item.priceNew = (
            (item.price * (100 - item.discountPercentage)) /
            100
        ).toFixed(0);
    });

    console.log(Products);
    res.render("client/pages/products/index", {
        products: Products,
        pageTitle: "Trang sản phẩm",
    });
};

module.exports.create = (req, res) => {
    res.render("client/pages/products/create/index", {
        pageTitle: "Trang tạo sản phẩm",
    });
};
