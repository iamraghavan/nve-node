const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

// Routes for static HTML pages
router.get("/", pageController.renderPage("index"));
router.get("/contact-us", pageController.renderPage("contact"));
router.get("/about-us", pageController.renderPage("about"));
router.get("/fabrics/products", pageController.renderPage("products-list"));

// Dynamic route for product details (EJS)
router.get("/fabrics/products/:id", pageController.getProductDetails);

module.exports = router;
