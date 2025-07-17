import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const WorkCard = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
  };
  return (
    <div className="workWrap">
      
      <Slider {...settings}>
        <div>
          <div className="WorkCard">
            <Link
              href="https://www.nepalina.com/"
              target="_blank"
              rel="noreferrer"
              replace
            >
              <img src="./nepalina.png" alt="" height="auto" width="400px" />{" "}
            </Link>
          </div>
        </div>

         <div>
          <div className="WorkCard">
            <Link
              href="https://appinnovate.netlify.app/"
              target="_blank" 
              rel="noreferrer"
              replace
            >
              <img src="./appinnovate.png" alt="" height="auto" width="400px" />{" "}
            </Link>
          </div>
        </div>

         <div>
          <div className="WorkCard">
            <Link
              href="https://boostupcleaningservices.au/"
              target="_blank" 
              rel="noreferrer"
              replace
            >
              <img src="./boostup.png" alt="" height="auto" width="400px" />{" "}
            </Link>
          </div>
        </div>
        
        <div>
          <div className="WorkCard">
            <Link
              href="https://hamrodrink.vercel.app/ "
              target="_blank"
              rel="noreferrer"
              replace
            >
              <img src="./hamrodrink.png" alt="" height="auto" width="400px" />{" "}
            </Link>
          </div>
        </div>

  <div>
          <div className="WorkCard">
            <Link
              href="https://aspirey.netlify.app/"
              target="_blank"
              rel="noreferrer"
              replace
            >
              <img src="./aspirey.png" alt="" height="auto" width="400px" />{" "}
            </Link>
          </div>
        </div>

        <div>
          <div className="WorkCard">
            <Link
              href="https://nsu.org.np"
              target="_blank"
              rel="noreferrer"
              replace
            >
              {" "}
              <img
                src="./vithoba.png"
                alt=""
                height="auto"
                width="400px"
              />{" "}
            </Link>
          </div>
        </div>
      

         <div>
          <div className="WorkCard">
            <Link
              href="https://aaiwa.netlify.app"
              target="_blank"
              rel="noreferrer"
              replace
            >
              <img src="./aaiwa.png" alt="" height="auto" width="400px" />{" "}
            </Link>
          </div>
        </div>

        <div>
          <div className="WorkCard">
            <Link
              href="https://nsu.org.np"
              target="_blank"
              rel="noreferrer"
              replace
            >
              <img src="./nsu.png" alt="" height="auto" width="400px" />{" "}
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default WorkCard;
