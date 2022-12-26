import React from "react";

const Experience = () => {
  return (
    <div className="portfolio">
      <div className="text">
        <h2 style={{ borderBottom: "2px solid black" }}>Exper</h2>
        <h2 style={{ borderBottom: "2px solid #FFB330" }}>ience</h2>
      </div>
      <div className="education">
        <div className="eduElement">
          <h5>Scodus Innovations Ltd.| Kathmandu, Nepal </h5>{" "}
          <h5>Feb 2022 – July 2022</h5>
        </div>
        <li> Frontend Development</li>
        <li>Working on technologies HTML, CSS, React Js/ Next Js, Redux.</li>
      </div>

      <div className="education">
        <div className="eduElement">
          <h5>Optimum Futurist Tech Pvt. Ltd.| Kathmandu, Nepal </h5>{" "}
          <h5>March 2021 – July 2021</h5>
        </div>
        <li>Software Engineer Internship Program</li>
        <li>
          Learned HTML, CSS, React Js, Redux, Basics of Node js, Express js.
        </li>
      </div>
    </div>
  );
};
export default Experience;
