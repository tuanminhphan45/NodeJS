// Bước 1 : Cài đặt express khởi tạo server
const express = require("express");
const path = require("path");
const app = express();
//khai báo cổng
const port = process.env.PORT || 3000;
// Bước 2: Khởi tạo template engine
// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Bước 3: Khai báo route
//khai báo route
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/pminh", (req, res) => {
    res.render("sample.ejs", { name: "Phan Minh" });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
