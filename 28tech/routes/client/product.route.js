const express = require("express");
const router = express.Router();

// split controller logic to controller file
const controller = require("../../controllers/client/product.controller");
router.get("/", controller.index);

module.exports = router;
