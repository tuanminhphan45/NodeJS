const express = require("express");
const app = express();
//khai báo cổng
const port = 3000;

// config template engine
app.set("views", "./views");
app.set("view engine", "ejs");

//khai báo route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
