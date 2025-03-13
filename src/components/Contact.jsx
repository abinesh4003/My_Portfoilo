import React, { useState } from "react";
import "../Styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-desc">Feel free to reach out for collaborations or just a chat.</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      {submitted && <p className="success-message">Message Sent Successfully!</p>}
    </section>
  );
};

export default Contact;
