require("dotenv").config();

const express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");

const app = express();

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);

const systemConfig = require("./config/system");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));

// Flash
app.use(cookieParser("dafsdafdas"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());
// end flash

app.locals.prefixAdmin = systemConfig.prefixAdmin;

const clientRoutes = require("./routes/client/index.route");
const adminRoutes = require("./routes/admin/index.route");
adminRoutes(app);
clientRoutes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
