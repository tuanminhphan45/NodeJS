const express = require("express");
const router = express.Router();

const conttroller = require("../../controllers/admin/product.controller");
const { route } = require("./dashboard.route");
router.get("/", conttroller.product);
router.patch("/change-status/:status/:id", conttroller.changeStatus);
router.patch("/change-multi", conttroller.changeMulti);
router.delete("/delete/:id", conttroller.delete);


module.exports = router;
