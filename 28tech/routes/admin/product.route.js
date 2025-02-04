const express = require("express");
const router = express.Router();

const conttroller = require("../../controllers/admin/product.controller");
router.get("/", conttroller.product);
router.get("/change-status/inactive/123",conttroller.changeStatus)
module.exports = router;
