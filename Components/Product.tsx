"use client";
import { motion } from "framer-motion";
import ShareIcon from "@/app/assets/svgs/share-svg";
import CompareIcon from "@/app/assets/svgs/compare";
import Likeicon from "@/app/assets/svgs/like";
import Image from "next/image";
import ISproductService from "@/Types/ProductType";

type ButtonType = {
  name: string;
  icon: React.ReactElement;
};

const Btns: ButtonType[] = [
  { name: "share", icon: <ShareIcon /> },
  { name: "compare", icon: <CompareIcon /> },
  { name: "like", icon: <Likeicon /> },
];

const Product = ({ p }: { p: ISproductService }) => {
  function numberWithCommas(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <div
        key={p.id}
        className="w-[285px] h-[446px] relative flex flex-col rounded-[10px]"
      >
        {/* pop up */}
        <motion.div
          initial={{ opacity: 0, zIndex: 0 }}
          whileHover={{ opacity: 0.72, zIndex: 2 }}
          transition={{ type: "spring", damping: 50 }}
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[#3A3A3A] rounded-[10px] "
        >
          {/* Buttons */}
          <div className="flex flex-col justify-center items-center gap-[24px] w-full px-[20px]">
            {/* TODO Onclcik Navigate to Cart */}
            <button className="w-[202px] h-[48px] bg-[#fff] rounded-[3px] flex justify-center items-center text-center ">
              <h4 className="w-[91px] h-[24px] font-[600] text-[16px] leading-[24px] text-[var(--text-primary)]">
                Add to cart
              </h4>
            </button>

            {/* icons */}
            <div className="flex flex-row gap-[20px] w-[252px] h-[24px] justify-between items-center ">
              {Btns.map((btn) => (
                <div
                  key={btn.name}
                  className="flex justify-start gap-[5px] items-center cursor-pointer "
                >
                  {btn.icon}
                  <span className="min-w-[48px] h-[24px] font-[600] text-[16px] leading-[24px] text-[#ffffff] capitalize">
                    {btn.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* lable */}
        {p.off && (
          <div className="absolute top-[15px] right-[10px] flex justify-center items-center  w-[48px] h-[48px] rounded-full bg-[#E97171]">
            <span className=" h-[24px] font-[500] text-[16px] leading-[24px] text-[#ffffff] ">
              {p.OfferPercent + "%"}
            </span>
          </div>
        )}

        {/* Image */}
        <div className="w-[285px] h-[301px] relative z-[-1]">
          <Image
            src={p.picture}
            alt="ProductImg"
            fill
            className="object-cover rounded-t-[10px]"
            loading="lazy"
          />
        </div>

        {/* title */}
        <div className="w-full h-[145px] bg-[#F4F5F7] flex justify-center items-center rounded-[10px]">
          <div className="w-[249px] h-[99px] ">
            {/* Product name */}
            <div className="w-[138px] h-[61px] flex flex-col justify-between items-start ">
              <h2 className="w-[123px] h-[29px] font-[600] text-[24px] leading-[29px] text-[#3A3A3A]">
                {p.name}
              </h2>

              <span className="min-w-[138px] max-w-[220px] h-[24px] font-[500] text-[16px] leading-[24px] text-[#898989] text-ellipsis whitespace-nowrap overflow-hidden">
                {p.title}
              </span>
            </div>
            {/* Price */}
            <div className="w-[249px] h-[30px] flex flex-row justify-between items-start gap-[16px]">
              {/* final price */}
              <h3 className=" h-[30px] font-[600] text-[17px] leading-[30px] text-[#3A3A3A] ">
                {numberWithCommas(p.price - (p.price * p.OfferPercent) / 100) +
                  " تومان"}
              </h3>
              {/* price */}
              {p.off && (
                <span className="max-w-[102px] h-[24px] text-ellipsis whitespace-nowrap font-[400] text-[16px] leading-[24px] text-[#B0B0B0] line-through decoration-[#B0B0B0]">
                  {numberWithCommas(p.price) + "تومان"}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
