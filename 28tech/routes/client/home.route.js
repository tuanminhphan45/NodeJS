const express = require("express");
const router = express.Router();

const conttroller = require("../../controllers/client/home.controller");
router.get("/", conttroller.index);

module.exports = router;
