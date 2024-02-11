import Image from "next/image";
import React from "react";

import pimg from "@/public/assets/images/p-img-min.png";
const Description = () => {
  return (
    <div className="container mx-auto mt-[35px] border border-[#D9D9D9] h-[744px] flex flex-col py-[25px] gap-[35px]">
      <div className="flex w-[649px] h-[36px] justify-between items-center mx-auto">
        <h3 className="font-[500] text-[24px] text-[#000000]">Description</h3>
        <h3 className="font-[400] text-[24px] text-[##9F9F9F]">
          Additional Information
        </h3>
        <h3 className="font-[400] text-[24px] text-[#000000]">Reviews [5]</h3>
      </div>
      <div className="flex flex-col justify-between items-start w-[1026px] mx-auto gap-[25px]">
        <p className="w-[1026px] h-[48px] font-[400] text-[16px] text-justify text-[#9F9F9F]">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="w-[1026px]  font-[400] text-[16px] text-justify text-[#9F9F9F] ">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>
      <div className="w-[1239px] h-[348px] flex justify-between mx-auto">
        <div className="w-[609px] h-[348px] rounded-[10px] bg-[#F9F1E7] relative">
          <Image src={pimg} alt=" " fill className=" " loading="lazy" />
        </div>
        <div className="w-[609px] h-[348px] rounded-[10px] bg-[#F9F1E7] relative">
          <Image src={pimg} alt=" " fill className=" " loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Description;
