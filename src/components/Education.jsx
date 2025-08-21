import React from "react";

import schoolLogo1 from "../assets/school-logo.jpg";
import schoolLogo2 from "../assets/school-logo2.jpg";
import schoolLogo3 from "../assets/school-logo3.jpg";

const education = [
  {
    src: schoolLogo1,
    alt: "School Logo",
    title: "Elementary School",
    year: "2009-2014",
  },
  {
    src: schoolLogo1,
    alt: "School Logo",
    title: "Middle School",
    year: "2014-2017",
  },
  {
    src: schoolLogo1,
    alt: "School Logo",
    title: "High School",
    year: "2017-2018",
  },
  {
    src: schoolLogo2,
    alt: "School Logo",
    title: "High School",
    year: "2018-2021",
  },
  {
    src: schoolLogo3,
    alt: "School Logo",
    title: "College",
    year: "2022-2025",
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="e-container">
        <div className="edu-title">
          <i className="fa-solid fa-graduation-cap"></i>
          <h1>
            <span className="span">Education</span>
          </h1>
        </div>

        {/* Render each certificate card */}
        {education.map(({ src, alt, title, year }) => (
          <div className="education-card" key={title}>
            <img src={src} alt={alt} className="education-image" />
            <div className="education-info">
              <h2>{title}</h2>
              <p>
                <span className="year">{year}</span>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
