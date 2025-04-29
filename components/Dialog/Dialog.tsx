import React from "react";
import "./Dialog.css";

interface DialogProps {
  tool: {
    techStack: any;
    name: string;
    category?: string;
    image?: string;
    description?: string;
  };
  closeModal: () => void;
  enableImage?: boolean;
  enableTechStack?: boolean;
}

const Dialog: React.FC<DialogProps> = ({
  tool,
  closeModal,
  enableImage = true,
  enableTechStack = false,
}) => {
  return (
    <div>
      <div className="tool-modal-overlay" onClick={closeModal}>
        <div
          className="tool-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>
            {enableImage && tool.image && (
              <img
                src={tool.image}
                onError={(e) => (e.currentTarget.style.display = "none")}
                alt={tool.name}
              />
            )}

            {tool.name}
          </h2>
          <span className="tool-modal-close" onClick={closeModal}>
            Close
          </span>
          <p>{tool.description}</p>
          {enableTechStack && (
            <div className="buttons">
              {tool.techStack.map((tech, index) => (
                <div className="btn-item" key={index}>
                  {tech}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
