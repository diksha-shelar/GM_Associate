import React, { useState } from "react";
import "./form.css";
import { FaBuilding, FaEnvelope } from "react-icons/fa";
import formImg from "../assets/constructor.webp";
const apiUrl = process.env.REACT_APP_API_URL;

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch(`${apiUrl}/api/contact/saveinfo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("✅ Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(`❌ Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("❌ Server error. Try again later.");
    }
  };

  return (
    <div className="form-container">
      <div className="form-section">
        <h2 className="form-title">Let's Talk</h2>
        <p className="form-subtitle">Have an Upcoming Project?</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input-field"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input-field"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input-field"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            className="textarea-field"
            value={formData.message}
            onChange={handleChange}
            required></textarea>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        {/* ✅ Show Status Message */}
        {status && <p className="status-message">{status}</p>}
      </div>

      <div className="meet-info">
        <div className="info-block">
          <FaBuilding className="custom-icon" />
          <div>
            <h3>Office</h3>
            <p>123 Business St, New York, NY</p>
          </div>
        </div>

        <div className="info-block">
          <FaEnvelope className="custom-icon" />
          <div>
            <h3>Email Us</h3>
            <p>contact@yourbusiness.com</p>
          </div>
        </div>
      </div>

      <div className="image-section-form">
        <img src={formImg} alt="Office" />
      </div>
    </div>
  );
};

export default Form;
