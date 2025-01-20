// Init express
const express = require("express");
const app = express();

const port = process.env.PORT;
//Routes
const route = require("./routes/client/index.route");
route(app);

//Set view engine
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
