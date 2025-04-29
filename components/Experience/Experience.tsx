import "./Experience.css";
import experienceData from "../../public/data/experience.json";

export default function Experience() {
  const jobs = experienceData;
  return (
    <div className="component-container">
      <div className="page-container">
        <div className="experience-card">
          <ul className="timeline">
            {jobs.map((job, index) => (
              <li className="timeline-event" key={index}>
                <label className="timeline-event-icon"></label>
                <div className="timeline-event-copy">
                  <p className="timeline-event-thumbnail">
                    {job.startDate} - {job.endDate}
                  </p>
                  <h3>{job.jobTitle}</h3>
                  <h4>
                    <a href={job.companyLink}>{job.companyName}</a>
                  </h4>
                  <p>{job.jobDescription}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
