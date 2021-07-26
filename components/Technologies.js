import React, { useState } from "react";

import TechStyles from "../styles/techns.module.css";

import Technologie from "./technologie";

const Technologies = () => {
  const [tech, setTech] = useState([
    {
      id: "1",
      tech: "fab fa-react",
      title: "Front-End",
      para: "Experience with  React.js",
    },
    {
      id: "2",
      tech: "fab fa-node",
      title: "Back-End",
      para: "Experience with Node and Databases",
    },
    {
      id: "3",
      tech: "fab fa-figma",
      title: "UI/UX",
      para: "Experience with tools like Figma",
    },
  ]);

  return (
    <div className={TechStyles.technologies} id="technologies">
      <h1>Technologies</h1>
      <p>
        I&apos;ve worked with a range a technologies in the web development world.
        From Back-end To Design.
      </p>

      <div className={TechStyles.techgroup}>
        {tech.map((t) => {
          return (
            <Technologie
              title={t.title}
              para={t.para}
              tech={t.tech}
              key={t.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
