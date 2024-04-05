import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./banner.css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
const Banner = () => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src="./img/banner/1.jpeg" alt="Banner_IMG" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/banner/2.jpg" alt="Banner_IMG" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
