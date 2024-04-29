import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { xmaspic } from "../images/images";
import { slider } from "../constants/constants";

const Slider = () => {
  return (
    <Carousel
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      showThumbs={false}
      showArrows={true}
      showStatus={false}
      stopOnHover={true}
      emulateTouch={true}
      swipeable={true}
      dynamicHeight={false}
      width="100%"
    >
      {slider?.map(() => {
        return (
          <div>
            <img src={xmaspic} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;
