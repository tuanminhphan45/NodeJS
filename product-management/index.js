const express = require("express");
const router = require("./routes/client/index.route");

const app = express();
const port = 3000;

// cấu hình pug vào dự án
app.set("views", "./views");
app.set("view engine", "pug");

router(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
