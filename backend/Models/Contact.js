const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subject: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
