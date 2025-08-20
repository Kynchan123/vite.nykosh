import React from "react";

export default function Footer() {
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
    </footer>
  );
}
