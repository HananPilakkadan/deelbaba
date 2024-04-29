import React from "react";
import { offer_banner } from "../../images/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const OfferBanner = () => {
  const breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };
  return (
    <div className="offer-slider">
      <Swiper
        className="mySwiper"
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={breakpoints}
      >
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
