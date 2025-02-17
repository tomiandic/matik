"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ReviewSlider = ({ reviews }) => {
  return (
    <Swiper
      initialSlide={1}
      loop
      spaceBetween={20}
      slidesPerView={1.5}
      modules={[Autoplay]}
      autoplay={{
        delay: 10000,
      }}
      centeredSlides
      breakpoints={{
        640: { slidesPerView: 1.5, centeredSlides: false },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index} className="review-slide">
          <div className="review-card flex flex-col">
            <p className="review-rating text-[10px]">
              {Array(review.rating)
                .fill(null)
                .map((item) => "⭐")}
            </p>
            <p className="text-2xl md:text-xl py-4 text-slate-700">
              {review.text}
            </p>
            <h3 className="review-name text-slate-600 text-sm">
              {review.name}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlider;
