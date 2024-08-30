// [GET] /admin/products
module.exports.products = async (req, res) => {
    res.render("admin/pages/products/index", {
        pageTitle: "Trang chủ",
    });
}
