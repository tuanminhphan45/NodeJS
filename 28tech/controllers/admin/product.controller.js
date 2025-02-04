const Product = require("../../models/product.model");

const filterStatusHelper = require("../../helpers/filterStatus.js");
const searchHelper = require("../../helpers/search.js");
const paginationHelper = require("../../helpers/pagination.js");

module.exports.product = async (req, res) => {
    // filter status
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
    // end filter status

    // config pagination

    const countProdcuts = await Product.countDocuments(find);

    let objectPagination = {
        currentPage: 1,
        limitItems: 4,
    };
    paginationHelper(req.query, objectPagination,countProdcuts);

    // end config pagination


    objectPagination.skip =
        (objectPagination.currentPage - 1) * objectPagination.limitItems;
    const products = await Product.find(find)
        .limit(objectPagination.limitItems)
        .skip(objectPagination.skip);
    res.render("admin/pages/product/index", {
        title: "Product Page",
        products: products,
        filterStatus: filterStatus,
        keyword: objectSearch.keyword,
        pagination: objectPagination,
    });
};
