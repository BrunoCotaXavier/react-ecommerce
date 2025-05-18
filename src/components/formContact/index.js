import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    consent: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate here with an API or backend
  };

  return (
    <form onSubmit={handleFormSubmit} style={{ maxWidth: 600, fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", gap: 10 }}>
        <div style={{ flex: 1 }}>
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            style={{ width: "100%", border: "1px solid #00330f", padding: 8 }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            style={{ width: "100%", border: "1px solid #00330f", padding: 8 }}
          />
        </div>
      </div>

      <br />

      <label>Email *</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        style={{ width: "100%", border: "1px solid #00330f", padding: 8 }}
      />

      <br /><br />

      <div style={{ display: "flex", gap: 10 }}>
        <div style={{ flex: 1 }}>
          <label>Phone *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            style={{ width: "100%", border: "1px solid #00330f", padding: 8 }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label>Company *</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            required
            style={{ width: "100%", border: "1px solid #00330f", padding: 8 }}
          />
        </div>
      </div>

      <br />

      <label>Message *</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        required
        rows={5}
        style={{ width: "100%", border: "1px solid #00330f", padding: 8 }}
      ></textarea>

      <br /><br />

      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleInputChange}
        />
        <label style={{ fontSize: 14 }}>I agree to receive communications.</label>
      </div>

      <br />

      <button
        type="submit"
        style={{
          backgroundColor: "#00330f",
          color: "white",
          padding: "10px 30px",
          border: "none",
          cursor: "pointer",
        }}
      >
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;
