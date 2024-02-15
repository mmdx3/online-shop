"use client";
import {  useState } from "react";
import img from "@/public/assets/images/product.png";
import Image from "next/image";


import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, Pagination } from "swiper/modules";
import "swiper/css";

const Slider = () => {
  const [slideActive, setSlideActive] = useState(0);
  // const [firstSwiper, setFirstSwiper] = useState();
  const slidenext = () => {

    // firstSwiper && firstSwiper.slideNext();
  };
  return (
    <div className="w-[1196px] h-[582px] flex justify-start items-center gap-[20px] relative">
      {/* slider */}
      <Swiper
        modules={[Controller, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        grabCursor={true}
        onSlideChange={(swiper) => setSlideActive(swiper.activeIndex)}
      >
        {Array.from(Array(8)).map((i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <>
                {isActive ? (
                  <div className="w-[372px] h-[582px] relative">
                    <Image
                      src={img}
                      alt="slider img"
                      loading="lazy"
                      fill
                      className="absolute top-0 left-0 object-cover"
                    />

                    {/* Content */}
                    <div className="w-[217px] h-[130px] flex flex-col justify-center items-center text-center gap-[15px] bg-[rgba(255,255,255,0.72)] absolute bottom-[15px] left-[15px] ">
                      {/* title */}
                      <div className="w-[142px] h-[24px] gap-[8px] flex flex-row justify-start items-center ">
                        <span className="w-[16px] h-[24px] font-[500] text-[16px] leading-[24px] text-[rgba(97,97,97,1)]">
                          01
                        </span>
                        <div className="w-[27px] h-[1px] bg-[#616161]"></div>
                        <h5 className="w-[83px] h-[24px] font-[500] text-[16px] leading-[24px] text-[#616161] ">
                          Bed Room
                        </h5>
                      </div>

                      <span className="w-[168px] h-[34px] font-[600] text-[28px] leading-[33px] text-[#3A3A3A]">
                        Inner Peace
                      </span>
                    </div>
                    {/* btn */}
                    <button className="size-[48px] bg-[var(--text-primary)] flex justify-center items-center absolute bottom-[15px] left-[232px]">
                      {/* Right Icon */}
                      <svg
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 7H1M19 7L13 1M19 7L13 13"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <Image
                    src={img}
                    alt="slider img"
                    loading="lazy"
                    className="w-[372px] h-[486px] object-cover"
                  />
                )}
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* indicator */}
      <div className="flex flex-row  h-[27px] gap-[20px] absolute bottom-[36px] left-[408px] flex-wrap overflow-hidden  justify-center items-center ">
        {Array.from(Array(8)).map((i, index) => (
          <>
            {slideActive === index ? (
              <div className="size-[27px] border border-[var(--text-primary)] rounded-full flex justify-center items-center">
                <div className="size-[11px] rounded-full bg-[var(--text-primary)] "></div>
              </div>
            ) : (
              <div className="size-[11px] rounded-full bg-[#D8D8D8] "></div>
            )}
          </>
        ))}
      </div>

      {/* Next Slide Btn */}
      <div
        className="size-[48px] rounded-full bg-[#FFFFFF] shadow-[0px,4px,14px,1px,#00000029] cursor-pointer absolute top-[38%] right-[395px] flex justify-center items-center z-[2] nextbtn"
        onClick={slidenext}
      >
        {/* Icon */}
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.00006 1L8.00006 8L1.00006 15"
            stroke="#B88E2F"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Slider;
