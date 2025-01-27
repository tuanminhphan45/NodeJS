const express = require("express");
const router = express.Router();

const conttroller = require("../../controllers/admin/product.controller");
router.get("/", conttroller.product);

module.exports = router;
