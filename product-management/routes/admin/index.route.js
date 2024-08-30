// nhúng biến của hệ thống vào
const systemConfig = require("../../config/system");
// tách lẻ router (vì trong các trang có nhiều trang con)
const dashboardsRouter = require("./dashboard.route.js");
const productsRouter = require("./products.route.js");

// app được truyền lấy từ bên index.js
// phải sử dụng module.exports thì bên index.js mới sử dụng được
module.exports = (app) => {
    const PATH_ADMIN = systemConfig.prefixAdmin;
    app.use(PATH_ADMIN + "/dashboard", dashboardsRouter);
    app.use(PATH_ADMIN + "/products", productsRouter);
};
