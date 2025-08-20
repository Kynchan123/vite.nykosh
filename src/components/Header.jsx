import React from "react";
import useDarkMode from "../components/DarkMode";

export default function Header() {
  const [darkMode, setDarkMode] = useDarkMode();

  const openMenu = () => {
    const menu = document.getElementById("sidemenu");
    if (menu) menu.style.right = "0";
  };

  const closeMenu = () => {
    const menu = document.getElementById("sidemenu");
    if (menu) menu.style.right = "-200px";
  };

  return (
    <header>
      {/* Dark mode toggle button */}
      <button
        id="theme-switch"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle theme"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>

      <div className="logo">
        <i className="fa-solid fa-n"></i>
        <div className="logo-text">
          <span className="span">N</span>ykosh
        </div>
      </div>

      <nav>
        <div
          className="togglebtn"
          onClick={openMenu}
          role="button"
          tabIndex={0}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul id="sidemenu" className="navlinks" style={{ right: "-200px" }}>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#certs">Certificates</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <i
            className="fas fa-times"
            onClick={closeMenu}
            role="button"
            tabIndex={0}
            aria-label="Close menu"
          ></i>
        </ul>

        <i
          className="fas fa-bars"
          onClick={openMenu}
          role="button"
          tabIndex={0}
          aria-label="Open menu"
        ></i>
      </nav>
    </header>
  );
}
