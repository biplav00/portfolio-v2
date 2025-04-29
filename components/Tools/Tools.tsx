import { useState } from "react";
import "./Tools.css";
import toolsData from "../../public/data/tools.json";
import Dialog from "../Dialog/Dialog";
import Image from "next/image";

export default function Skills() {
  const [selectedTool, setSelectedTool] = useState<{
    name: string;
    category: string;
    image?: string;
    description?: string;
  } | null>(null);

  const closeModal = () => {
    setSelectedTool(null);
  };

  return (
    <div>
      <div className="component-container">
        <div className="page-container">
          <div className="skill-container">
            <div className="skill-cards">
              {toolsData.tools.map((tool, key) => {
                return (
                  <div
                    className="skill-card"
                    key={key}
                    onClick={() => setSelectedTool(tool)}
                  >
                    {tool.image && (
                      <Image
                        key={tool.image}
                        src={tool.image}
                        alt={tool.name}
                        width={100}
                        height={100}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )}

                    <h2>{tool.name}</h2>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {selectedTool && <Dialog tool={selectedTool} closeModal={closeModal} />}
    </div>
  );
}
