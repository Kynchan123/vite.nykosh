import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <h1 className="about-title">
          <i className="fa-solid fa-circle-user"></i>{" "}
          <span className="highlight">About</span> Me
        </h1>

        <div className="about-content">
          <div className="about-img-wrapper">
            <img src="/assets/a1.jpg" alt="Profile" className="about-img" />
          </div>

          <div className="about-text">
            <p>
              I'm passionate about creating immersive worlds, engaging gameplay,
              and memorable player experiences. I'm currently building my skills
              in game design and programming with
              <strong>
                {" "}
                Python, JavaScript, React, C++, Unity, and Unreal Engine
              </strong>
              .
            </p>
            <p>
              I also have experience with video editing, especially making AMVs,
              which has helped me develop a strong sense of timing, pacing, and
              emotional storytelling.
            </p>
            <p>
              I'm working on small indie projects and am always open to
              feedback, mentorship, and collaboration.
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:nykosh25@gmail.com">nykosh25@gmail.com</a>
            </p>
            <div className="btn-group">
              <a href="assets/CVnykosh.pdf" className="btn btn-resume" download>
                <i className="fa-solid fa-download"></i> Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
