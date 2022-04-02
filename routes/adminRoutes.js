const express = require("express");
const adminController = require("../controllers/adminController.js");

const router = express.Router();

router.post("/signin", adminController.adminLogin);

module.exports = router;
