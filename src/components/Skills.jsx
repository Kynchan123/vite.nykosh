import React from "react";

import reactIcon from "../assets/React_Logo_SVG.svg.png";
import cppIcon from "../assets/cpp.png";
import aeIcon from "../assets/ae.png";
import prIcon from "../assets/pr.png";
import jsIcon from "../assets/JavaScript-logo.png";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/CSS.png";
import githubIcon from "../assets/github.png";

const skills = [
  { name: "ReactJS", icon: reactIcon },
  { name: "C++", icon: cppIcon },
  { name: "After Effects", icon: aeIcon },
  { name: "Adobe Premiere", icon: prIcon },
  { name: "Javascript", icon: jsIcon },
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "GitHub", icon: githubIcon },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-container">
        <h1 className="skills-title">
          <i className="fa-solid fa-laptop-code"></i> Skills{" "}
        </h1>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
