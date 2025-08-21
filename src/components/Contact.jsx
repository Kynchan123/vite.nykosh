import React from "react";
import "./Contact.css";
import contactImg from "../assets/undraw_coding_joxb.png";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">
        <i className="fa-solid fa-headset"></i> Get <span>In Touch</span>
      </h2>
      <div className="contact-container">
        <form
          className="contact-form"
          action="https://formspree.io/f/movlqzln"
          method="POST"
        >
          <div className="form-content">
            <div className="contact-image">
              <img src={contactImg} alt="Contact" />
            </div>
            <div className="form-fields">
              <div className="input-box">
                <i className="fa-solid fa-user"></i>
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="input-box">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="input-box">
                <i className="fa-solid fa-phone"></i>
                <input type="tel" name="phone" placeholder="Phone" />
              </div>
              <div className="input-box">
                <i className="fa-solid fa-comment"></i>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Submit <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
