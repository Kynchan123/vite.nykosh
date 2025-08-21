import React from "react";

import prImg from "../assets/pr.png";
import aeImg from "../assets/ae.png";
import jsLogo from "../assets/JavaScript-logo.png";
import weatherAppImg from "../assets/weather-app.png";

import hikigayaVideo from "../assets/hikigaya x yukino.mp4";
import cradlesVideo from "../assets/cradles.mp4";
import maririnVideo from "../assets/maririn.mp4";
import fashionWeekVideo from "../assets/fashion week.mp4";

import nakanoVideo from "../assets/nakano N.mp4";
import aiHoshinoVideo from "../assets/ai hoshino.mp4";
import maoFernVideo from "../assets/mao mao x fern.mp4";
import maomaoMographVideo from "../assets/maomao mograph v1.2.mp4";
import mographVideo from "../assets/mograph.mp4";
import yamadaVideo from "../assets/yamada.mp4";
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
        <img src={prImg} alt="Adobe Premiere" />
        <span>Adobe Premiere</span>
      </div>

      <div className="pr-works">
        <div className="video-wrapper">
          <video controls>
            <source src={hikigayaVideo} type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video controls>
            <source src={cradlesVideo} type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video controls>
            <source src={maririnVideo} type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video controls>
            <source src={fashionWeekVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="ae-proj">
        <img src={aeImg} alt="After Effects" />
        <span>After Effects</span>
      </div>

      <div className="ae-works">
        <div className="video-wrapper">
          <video controls>
            <source src={nakanoVideo} type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video controls>
            <source src={aiHoshinoVideo} type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video controls>
            <source src={maoFernVideo} type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video controls>
            <source src={maomaoMographVideo} type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video controls>
            <source src={mographVideo} type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <video controls>
            <source src={yamadaVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="js-proj">
        <img src={jsLogo} alt="Javascript" />
        <span>Javascript</span>
      </div>

      <div className="js-works">
        <a
          href="https://kynchan123.github.io/weather-app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={weatherAppImg} alt="Weather App" />
          <p>Weather App</p>
        </a>
      </div>
    </section>
  );
}
