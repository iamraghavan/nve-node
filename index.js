const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const pageRoutes = require("./routes/pageRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine (for product-details only)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(bodyParser.json({ limit: "10kb" }));

// Serve Static Files
app.use(express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// Routes
app.use("/", pageRoutes);

// 404 Page Not Found
app.use((req, res) => {
    res.status(404).send("Page not found");
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
