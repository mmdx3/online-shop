import React from "react";
import BreadCrumsItem from "./BreadCrumsItem";

const BreadCrumb = ({ name }: { name: string }) => {
  return (
    <div className="container mx-auto h-[100px] bg-[#F9F1E7] flex justify-start px-[70px] items-center">
      <BreadCrumsItem name="Home" href="/" />
      <BreadCrumsItem name="Shop" href="/shop" />
      {/*  */}
      <div className="flex justify-start items-center h-[37px] gap-[16px]">
        <div className="w-[37px] h-[1.2px] -rotate-90 bg-[#9F9F9F] "></div>
        <h3 className="min-w-[108px] h-[24px] font-[400] text-[16px] leading-[24px] text-[#000000]">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default BreadCrumb;
