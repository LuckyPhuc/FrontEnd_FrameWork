import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./hot_new.css";
import { Autoplay } from "swiper/modules";

function HotNew() {
  return (
    <Swiper
      modules={[Autoplay]}
      className="mySwiper"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>By 1 get 2</SwiperSlide>
      <SwiperSlide>Buy more pay less</SwiperSlide>
    </Swiper>
  );
}

export default HotNew;
