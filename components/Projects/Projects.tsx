import "./Projects.css";

import projects from "../../public/data/projects.json";
import { useState } from "react";
import Dialog from "../Dialog/Dialog";
import Image from "next/image";

export default function Projects() {
  const projectList = projects;

  const [selectedProject, setSelectedProject] = useState<{
    name: string;
    link?: string;
    description?: string;
    techStack?: string[];
    image?: string;
  } | null>(null);
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="component-container">
      <div className="page-container">
        <div className="projects-container">
          <div className="projects-wrapper">
            {projectList.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="image-card">
                  <Image
                    className="project-image"
                    src={
                      project.image ? project.image : "/assets/placeholder.jpg"
                    }
                    alt={"Project image"}
                    height={178}
                    width={178}
                  />
                </div>
                <div className="project-detail-card">
                  <a href={project.link}>{project.name}</a>
                  <div className="project-description">
                    {project.description}
                  </div>
                  <div className="tech-stack">
                    {project.techStack.map((tech, index) => (
                      <div className="tech-stack-item" key={index}>
                        {tech}
                      </div>
                    ))}
                  </div>
                  <button
                    className="view-more-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedProject && (
        <Dialog
          tool={{
            ...selectedProject,
            techStack: selectedProject?.techStack || [],
          }}
          closeModal={closeModal}
          enableImage={false}
          enableTechStack={true}
        />
      )}
    </div>
  );
}
