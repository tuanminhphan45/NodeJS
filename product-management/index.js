const express = require("express");
const router = require("./routes/client/index.route");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// cấu hình pug vào dự án
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"))
router(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
