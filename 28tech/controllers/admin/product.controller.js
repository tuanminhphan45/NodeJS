const Product = require("../../models/product.model");

module.exports.product = async (req, res) => {
    const filterStatus = [
        {
            name: "All",
            status: "",
            class: "",
        },
        {
            name: "Active",
            status: "active",
            class: "",
        },
        {
            name: "Inactive",
            status: "inactive",
            class: "",
        },
    ];

    if (req.query.status) {
        const index = filterStatus.findIndex(
            (x) => x.status == req.query.status
        );
        filterStatus[index].class = "active";
    } else {
        const index = filterStatus.findIndex((x) => x.status == "");
        filterStatus[index].class = "active";
    }
    let find = {
        deleted: false,
    };
    if (req.query.status) {
        find.status = req.query.status;
    }

    const products = await Product.find(find);
    res.render("admin/pages/product/index", {
        title: "Product Page",
        products: products,
        filterStatus: filterStatus,
    });
};
