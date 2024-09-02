const Product = require("../../model/product.model");

// [GET] /admin/products
module.exports.products = async (req, res) => {
    const filterStatus = [
        {
            name: "Tất cả",
            status: "",
            class: "active",
        },
        {
            name: "Hoạt Động",
            status: "active",
        },
        {
            name: "Dừng hoạt động",
            status: "inactive",
            
        },
    ];
    const find = {
        deleted: false,
    };
    if (req.query.status) {
        const index = filterStatus.findIndex(item => item.status == req.query.status);
        filterStatus.class = "active"
        find.status = req.query.status;
    }else{
        const index = filterStatus.findIndex(item => item.status == "");
        filterStatus.class = "active"
        find.status = req.query.status;

    }

    const products = await Product.find(find);
    // console.log(products);
    res.render("admin/pages/products/index", {
        pageTitle: "Trang chủ",
        products: products,
        filterStatus: filterStatus,
    });
};
