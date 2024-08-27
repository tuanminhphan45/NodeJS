module.exports.index = (req, res) => {
    res.render("client/pages/products/index", {
        pageTitle: "Trang sản phẩm",
    });
};

module.exports.create = (req, res) => {
    res.render("client/pages/products/create/index", {
        pageTitle: "Trang tạo sản phẩm",
    });
};
