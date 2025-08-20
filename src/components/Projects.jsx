import React from "react";

export default function Projects() {
  return (
    <section id="projects">
      <div className="p-container">
        <i className="fa-solid fa-keyboard"></i>
        <h1 className="sub-title">
          <span className="span">Projects</span>
        </h1>
      </div>

      <div className="pr-proj">
        <img src="/assets/pr.png" alt="Adobe Premiere" />
        <span>Adobe Premiere</span>
      </div>

      <div className="pr-works">
        <div className="video-wrapper">
          <video controls>
            <source src="/assets/hikigaya x yukino.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video controls>
            <source src="/assets/cradles.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video controls>
            <source src="assets/maririn.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video controls>
            <source src="/assets/fashion week.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="ae-proj">
        <img src="/assets/ae.png" alt="After Effects" />
        <span>After Effects</span>
      </div>

      <div className="ae-works">
        <div className="video-wrapper">
          <video controls>
            <source src="/assets/nakano N.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video controls>
            <source src="/assets/ai hoshino.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video controls>
            <source src="/assets/mao mao x fern.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video controls>
            <source src="/assets/maomao mograph v1.2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video controls>
            <source src="/assets/mograph.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video controls>
            <source src="/assets/yamada.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="js-proj">
        <img src="/assets/JavaScript-logo.png" alt="Javascript" />
        <span>Javascript</span>
      </div>

      <div className="js-works">
        <a
          href="https://kynchan123.github.io/weather-app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/weather-app.png" alt="Weather App" />
          <p>Weather App</p>
        </a>
      </div>
    </section>
  );
}
