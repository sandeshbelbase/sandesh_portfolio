import React from "react";

const Education = () => {
  return (
    <div className="portfolio">
      <div className="text">
        <h2 style={{ borderBottom: "2px solid black" }}>Education &</h2>
        <h2 style={{ borderBottom: "2px solid #FFB330", paddingLeft: "8px" }}>
          {" "}
          Skills
        </h2>
      </div>
         <div className="education">
          <div className="eduElement">
            <h5>King's Own Institute | Sydney, Australia </h5>{" "}
            <h5>Sept 2023 – June 2025</h5>
          </div>
          <p>
            MIT(Master of Information Technology) - Software Engineering
          </p>
          <div className="eduElement">
            <h5>Key Subjects </h5>
          </div>
          <p>
            Web Technology, Software Engineering, Database, OOP, Developed Roastering app for Final year Project. etc.{" "}
          </p>
        </div>
        <div className="education">
          <div className="eduElement">
            <h5>Tribhuvan University | Kathmandu, Nepal </h5>{" "}
            <h5>Nov 2017 – Jan 2022</h5>
          </div>
          <p>
            BSc. CSIT (Bachelor of Science in Computer Science and Information
            Technology)
          </p>
          <div className="eduElement">
            <h5>Key Subjects </h5>
          </div>
          <p>
            C, C++, Statistics, Software Engineering, Database, Simulation and
            modelling, Web Technology, etc.{" "}
          </p>
        </div>
      {/* <div className="text" style={{ marginTop: "0px" }}>
        <h2 style={{ borderBottom: "2px solid black" }}>Ski</h2>
        <h2 style={{ borderBottom: "2px solid #FFB330" }}>lls</h2>
      </div> */}
      <div className="education" style={{ padding: "20px 25px 10px 25px" }}>
        <div className="eduElement">
          <h5>Key Modules </h5>

          <p>
            Web technology, SDLC Models, Agile, HTML, CSS, SAAS, ES6, React Js,
            Next Js, Redux, Python, Django, DSA etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
