import React, { useState, useEffect } from "react";

export default function Footer() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight - 5) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>Nykosh's Portfolio</h3>
          <p>
            Thank you for visiting my portfolio. Connect with me on socials!
          </p>
          <p>Keep Rising 🚀</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#header"> Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#certs">Certificates</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact Info</h4>
          <p>
            <i className="fa-solid fa-phone"></i> +1 817-647-2030
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i> nykosh25@gmail.com
          </p>
          <p>
            <i className="fa-solid fa-location-dot"></i> Burleson, TX
          </p>
        </div>
      </div>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/nykosh-magsalin-611a6535b/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Kynchan123">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.instagram.com/ny.isdead/">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <a href="#" className="to-top">
        <i class="fa-solid fa-chevron-up"></i>
      </a>
      {/* Scroll to Top Button */}
      <button
        className={`to-top ${isActive ? "active" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          padding: "10px 15px",
          fontSize: "18px",
          cursor: "pointer",
          display: isActive ? "bhidden" : "none",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "#333",
          color: "#fff",
          zIndex: 1000,
        }}
      >
        ↑
      </button>
    </footer>
  );
}
