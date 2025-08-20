import React from "react";

const skills = [
  { name: "ReactJS", icon: "/assets/React_Logo_SVG.svg.png" },
  { name: "C++", icon: "/assets/cpp.png" },
  { name: "After Effects", icon: "/assets/ae.png" },
  { name: "Adobe Premiere", icon: "/assets/pr.png" },
  { name: "Javascript", icon: "/assets/JavaScript-logo.png" },
  { name: "HTML5", icon: "/assets/html.png" },
  { name: "CSS3", icon: "/assets/CSS.png" },
  { name: "GitHub", icon: "/assets/github.png" },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-container">
        <h1 className="skills-title">
          <i className="fa-solid fa-laptop-code"></i> Skills{" "}
          <span className="highlight">& Abilities</span>
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
