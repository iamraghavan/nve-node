const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

router.get("/", pageController.home);
router.get("/contact-us", pageController.contactUs);
router.get("/about-us", pageController.aboutUs);

module.exports = router;
