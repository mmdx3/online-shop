import React from "react";
import Image from "next/image";
import img from "@/public/assets/images/product.png";

const ShareSetup = () => {
  return (
    <div className="container mx-auto  flex flex-col justify-center items-center gap-[25px] mt-[35px]">
      {/* Title */}
      <div className="flex flex-col justify-center items-center gap-[10px] w-[356px] h-[86px] ">
        <h3 className="w-[222px] h-[30px] font-[600] text-[20px] leading-[30px] text-center text-[#616161]">
          Share your setup with
        </h3>

        <p className="w-[356px] h-[48px] font-[700] text-[40px] leading-[48px] text-center text-[#3A3A3A]">
          #FuniroFurniture
        </p>
      </div>
      {/* Images */}
      <div className="w-full flex h-[721px] relative overflow-hidden">
        <Image
          src={img}
          alt="Img"
          className="w-[381px] h-[323px] absolute left-[-200px] bottom-[50px] "
        />
        <Image
          src={img}
          alt="Img"
          className="w-[274px] h-[382px] absolute left-[-250px] top-[-50px] "
        />
        <Image
          src={img}
          alt="Img"
          className="w-[451px] h-[313px] absolute left-[90px] top-[0] "
        />
        <Image
          src={img}
          alt="Img"
          className="w-[344px] h-[242px] absolute left-[200px] bottom-[150px] "
        />
        <Image
          src={img}
          alt="Img"
          className="w-[295px] h-[393px] absolute left-[560px] top-[80px] "
        />
        <Image
          src={img}
          alt="Img"
          className="w-[290px] h-[348px] absolute right-[180px] top-[50px] "
        />
        <Image
          src={img}
          alt="Img"
          className="w-[178px] h-[242px] absolute right-[390px] bottom-[64px] "
        />
        <Image
          src={img}
          alt="Img"
          className="w-[425px] h-[433px] absolute right-[-300px] top-0 "
        />
        <Image
          src={img}
          alt="Img"
          className="w-[258px] h-[196px] absolute right-[100px] bottom-[64px] "
        />
      </div>
    </div>
  );
};

export default ShareSetup;
