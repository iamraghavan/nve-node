const path = require("path");

exports.home = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
};

exports.contactUs = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
};

exports.aboutUs = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/about.html"));
};
