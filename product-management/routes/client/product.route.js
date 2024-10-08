// nhúng thư viện express để dùng tính năng Router
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/client/products.controller.js");
const { index, create } = controller;
/*
    chỉ cần khai báo / là trang chủ 
    /create là products/create
    vì bên index.route.js đã khai báo /products 
        vì vậy nên khi sử dụng nó sẽ nối chuỗi lại
*/
router.get("/", index);

router.get("/create", create);

module.exports = router;
