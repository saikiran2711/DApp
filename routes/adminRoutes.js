const express = require("express");
const adminController = require("../controllers/adminController.js");

const router = express.Router();

router.post("/signin", adminController.adminLogin);

router.get("/users", adminController.getUsers);
router.get("/recruiters", adminController.gerRecruiters);

router.post("/addRecruiter", adminController.addRecruiters);

router.post("/sendEmail", adminController.sendEmail);
module.exports = router;
