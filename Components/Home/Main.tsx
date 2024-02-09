"use client";
import Image from "next/image";
import React from "react";
import img from "@/public/assets/images/main-img.png";

import { motion } from "framer-motion";
const Main = () => {
  return (
    <main className="w-[1183px] h-[685px] mt-[25px] flex flex-col justify-center items-center mx-auto gap-[25px]">
      {/* title */}
      <div className="w-[559px] h-[76px] flex flex-col justify-center items-center gap-[10px] ">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5, ease: "linear" }}
          className="w-[300px] h-[48px] font-[700] text-[32px] leading-[48px] text-[var(--text-black)] "
        >
          Browse The Range
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-[559px] h-[28px] font-[400] text-[20px] leading-[30px] items-center text-[#666666] "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </motion.p>
      </div>

      {/* images */}
      <div className="flex pt-[20px] justify-center items-center gap-[20px] ">
        {Array.from(Array(3)).map((i, j) => (
          <div
            key={j}
            className="flex flex-col gap-[15px] w-[381px] pb-[15px] justify-center items-center "
          >
            <Image
              src={img}
              alt="Image "
              className="w-[381px] h-[480px] rounded-[5px] object-cover cursor-pointer "
              loading="lazy"
            />

            <span className="w-[112px] h-[36px] font-[600] text-[24px] leading-[36px] items-center text-center text-[var(--text-black)]">
              Bedroom
            </span>
          </div>
        ))}
      </div>
      
    </main>
  );
};

export default Main;
