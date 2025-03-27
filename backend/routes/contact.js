const express = require("express");
const axios = require("axios");
const Contact = require("../Models/Contact");

const router = express.Router();

// ✅ POST route to save contact form data and send email via Web3Forms
router.post("/saveinfo", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();

    // ✅ Send Email using Web3Forms API
    const response = await axios.post("https://api.web3forms.com/submit", {
      access_key: process.env.WEB3FORMS_ACCESS_KEY, // Store in .env
      name,
      email,
      phone,
      subject,
      message,
    });

    if (response.data.success) {
      return res
        .status(201)
        .json({ message: "✅ Contact form submitted successfully" });
    } else {
      return res.status(500).json({ error: "❌ Email sending failed" });
    }
  } catch (error) {
    console.error("❌ Error saving contact or sending email:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
