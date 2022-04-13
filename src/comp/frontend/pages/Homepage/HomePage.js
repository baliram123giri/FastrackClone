import React from "react";
import Welcome from "../../common/Welcome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { homeSlideImg } from "./homeslide";
import Essentials from "../Essentials";
export default function HomePage() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Welcome>
      <Carousel autoPlay={true} responsive={responsive} infinite={true}>
        {homeSlideImg &&
          homeSlideImg.map((img, index) => {
            return (
              <div key={index}>
                <img src={`../../../img/home/${img.src}`} width="100%" alt="" />
              </div>
            );
          })}
      </Carousel>

      {/* //section FASTRACK ESSENTIALS */}
      <Essentials/>
    </Welcome>
  );
}
