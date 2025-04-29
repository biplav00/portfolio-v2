// app/page.js
"use client";

import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Tools from "@/components/Tools/Tools";

export default function Home() {
  return (
    <div>
      {/* <div className="vertical-line"></div> */}
      {/* <div className="horizontal-line"></div> */}
      <Navbar />
      <div className="pageContainer scrollSnapContainer">
        <section id="about" className="snapSection">
          <About />
        </section>
        <section id="tools" className="snapSection">
          <Tools />
        </section>
        <section id="experience" className="snapSection">
          <Experience />
        </section>
        <section id="projects" className="snapSection">
          <Projects />
        </section>
        <section id="contact" className="snapSection">
          <Contact />
        </section>
      </div>
    </div>
  );
}
