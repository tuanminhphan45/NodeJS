// tách lẻ router (vì trong các trang có nhiều trang con)
const productsRouter = require("./product.route");
const homeRouter = require("./home.router");

// app được truyền lấy từ bên index.js
// phải sử dụng module.exports thì bên index.js mới sử dụng được
module.exports = (app) => {
    // sử dụng homeRouter
    app.use("/", homeRouter);
    // sử dụng productsRouter
    app.use("/products", productsRouter);
};
