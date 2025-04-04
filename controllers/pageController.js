const path = require("path");
const fs = require("fs");

// Path to the JSON file
const PRODUCTS_FILE_PATH = path.join(__dirname, "../data/products.json");

// Function to load products from JSON file
const loadProducts = () => {
    try {
        const data = fs.readFileSync(PRODUCTS_FILE_PATH, "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("❌ Error loading products.json:", error.message);
        return {}; // Return empty object if error occurs
    }
};

// Allowed static pages (from /public)
const ALLOWED_PAGES = ["index", "contact", "about", "products-list"];

// Function to serve static HTML pages
exports.renderPage = (page) => (req, res, next) => {
    try {
        if (!ALLOWED_PAGES.includes(page)) {
            return res.status(404).send("Page not found");
        }

        const filePath = path.join(__dirname, `../public/${page}.html`);

        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                console.error(`❌ Error: File not found -> ${filePath}`);
                return res.status(404).send("Page not found");
            }

            res.sendFile(filePath);
        });
    } catch (error) {
        console.error(`❌ Unexpected Error: ${error.message}`);
        next(error);
    }
};

// Function to render product details dynamically using EJS
exports.getProductDetails = (req, res) => {
    const products = loadProducts(); // Load products from JSON
    const productId = req.params.id;
    const product = products[productId];

    if (!product) {
        return res.status(404).render("product-details", { product: null, message: "Product not found" });
    }

    res.render("product-details", { product, message: null });
};
