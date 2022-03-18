import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="flexBox">
      <h1>Tech stack</h1>
      <div>
        <p className="homeInfos">
          As i said in the brief introduction at the home page, aether was
          created
          <br />
          for web development practice. The animations are taken care of thanks
          to <br />
          <span className="infosSpan">
            react-spring, react-three-fiber and drei
          </span>{" "}
          libraries. <br />
          The interesting part is that they applied not in DOM elements but in{" "}
          <br />
          Canvas elements and specifically to 3D objects thanks to
          <span className="infosSpan">three.js</span>
          library.The backend consist of a
          <span className="infosSpan"> PostgresSQL Database</span> connected
          with a <br />
          <span className="infosSpan">NestJS</span> API. <br />
          <a href="https://github.com/AnestisAsl/Aether-react-3d">
            {" "}
            For more informations visit my Github repository.
          </a>
        </p>
      </div>
      <button
        className="back"
        onClick={() => {
          navigate("/");
        }}
      >
        bored, take me home{" "}
      </button>
    </div>
  );
};

export default About;
