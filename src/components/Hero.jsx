import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import heroImg from "../assets/aa.jpg"; // <-- Import image here

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Web Development", "Game Development", "Software Engineering"],
      typeSpeed: 70,
      backSpeed: 55,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="header" className="hero-section">
      <div className="box">
        {[...Array(10)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>

      <div className="wrapper">
        <div className="hero-container">
          <div className="hero-text">
            <h2 className="greeting">Hi There,</h2>
            <h1 className="name">
              I'm <span className="highlight">Nykosh</span>
            </h1>
            <p className="typed-text">
              I Am Into <span ref={typedRef} className="typed-span" />
            </p>

            <a href="#about" className="hero-btn">
              About Me <i className="fa-solid fa-arrow-down"></i>
            </a>

            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/nykosh-magsalin-611a6535b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/ny.isdead/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="hero-img-wrapper">
            {/* Use imported image */}
            <img src={heroImg} alt="Hero" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
