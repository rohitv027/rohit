"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <Swiper
       
        autoplay={{delay: 2500,}}
        className="mySwiper"
      >
        <SwiperSlide><img src={"/Images/Esyasoft.jpeg"}></img></SwiperSlide>
        <SwiperSlide><img src={"/Images/HCL.jpg"}></img></SwiperSlide>
        <SwiperSlide><img src={"/Images/RepublicDay.jpg"}></img></SwiperSlide>
        <SwiperSlide><img src={"/Images/College.jpg"}></img></SwiperSlide>
        <SwiperSlide><img src={"/Images/Project.jpg"}></img></SwiperSlide>
        <SwiperSlide><img src={"/Images/Raj.jpg"}></img></SwiperSlide>
        <SwiperSlide><img src={"/Images/Baba.jpg"}></img></SwiperSlide>
        <SwiperSlide><img src={"/Images/MPPSC.jpg"}></img></SwiperSlide>
        <SwiperSlide><img src={"/Images/NEET.jpg"}></img></SwiperSlide>
      </Swiper>
    </>
  );
}


export default Slider