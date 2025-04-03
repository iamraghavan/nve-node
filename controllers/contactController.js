const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

// JSON file path to store form submissions
const submissionsFilePath = path.join(__dirname, "../data/submissions.json");

// Function to save form data to JSON file
const saveSubmissionToFile = (data) => {
    let submissions = [];

    if (fs.existsSync(submissionsFilePath)) {
        const fileData = fs.readFileSync(submissionsFilePath);
        if (fileData.length > 0) {
            submissions = JSON.parse(fileData);
        }
    }

    data.timestamp = new Date().toISOString();
    submissions.push(data);

    fs.writeFileSync(submissionsFilePath, JSON.stringify(submissions, null, 2));
};

// Handle form submission
exports.sendMail = async (req, res) => {
    const { name, phone, email, message } = req.body;

    if (!name || !phone || !email || !message) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    try {
        saveSubmissionToFile({ name, phone, email, message });

        // Configure transporter for custom SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: process.env.MAIL_ENCRYPTION === "tls" ? false : true, // TLS uses false
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        // Email options
        const mailOptions = {
            from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: "New Contact Form Submission",
            html: `
                <h3>Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: "Message sent and saved successfully!" });
    } catch (error) {
        console.error("Email sending error:", error);
        res.status(500).json({ error: "Error sending email." });
    }
};
