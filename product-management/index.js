const express = require("express");

// cấu hình file .env để dùng được biến
require("dotenv").config();

// cấu hình express và cổng
const app = express();
const port = process.env.PORT;

// cấu hình routing
const router = require("./routes/client/index.route");
const routerAdmin = require("./routes/admin/index.route");

// cấu hình kết nối database
const database = require("./config/database.js");
database.connect(process.env.MONGO_URL);

// cấu hình pug vào dự án
app.set("views", "./views");
app.set("view engine", "pug");

// cấu hình file tĩnh css/images
app.use(express.static("public"));
router(app);
routerAdmin(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
