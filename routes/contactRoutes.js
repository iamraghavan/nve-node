const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// POST route for form submission
router.post("/send-mail", contactController.sendMail);

module.exports = router;
