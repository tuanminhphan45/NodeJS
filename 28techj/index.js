require("dotenv").config();
// Init express
const express = require("express");
const app = express();
// Init mongoose
const mongooose = require("mongoose");
mongooose.connect(process.env.MONGO_URL);


const port = process.env.PORT;
//Routes
const routeAdmin = require("./routes/admin/index.route");
const route = require("./routes/client/index.route");
routeAdmin(app);
route(app);

//Set view engine
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
