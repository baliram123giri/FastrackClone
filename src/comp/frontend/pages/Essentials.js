import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { essentialSlideImg } from "./Homepage/homeslide";
export default function Essentials() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <>
      <div className="container my-3 my-md-5">
        <div className="text-center text-uppercase mb-3">
          <h4 className="bletter-spacing-l2">FASTRACK ESSENTIALS</h4>
        </div>
        {/* //product slider */}
        <Carousel  responsive={responsive} infinite={true}>
          {essentialSlideImg &&
            essentialSlideImg.map((img, index) => {
              return (
                <div key={index} className="p-2">
                  <a href="#">
                    <div className="imgbox">
                      <img
                        src={`../../../img/essential/${img.src}`}
                        width={"100%"}
                        alt={img.src}
                      />
                    </div>
                    <div className="text-center">
                      <span className="fs-7 fw-bold text-uppercase">{img.tag}</span>
                    </div>
                  </a>
                </div>
              );
            })}
        </Carousel>
      </div>
    </>
  );
}
