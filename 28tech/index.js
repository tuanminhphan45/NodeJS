require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);

const systemConfig = require("./config/system");

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));

app.locals.prefixAdmin = systemConfig.prefixAdmin;


const clientRoutes = require("./routes/client/index.route");
const adminRoutes = require("./routes/admin/index.route");
adminRoutes(app);
clientRoutes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
