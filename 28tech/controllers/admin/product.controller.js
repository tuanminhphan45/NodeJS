const Product = require("../../models/product.model");

const filterStatusHelper = require("../../helpers/filterStatus.js");
const searchHelper = require("../../helpers/search.js");
module.exports.product = async (req, res) => {
    const filterStatus = filterStatusHelper(req.query);
    let find = {
        deleted: false,
    };
    if (req.query.status) {
        find.status = req.query.status;
    }
    const objectSearch = searchHelper(req.query);
    if (objectSearch.regex) {
        find.title = objectSearch.regex;
    }
    const products = await Product.find(find);
    res.render("admin/pages/product/index", {
        title: "Product Page",
        products: products,
        filterStatus: filterStatus,
        keyword: objectSearch.keyword,
    });
};
