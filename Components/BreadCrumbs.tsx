import Image from "next/image";
import React from "react";

import Logo from "@/public/assets/Logo/Logo.png";
import BreadCrumbsImg from "@/public/assets/images/BreadCrumbsImg.jpg";
import Link from "next/link";

const BreadCrumbs = ({ page }: { page: string }) => {
  return (
    <div className="container mx-auto h-[316px] flex flex-col justify-center items-center gap-[20px] relative">
      <Image
        src={BreadCrumbsImg}
        alt="BreadCrumbsImg"
        className="w-full h-full absolute top-0 left-0 z-[-1] object-cover blur-[2px]"
        loading="lazy"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-[#e3e3e377] z-[-1] "></div>
      <div className="h-[133px] flex flex-col justify-between items-center select-none">
        {/* Logo */}
        <Image src={Logo} alt="Logo" className="w-[77px] h-[77px] " />

        {/* Text */}
        <h3 className="h-[72px] font-[500] text-[48px] leading-[72px] text-[#000000]">
          {page}
        </h3>
      </div>
      <div className="min-w-[115px] h-[24px] flex justify-center items-center gap-[5px] select-none">
        <Link
          href={"/"}
          className="w-[48px] h-[24px] font-[500] text-[16px] text-[#000000]"
        >
          Home
        </Link>
        {/* Arrow Icon */}
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
        </svg>
        {/*  */}
        <h3 className="h-[24px] font-[300] text-[16px] text-[#000000] capitalize">
          {page}
        </h3>
      </div>
    </div>
  );
};

export default BreadCrumbs;
