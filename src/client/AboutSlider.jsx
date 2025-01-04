"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import Animation1 from "./Animation1";
import Animation2 from "./Animation2";
import Animation3 from "./Animation3";

export default function AboutSlider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Animation2 />
      </SwiperSlide>
      <SwiperSlide>
        <Animation1 />
      </SwiperSlide>

      <SwiperSlide>
        <Animation3 />
      </SwiperSlide>
    </Swiper>
  );
}
