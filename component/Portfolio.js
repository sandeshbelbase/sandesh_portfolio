import React from "react";
import WorkCard from "./WorkCard";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="text">
        <h2 style={{ borderBottom: "2px solid black" }}>Port</h2>
        <h2 style={{ borderBottom: "2px solid #FFB330" }}>folio</h2>
      </div>
      <WorkCard />
    </div>
  );
};

export default Portfolio;
