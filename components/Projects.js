import ProjectStyles from "../styles/projects.module.css";

import Image from "next/image";
import BackgroundAnimation from "./Background";
import BackgroundAnimation2 from "./Background2";

const Projects = () => {

  return (
    <div className={ProjectStyles.project}>
      <h1>Projects</h1>

      <div className={ProjectStyles.cardgroup}>
        <div className="card card1">
          <Image
            src="/1.png"
            alt="Picture of the author"
            width={500}
            height={300}
          />
          <h1>MERN Memories</h1>
          <hr />
          <p>
            Using React, Node.js, Express & MongoDB you&apos;`ll learn how to build a
            Full Stack MERN Application - from start to finish. The App is
            called Memories and it is a simple social media app that allows
            users to post interesting events that happened in their lives.
          </p>

          <div className={ProjectStyles.buttongroup}>
            <button>Code</button>
            <button>Source</button>
          </div>
        </div>
        <div className="card card1">
          <Image
            src="/2.png"
            alt="Picture of the author"
            width={500}
            height={300}
          />
          <h1>E Commerce</h1>
          <hr />
          <p>
            Using React, Node.js, Express & MongoDB you&apos;`ll learn how to build a
            Full Stack MERN Application - from start to finish. The App is
            called Memories and it is a simple social media app that allows
            users to post interesting events that happened in their lives.
          </p>

          <div className={ProjectStyles.buttongroup}>
            <button>Code</button>
            <button>Source</button>
          </div>
        </div>
        <div className="card card1">
          <Image
            src="/3.jpg"
            alt="Picture of the author"
            width={500}
            height={300}
          />
          <h1>WebRTC App</h1>
          <hr />
          <p>
            Using React, Node.js, Express & MongoDB you&apos;`ll learn how to build a
            Full Stack MERN Application - from start to finish. The App is
            called Memories and it is a simple social media app that allows
            users to post interesting events that happened in their lives.
          </p>

          <div className={ProjectStyles.buttongroup}>
            <button>Code</button>
            <button>Source</button>
          </div>
        </div>
        <div className="card card1">
          <Image
            src="/4.jpg"
            alt="Picture of the author"
            width={500}
            height={300}
          />
          <h1>Unichat</h1>
          <hr />
          <p>
            Using React, Node.js, Express & MongoDB you&apos;`ll learn how to build a
            Full Stack MERN Application - from start to finish. The App is
            called Memories and it is a simple social media app that allows
            users to post interesting events that happened in their lives.
          </p>

          <div className={ProjectStyles.buttongroup}>
            <button>Code</button>
            <button>Source</button>
          </div>
        </div>
      </div>
      <BackgroundAnimation />
      <BackgroundAnimation2 />
    </div>
  );
};

export default Projects;
