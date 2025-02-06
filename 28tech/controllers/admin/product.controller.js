const Product = require("../../models/product.model");

const filterStatusHelper = require("../../helpers/filterStatus.js");
const searchHelper = require("../../helpers/search.js");
const paginationHelper = require("../../helpers/pagination.js");
// [GET] /admin/product
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
    paginationHelper(req.query, objectPagination, countProdcuts);

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

// [PATCH] /admin/product/change-status/:status/:id
module.exports.changeStatus = async (req, res) => {
    const status = req.params.status;
    const id = req.params.id;
    await Product.updateOne({ _id: id }, { status: status });
    res.redirect("back");
};

// [PATCH] /admin/product/change-multi
module.exports.changeMulti = async (req, res) => {
    const type = req.body.type;
    const ids = req.body.ids.split(",");
    console.log(ids);
    console.log(type);
    switch (type) {
        case "active":
            await Product.updateMany(
                { _id: { $in: ids } },
                { status: "active" }
            );
            break;
        case "inactive":
            await Product.updateMany(
                { _id: { $in: ids } },
                { status: "inactive" }
            );
            break;
    }
    res.redirect("back");
};
