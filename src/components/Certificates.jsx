import React from "react";

import certImg from "../assets/cert.jpg";
import htmlCertImg from "../assets/html-cert.jpg";
import cssCertImg from "../assets/css-cert.jpg";

const certificates = [
  {
    src: certImg,
    alt: "Technical Core Certificate",
    title: "Technical Core",
    year: "2024",
    status: "Completed",
  },
  {
    src: htmlCertImg,
    alt: "Introduction To HTML Certificate",
    title: "Introduction To HTML",
    year: "2025",
    status: "Completed",
  },
  {
    src: cssCertImg,
    alt: "Introduction To CSS Certificate",
    title: "Introduction To CSS",
    year: "2025",
    status: "Completed",
  },
];

export default function Certificates() {
  return (
    <section id="certs">
      <div className="c-container">
        <div className="cert-title">
          <i className="fa-solid fa-certificate"></i>
          <h1>
            <span className="span">Certificates</span>
          </h1>
        </div>

        {/* Render each certificate card */}
        {certificates.map(({ src, alt, title, year, status }) => (
          <div className="certificate-card" key={title}>
            <img src={src} alt={alt} className="certificate-image" />
            <div className="certificate-info">
              <h2>{title}</h2>
              <p>
                <span className="year">{year}</span> |{" "}
                <span className="status">{status}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
