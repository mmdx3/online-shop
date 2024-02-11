"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import img from "@/public/assets/images/productimg-min.png";
import pImg from "@/public/assets/images/p-img-min.png";
import { motion } from "framer-motion";

type Images = {
  id: number;
  src: StaticImageData;
};

const ProductImg: Images[] = [
  { id: 1, src: pImg },
  { id: 2, src: img },
  { id: 3, src: pImg },
  { id: 4, src: img },
  { id: 5, src: pImg },
];
const ProductImage = () => {
  const [activeImage, setActiveImage] = useState<Images>(ProductImg[0]);

  const HandleActiveImage = (i: Images) => {
    setActiveImage(i);
  };

  return (
    <div className="w-[553px] h-[500px] flex justify-between items-start   ">
      {/* List imgae */}
      <div className="w-[76px] h-[416px] flex flex-col justify-between items-start ">
        {/* Image */}
        {ProductImg.slice(0, 4).map((i, j) => (
          <div
            key={j}
            className={`w-[76px] h-[80px] rounded-[10px] bg-[#F9F1E7] flex justify-center items-center cursor-pointer active:scale-[0.9] transition-all duration-100
            ${i.id === activeImage?.id ? "active-img" : ""}`}
            onClick={() => HandleActiveImage(i)}
          >
            <Image
              src={i.src}
              alt=""
              className="w-[83px] h-[55px]  rounded-[10px]"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Hero Img */}
      <motion.div
        layout
        className="w-[423px] h-[500px] rounded-[10px] bg-[#F9F1E7] flex justify-center items-center"
      >
        <Image
          src={activeImage.src}
          alt=""
          className="w-[481px] h-[391px]  rounded-[10px]"
        />
      </motion.div>
    </div>
  );
};

export default ProductImage;
