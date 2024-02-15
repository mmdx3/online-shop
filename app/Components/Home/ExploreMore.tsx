import React from "react";
import Slider from "./Slider";

const ExploreMore = () => {
  return (
    <section className="container mx-auto bg-[#FCF8F3] flex justify-start pl-[50px] py-[25px] h-[670px] items-center gap-[25px] overflow-hidden mt-[55px]">
      {/* Title */}
      <div className="flex flex-col justify-start items-start w-[422px]  gap-[25px]">
        {/* title text */}
        <div className="flex flex-col justify-start items-start w-[422px] h-[151px] gap-[10px]">
          <h3 className="w-full h-[96px] font-[700] text-[40px] leading-[48px] ">
            50+ Beautiful rooms inspiration
          </h3>

          {/* sub title */}
          <p className="w-[368px] h-[48px] font-[500] text-[16px] leading-[24px] text-[#616161] ">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
        </div>

        {/* Button  */}
        <button className="w-[176px] h-[48px] bg-[var(--text-primary)] rounded-[5px]">
          <span className="w-[104px] h-[24px] font-[600] text-[16px] leading-[24px] text-[#ffffff] ">
            Explore More
          </span>
        </button>
      </div>

      {/* Slider */}
      <Slider />
    </section>
  );
};

export default ExploreMore;
