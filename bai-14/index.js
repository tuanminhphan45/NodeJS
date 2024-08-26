const express = require("express");
const mongoose = require("mongoose");

// kết nối tưới databse mongodb
mongoose.connect("mongodb://127.0.0.1:27017/Products-test");

// khởi tạo form data cho product trỏ tới trong db
const Product = mongoose.model("product", {
    title: String,
    price: Number,
    thumbnail: String,
});

// khởi tạo cổng 
const app = express();
const port = 3000;

// setup template để render
app.set("views", "./views");
app.set("view engine", "pug");

// trang chủ
app.get("/", (req, res) => {
    res.render("index.pug", {
        title: "Trang chủ",
    });
});

// trang products
app.get("/products", async (req, res) => {
    // hàm truy xuất dữ liệu 
    const products = await Product.find({});
    console.log(products);
    res.render("products", {
        title: "Danh sách sản phẩm",
        message: "xin chào",
        products: products,
    });
});

app.get("/blog", (req, res) => {
    res.send("<h2> Trang blog</h2>");
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
