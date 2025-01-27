const Product = require("../../models/product.model");
// [GET] /admin/product
module.exports.product = async (req, res) => {
    const products = await Product.find({
        deleted: false,
    });
    
    console.log(products);
    res.render("admin/pages/product/index", {
        pageTitle: "Trang San Pham",
    });
};
