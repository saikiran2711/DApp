const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signUp);

router.post("/signin", authController.signIn);

router.post("/logout", authController.logOut);

router.post("/log",authController.getLog);

module.exports = router;
