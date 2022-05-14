const express = require("express");
const adminController = require("../controllers/adminController.js");

const router = express.Router();

router.post("/signin", adminController.adminLogin);

router.get("/users", adminController.getUsers);

router.post("/addRecruiter",adminController.addRecruiters);
module.exports = router;
