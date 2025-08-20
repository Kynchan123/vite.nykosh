import "./App.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      distance: "30px",
      duration: 1500,
      delay: 100,
      easing: "cubic-bezier(0.65, 0, 0.35, 1)",
      mobile: true,
    });

    sr.reveal("#about", { origin: "top" });
    sr.reveal("#skills", { origin: "top" });
    sr.reveal("#projects", { origin: "top" });
    sr.reveal("#education", { origin: "top" });
    sr.reveal("#certs", { origin: "top" });
    sr.reveal("#contact", { origin: "top" });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
