const Product = require("../../models/product.model");

module.exports.product = async (req, res) => {
    try {
        let find = {
            deleted: false
        }
        if (req.query.status) {
            find.status = req.query.status;
        }
        
        const products = await Product.find(find);
        res.render("admin/pages/product/index", {
            title: "Product Page",
            products: products,
        });
    } catch (err) {
        console.error("❌ Error fetching products:", err);
        res.status(500).send("Internal Server Error");
    }
};
