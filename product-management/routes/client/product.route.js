// nhúng thư viện express để dùng tính năng Router
const express = require("express");
const router = express.Router();

/*
    chỉ cần khai báo / là trang chủ 
    /create là products/create
    vì bên index.route.js đã khai báo /products 
        vì vậy nên khi sử dụng nó sẽ nối chuỗi lại
*/
router.get("/", (req, res) => {
    res.render("client/pages/products/index");
});

router.get("/create", (req, res) => {
    res.render("client/pages/products/create/index");
});

module.exports = router;
