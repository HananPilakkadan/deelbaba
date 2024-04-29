import React from "react";
import { offer_banner } from "../../images/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const OfferBanner = () => {
  return (
    <div className="offer-slider">
      <Swiper className="mySwiper" slidesPerView={2} spaceBetween={30}>
        <SwiperSlide>
          <img src={offer_banner} alt="offer_banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={offer_banner} alt="offer_banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={offer_banner} alt="offer_banner" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OfferBanner;
