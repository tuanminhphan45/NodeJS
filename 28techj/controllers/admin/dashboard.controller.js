module.exports.dashboard = (req, res) => {
    res.render("admin/pages/dashboard/index", {
        pageTitel: "Trang tong quan",
    });
};
