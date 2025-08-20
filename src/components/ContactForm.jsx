import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState(null); // null, "SUCCESS", "ERROR"
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("https://formspree.io/f/movlqzln", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("SUCCESS");
        setFormData({ email: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="contact-form">
      <label>
        Your email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Your message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>

      {status === "SUCCESS" && <p>Thanks for your message!</p>}
      {status === "ERROR" && (
        <p>Oops! Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
