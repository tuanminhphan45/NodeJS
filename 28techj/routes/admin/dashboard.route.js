const express = require("express");
const router = express.Router();

const conttroller = require("../../controllers/admin/dashboard.controller");
router.get("/", conttroller.dashboard);

module.exports = router;
