import { useRouter } from "next/router";
import React, { useState } from "react";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Sidebar from "./Sidebar";

const Homepage = () => {
  const router = useRouter();
  const [route, setRoute] = useState();

  console.log("rrrrr", route);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <Sidebar route={route} setRoute={setRoute} />
        </div>
        <div className="col-md-8">
          <Intro />

          {route == "education" ? (
            <Education />
          ) : route == "experience" ? (
            <Experience />
          ) : route == "contact" ? (
            <Contact />
          ) : (
            <>
              <Portfolio />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
