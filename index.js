const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const morgan = require("morgan");
const pageRoutes = require("./routes/pageRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine (for product-details only)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

// Middleware
app.use(helmet());
// Allow specific origin (update with your deployed domain)
app.use(cors({ origin: "https://nve-node.onrender.com" }));

app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: [
            "'self'",
            "maps.googleapis.com",
            "maps.gstatic.com",
          ],
          imgSrc: [
            "'self'",
            "maps.gstatic.com",
            "*.googleapis.com",
            "*.ggpht.com",
            "data:",
          ],
          frameSrc: ["'self'", "*.google.com"],
          styleSrc: [
            "'self'",
            "'unsafe-inline'",
            "fonts.googleapis.com",
          ],
          fontSrc: ["'self'", "fonts.gstatic.com"],
        },
      },
    })
  );

// Optionally, allow all origins (less secure):
// app.use(cors());
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

app.use(morgan("combined"));


// Error handling middleware (catch unhandled errors)
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack to console (for debugging)
    res.status(500).send("Something went wrong on the server.");
});
  

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
