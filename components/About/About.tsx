import "./About.css";
import jsonData from "../../public/data/about.json";
import Link from "next/link";

export default function About() {
  const name = jsonData.name;
  const position = jsonData.position;
  const imgPath = "";
  return (
    <div className="component-container">
      <div className="page-container">
        <div className="detail-card">
          <section className="text-container">
            <h1>{name}</h1>
            <h2>{position}</h2>
            <button className="resume-btn">
              <Link href="/resume">View Resume</Link>
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </section>
          <section className="image-container">
            <img
              className=""
              src={imgPath ? imgPath : "assets/person.jpg"}
            ></img>
          </section>
        </div>
      </div>
    </div>
  );
}
