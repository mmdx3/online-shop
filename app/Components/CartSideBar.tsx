"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/Redux/Store";
import { deleteShopCart } from "@/Redux/reducers/shopCartSlice";
import useNumberWithCommas from "@/app/utils/useNumberWithCommas";
const CartSideBar = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const shopcart = useAppSelector((state) => state.shopCart);
  const dispatch = useAppDispatch();

  const hanleDeleteItem = (id: number) => {
    const updatecart = shopcart.filter((i) => i.id !== id);
    dispatch(deleteShopCart(updatecart));
  };

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (shopcart.length > 0) {
      let total = 0;
      shopcart.forEach((product) => {
        total += product.price * product.quantity;
        if (product.OfferPercent) {
          total -= (total * product.OfferPercent) / 100;
        }
      });
      setTotalPrice(total);
    }
  }, [shopcart]);

  const { numberWithCommas } = useNumberWithCommas();
  return (
    <>
      <div
        className={`absolute top-0 left-0 w-full h-[2200px] bg-[#D9D9D9] z-[5] opacity-[0.7]  ${
          isOpen ? "block" : "none"
        }`}
        onClick={() => setOpen(!isOpen)}
      ></div>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: 1,
            x: 0,
            display: "flex",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 24,
              duration: 0.5,
            },
          },
          closed: {
            opacity: 0,
            x: 450,
            transition: { duration: 0.5 },
            display: "none",
          },
        }}
        className="w-[417px] h-[746px] bg-[#fff] absolute top-0 right-0 z-[6] flex flex-col justify-between items-center py-[25px]"
      >
        <div className="w-[350px]  flex flex-col gap-[20px]">
          <div className="flex justify-between items-center w-full">
            <h3 className="w-[177px] h-[36px] font-[600] text-[24px] text-[#000000]">
              Shopping Cart
            </h3>
            {/* close Icon */}
            <svg
              width="17"
              height="19"
              viewBox="0 0 17 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
              onClick={() => setOpen(!isOpen)}
            >
              <path
                d="M8.3125 1.1875C9.09986 1.1875 9.85497 1.50028 10.4117 2.05703C10.9685 2.61378 11.2812 3.36889 11.2812 4.15625V4.75H5.34375V4.15625C5.34375 3.36889 5.65653 2.61378 6.21328 2.05703C6.77003 1.50028 7.52514 1.1875 8.3125 1.1875ZM12.4688 4.75V4.15625C12.4688 3.05394 12.0309 1.99679 11.2514 1.21734C10.472 0.437889 9.41481 0 8.3125 0C7.21019 0 6.15304 0.437889 5.37359 1.21734C4.59414 1.99679 4.15625 3.05394 4.15625 4.15625V4.75H0V16.625C0 17.2549 0.250223 17.859 0.695621 18.3044C1.14102 18.7498 1.74511 19 2.375 19H14.25C14.8799 19 15.484 18.7498 15.9294 18.3044C16.3748 17.859 16.625 17.2549 16.625 16.625V4.75H12.4688ZM1.1875 5.9375H15.4375V16.625C15.4375 16.9399 15.3124 17.242 15.0897 17.4647C14.867 17.6874 14.5649 17.8125 14.25 17.8125H2.375C2.06006 17.8125 1.75801 17.6874 1.53531 17.4647C1.31261 17.242 1.1875 16.9399 1.1875 16.625V5.9375Z"
                fill="#9F9F9F"
              />
            </svg>
          </div>
          {/* Line */}
          <div className="w-[278px] border border-[#D9D9D9]"></div>

          {/* Cart Item */}
          <div className="flex flex-col justify-start items-start mt-[15px] max-h-[430px]  overflow-auto noScroll py-[15px] gap-[15px]">
            {shopcart.map((item, index) => (
              <div
                key={index}
                className="w-[350px] h-[105px] flex justify-between items-center "
              >
                <Image
                  src={item.picture}
                  alt=""
                  className="w-[108px] h-[105px] rounded-[10px]"
                  loading="lazy"
                />

                <div className="w-[130px] h-[56px] flex flex-col gap-[10px]">
                  <h2 className="w-[108px] h-[24px] font-[400] text-[16px] text-[#000000] overflow-hidden text-ellipsis whitespace-nowrap ">
                    {item.name}
                  </h2>
                  <div className="flex justify-between items-baseline w-[130px] h-[24px] ">
                    <span className="w-[5px] h-[24px] font-[300] text-[16px] text-[#000000]">
                      {item.quantity}
                    </span>
                    <span className="w-[8px] h-[24px] font-[300] text-[12px] text-[#000000] capitalize">
                      {item.size}
                    </span>
                    <span className="max-w-[87px] h-[24px] font-[500] text-[12px] text-[#B88E2F] overflow-hidden text-ellipsis whitespace-nowrap">
                      {numberWithCommas(
                        item.price - (item.price * item.OfferPercent) / 100,
                      )}
                    </span>
                  </div>
                </div>

                {/* close btn */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer "
                  onClick={() => hanleDeleteItem(item.id)}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 0C4.47727 0 0 4.47727 0 10C0 15.5227 4.47727 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47727 15.5227 0 10 0ZM13.37 7.91545C13.5356 7.744 13.6272 7.51436 13.6252 7.276C13.6231 7.03764 13.5275 6.80963 13.3589 6.64107C13.1904 6.47252 12.9624 6.37691 12.724 6.37484C12.4856 6.37277 12.256 6.4644 12.0845 6.63L10 8.71455L7.91545 6.63C7.83159 6.54317 7.73128 6.47392 7.62037 6.42627C7.50946 6.37863 7.39016 6.35355 7.26946 6.3525C7.14875 6.35145 7.02904 6.37445 6.91731 6.42016C6.80559 6.46587 6.70409 6.53338 6.61873 6.61873C6.53338 6.70409 6.46587 6.80559 6.42016 6.91731C6.37445 7.02904 6.35145 7.14875 6.3525 7.26946C6.35355 7.39016 6.37863 7.50946 6.42627 7.62037C6.47392 7.73128 6.54317 7.83159 6.63 7.91545L8.71455 10L6.63 12.0845C6.54317 12.1684 6.47392 12.2687 6.42627 12.3796C6.37863 12.4905 6.35355 12.6098 6.3525 12.7305C6.35145 12.8513 6.37445 12.971 6.42016 13.0827C6.46587 13.1944 6.53338 13.2959 6.61873 13.3813C6.70409 13.4666 6.80559 13.5341 6.91731 13.5798C7.02904 13.6255 7.14875 13.6486 7.26946 13.6475C7.39016 13.6465 7.50946 13.6214 7.62037 13.5737C7.73128 13.5261 7.83159 13.4568 7.91545 13.37L10 11.2855L12.0845 13.37C12.256 13.5356 12.4856 13.6272 12.724 13.6252C12.9624 13.6231 13.1904 13.5275 13.3589 13.3589C13.5275 13.1904 13.6231 12.9624 13.6252 12.724C13.6272 12.4856 13.5356 12.256 13.37 12.0845L11.2855 10L13.37 7.91545Z"
                    fill="#9F9F9F"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between items-center w-full gap-[25px]">
          <div className="px-[35px] w-[417px] flex justify-center gap-[45px] ">
            <h2 className="w-[68px] h-[24px] font-[400] text-[16px] text-[#000000]">
              Subtotal
            </h2>
            {/* Totla Price */}

            <p className="font-[600] text-[16px] text-[#B88E2F]">
              {numberWithCommas(totalPrice)}
            </p>
          </div>
          {/* Line */}
          <div className="w-[417px] border border-[#D9D9D9]"></div>

          {/* Btn's */}
          <div className="w-[368px] h-[30px] flex justify-between items-center ">
            {/* Cart Btn */}
            <button className="w-[87px] h-[30px] rounded-[50px] border border-[#000000]  px-[30px] gap-[10px] flex justify-center items-center ">
              <Link
                href={"/cart"}
                className="font-[400] text-[12px] text-[#000000]"
              >
                Cart
              </Link>
            </button>
            {/* checkout */}
            <button className="w-[118px] h-[30px] rounded-[50px] border border-[#000000]  px-[30px] gap-[10px] flex justify-center items-center ">
              <Link
                href={"/Checkout"}
                className="font-[400] text-[12px] text-[#000000]"
              >
                Checkout
              </Link>
            </button>
            {/* Comporision */}
            <button className="w-[135px] h-[30px] rounded-[50px] border border-[#000000]  px-[30px] gap-[10px] flex justify-center items-center ">
              <Link
                href={"/"}
                className="font-[400] text-[12px] text-[#000000]"
              >
                Comparison
              </Link>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CartSideBar;
