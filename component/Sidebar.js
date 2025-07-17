import Link from "next/link";
import React from "react";

const Sidebar = ({ route, setRoute }) => {
  const activeClass = (input) => {
    if (input === route) {
      return "activeLink";
    }
    return "";
  };
  return (
    <div className="sidebar">
      <div className="profile_wrap">
        <div className="pp">
          <img
            onClick={() => setRoute("")}
            className="pimage"
            src="pp.jpg"
            width="100%"
          />
        </div>
        <h3>Sandesh Belbase</h3>  
        <span>IT Enthusiast</span>
        <div className="social">
          <div className="ico">
            <Link
              href="https://www.facebook.com/sandeshbelbase11/"
              target="_blank"
            >
              <img src="fb.svg" />
            </Link>
          </div>
          <div className="ico">
            <Link
              href="https://www.linkedin.com/in/sandesh-belbase11/"
              target="_blank"
            >
              <img src="linkedin.svg" />
            </Link>
          </div>
          <div className="ico">
            <Link
              href="https://www.instagram.com/sandesh_sarkar11/"
              target="_blank"
            >
              <img src="insta.svg" />
            </Link>
          </div>
        </div>
      </div>

      <div className="desc">
        <div className="item">
          <p className="front">Age :</p>
          <p>24</p>
        </div>
        <div className="item">
          <p className="front">Current Address :</p>
          <p>Sydney NSW, Australia</p>
        </div>
        <div className="item">
          <p className="front">Work Status :</p>
          <p>Open to work</p>
        </div>
        <div className="item">
          <p className="front">Freelance :</p>
          <p style={{ color: "green" }}>Available</p>
        </div>
      </div>

      <div className="menu">
        <ul>
          {/* <Link href="/education"> */}
          <li
            onClick={() => setRoute("education")}
            className={activeClass("education")}
          >
            Education & Skills
          </li>
          {/* </Link> */}
          {/* <Link href="/experience"> */}
          <li
            onClick={() => setRoute("experience")}
            className={activeClass("experience")}
          >
            Experience
          </li>
          {/* </Link> */}
          {/* <Link href="/contact"> */}
          <li
            className={activeClass("contact")}
            onClick={() => setRoute("contact")}
          >
            Get In Touch?
          </li>
          {/* </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
