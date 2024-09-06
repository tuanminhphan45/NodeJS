// b1:
const express = require("express");

const systemConfig = require("./config/system.js");

// cấu hình file .env để dùng được biến
require("dotenv").config();

// b1:cấu hình express và cổng
const app = express();
const port = process.env.PORT;

// b2:cấu hình routing
const router = require("./routes/client/index.route");
const routerAdmin = require("./routes/admin/index.route");

// b3:cấu hình kết nối database
const database = require("./config/database.js");
database.connect(process.env.MONGO_URL);

// b4:cấu hình pug vào dự án
app.set("views", "./views");
app.set("view engine", "pug");

// cách dùng biến vào file pug
app.locals.prefixAdmin = systemConfig.prefixAdmin;

// cấu hình file tĩnh css/images
app.use(express.static("public"));
// b2:
router(app);
routerAdmin(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
