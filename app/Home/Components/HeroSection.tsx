import React from "react";
import Image from "next/image";
import HeroImg from "@/public/assets/images/Hero-img-min.jpg";
const HeroSection = () => {
  return (
    <section className="container mx-auto h-[716px] relative">
      <Image
        src={HeroImg}
        alt="Hero Image"
        className="absolute object-cover w-full h-full "
        fill={true}
        loading="lazy"
      />

      <div className="w-[643px] h-[443px] absolute top-[203px] left-[739px] bg-[#FFF3E3] flex justify-center items-center rounded-[10px] ">
        <div className="w-[561px] h-[344px] bg-transparent flex flex-col justify-between ">
          <h3 className="w-[123px] h-[24px] font-[600] text-[16px] leading-[34px] tracking-[3px] text-[#333333]">
            New Arrival
          </h3>

          <h2 className="w-[559px] h-[127px] font-[700] text-[52px] leading-[65px] text-[#B88E2F] text-ellipsis whitespace-pre-wrap">
            Discover Our New Collection
          </h2>

          <p className="w-[546px] h-[52px] font-[500] text-[18px] leading-[24px] text-wrap text-[#333333]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          <button className="w-[222px] h-[74px] p-[25px,72px,25px,72px] gap-[10px] bg-[#B88E2F] cursor-pointer rounded-[5px]">
            <span className="w-[78px] h-[24px] font-[700] text-[16px] leading-[24px] text-[#ffffff] ">
              BUY Now
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
