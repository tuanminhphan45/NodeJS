const Product = require("../../models/product.model");

module.exports.product = async (req, res) => {
    try {
        const products = await Product.find();
        res.render("admin/pages/product/index", {
            title: "Product Page",
            products: products,
        });
    } catch (err) {
        console.error("❌ Error fetching products:", err);
        res.status(500).send("Internal Server Error");
    }
};
