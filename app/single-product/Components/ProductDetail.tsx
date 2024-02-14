import React, { useState } from "react";
import { useAppSelector } from "@/Redux/Store";
import { addShopCart } from "@/Redux/reducers/shopCartSlice";
import ISproductService from "@/Types/ProductType";
import useNumberWithCommas from "@/app/utils/useNumberWithCommas";
import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";

import Swal from "sweetalert2";

const Sizes = ["l", "xl", "xs"];

const Toast = Swal.mixin({
  toast: true,
  position: "top-start",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const ProductDetail = ({
  product,
}: {
  product: ISproductService | undefined;
}) => {
  const dispatch = useDispatch();
  const shopcart = useAppSelector((state) => state.shopCart); // Assuming this selector

  const [selectedSize, setSelectedSize] = useState(Sizes[0]);
  const [quantity, setQuantity] = useState(0);

  const { numberWithCommas } = useNumberWithCommas();
  const [active, setActive] = useState(0);

  const handleSelectSize = (i: number) => {
    setActive(i);
    setSelectedSize(Sizes[i]);
  };

  // Helper functions for quantity management
  const handleQuantityIncrement = () =>
    quantity > 0 && setQuantity(quantity + 1);
  const handleQuantityDecrement = () =>
    quantity > 1 && setQuantity(quantity - 1);

  // For Add Product Item into shop cart
  const HandleAddProduct = (item: ISproductService) => {
    const itemInCart = shopcart.find((i) => i.id === item.id);


    let updatedItem;

    if (itemInCart) {
      setQuantity(quantity + 1);
      updatedItem = {
        ...itemInCart,
        quantity: quantity + 1,
        size: selectedSize,
      };
    } else {
      setQuantity(quantity + 1);
      updatedItem = { ...item, quantity: quantity + 1, size: selectedSize };
    }

    // Dispatch only once after checking if the product exists
    dispatch(addShopCart(updatedItem));

    Toast.fire({
      icon: "success",
      title: "Your Item Added to Shopcart :)",
    });
  };

  return (
    <div className="w-[606px] h-[730px] flex flex-col justify-start items-start gap-[30px]">
      {/* product Name */}
      <div className="flex flex-col gap-[5px] ">
        <h1 className="h-[63px] font-[400] text-[42px] leading-[63px] text-[var(--text-black)]">
          {product?.name}
        </h1>
        <p className="max-w-[200px] h-[36px] font-[500] text-[24px] text-[#9F9F9F] overflow-hidden text-ellipsis  whitespace-nowrap ">
          {product?.price && numberWithCommas(product.price) + "  " + "تومان  "}
        </p>
      </div>
      {/* Product Rate */}
      <div className="flex justify-between items-center gap-[15px] w-[285px] ">
        {/* Rate icon */}
        <div className="w-[124px] h-[20px] ">
          <Rating
            name="read-only-rating"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
        </div>
        <div className="w-[30px] -rotate-90 bg-[#9F9F9F] border "></div>
        {/* Text */}
        <div className="min-w-[125px] h-[20px] font-[400] text-[13px] text-[#9F9F9F]">
          5 Customer Review
        </div>
      </div>
      {/* product title */}
      <p className="w-[425px] font-[400] text-[13px] text-[#000000]">
        {product?.title}
      </p>

      {/* Size */}
      <div className="w-[123px] h-[63px] rounded-[5px] flex flex-col justify-start items-start gap-[15px]">
        <h3 className="w-[27px] h-[21px] font-[400] text-[14px] text-[#9F9F9F]">
          Size
        </h3>
        {/* size's */}
        <div className="flex justify-start items-start gap-[25px]">
          {Sizes.map((size, i) => (
            <div
              className={`size-[30px] rounded-[5px]  flex justify-center items-center cursor-pointer  ${
                active === i ? "bg-[#B88E2F]" : "bg-[#F9F1E7]"
              }`}
              onClick={() => handleSelectSize(i)}
            >
              <h3
                className={`font-[400] text-[13px] capitalize   ${
                  active === i ? "text-[#ffffff]" : "text-[#000000]"
                }`}
              >
                {size}
              </h3>
            </div>
          ))}
        </div>
      </div>
      {/* Color */}
      <div className="w-[123px] h-[63px] rounded-[5px] flex flex-col justify-start items-start gap-[15px]">
        <h3 className="w-[27px] h-[21px] font-[400] text-[14px] text-[#9F9F9F]">
          Color
        </h3>
        {/* color's */}
        <div className="flex justify-start items-start gap-[25px]">
          <div
            className={`size-[30px]  flex justify-center items-center cursor-pointer rounded-full bg-[#816DFA]`}
          ></div>
          <div
            className={`size-[30px]  flex justify-center items-center cursor-pointer rounded-full bg-[#000000]`}
          ></div>
          <div
            className={`size-[30px]  flex justify-center items-center cursor-pointer rounded-full bg-[#B88E2F]`}
          ></div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-start items-start gap-[25px] mt-[15px]">
        {/* add Btn */}
        <div className="w-[123px] h-[64px] rounded-[10px] border border-[#9F9F9F] flex justify-center items-center gap-[35px] select-none">
          {/* mines */}
          <span
            className="w-[9px] h-[24px] font-[400] text-[16px] text-[#000000] cursor-pointer"
            onClick={handleQuantityDecrement}
          >
            -
          </span>
          {/* Num */}
          <span className="w-[9px] h-[24px] font-[400] text-[16px] text-[#000000]">
            {quantity}
          </span>
          {/* Plus */}
          <span
            className="w-[9px] h-[24px] font-[400] text-[16px] text-[#000000] cursor-pointer"
            onClick={handleQuantityIncrement}
          >
            +
          </span>
        </div>
        {/* Add To cart */}
        <div
          className="w-[215px] h-[64px] rounded-[15px] border border-[#000000] flex justify-center items-center  select-none cursor-pointer "
          onClick={() => product && HandleAddProduct(product)}
        >
          <h3 className="font-[400] text-[20px] leading-[30px] text-[#000000]">
            Add To Cart
          </h3>
        </div>
        {/* Compare */}
        <div className="w-[215px] h-[64px] rounded-[15px] border border-[#000000] flex justify-center items-center  select-none cursor-pointer ">
          <h3 className="font-[400] text-[20px] leading-[30px] text-[#000000]">
            + Compare
          </h3>
        </div>
      </div>
      {/* Line */}
      <div className="w-[605px] border border-[#D9D9D9] mt-[35px]"></div>

      {/* More detail */}
      <div className="flex flex-col justify-between items-start gap-[15px]">
        <div className="flex w-[250px] justify-between">
          <h3 className="font-[400px] text-[16px] text-[#9F9F9F]">SKU</h3>
          <span className="w-[4px] h-[24px] font-[500] text-[16px] text-[#9F9F9F]">
            :
          </span>
          <h3 className="font-[400px] text-[16px] text-[#9F9F9F]">SS001</h3>
        </div>
        <div className="flex w-[250px] justify-between">
          <h3 className="font-[400px] text-[16px] text-[#9F9F9F]">Category</h3>
          <span className="w-[4px] h-[24px] font-[500] text-[16px] text-[#9F9F9F]">
            :
          </span>
          <h3 className="font-[400px] text-[16px] text-[#9F9F9F]">Sofas</h3>
        </div>
        <div className="flex w-[250px] justify-between">
          <h3 className="font-[400px] text-[16px] text-[#9F9F9F]">Tags</h3>
          <span className="w-[4px] h-[24px] font-[500] text-[16px] text-[#9F9F9F]">
            :
          </span>
          <h3 className="font-[400px] text-[16px] text-[#9F9F9F]">
            Sofa, Chair, Home, Shop
          </h3>
        </div>
        <div className="flex w-[250px] justify-between">
          <h3 className="font-[400px] text-[16px] text-[#9F9F9F]">Share</h3>
          <span className="w-[4px] h-[24px] font-[500] text-[16px] text-[#9F9F9F]">
            :
          </span>
          <div className=" flex gap-[5px] ">
            {/* faceBook */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z"
                fill="black"
              />
            </svg>
            {/* Linkdin */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.833252 2.365C0.833252 1.95877 0.994624 1.56919 1.28187 1.28195C1.56911 0.994702 1.9587 0.83333 2.36492 0.83333H17.6333C17.8346 0.833001 18.034 0.872383 18.22 0.949219C18.4061 1.02606 18.5752 1.13884 18.7176 1.28111C18.8601 1.42338 18.973 1.59235 19.0501 1.77834C19.1271 1.96433 19.1667 2.16368 19.1666 2.365V17.6333C19.1668 17.8347 19.1273 18.0341 19.0504 18.2202C18.9735 18.4063 18.8606 18.5753 18.7183 18.7178C18.5759 18.8602 18.4069 18.9731 18.2209 19.0502C18.0348 19.1272 17.8354 19.1668 17.6341 19.1667H2.36492C2.16371 19.1667 1.96447 19.127 1.77858 19.05C1.5927 18.973 1.42381 18.8601 1.28157 18.7178C1.13933 18.5754 1.02653 18.4065 0.949604 18.2206C0.87268 18.0346 0.833143 17.8354 0.833252 17.6342V2.365ZM8.08992 7.82333H10.5724V9.07C10.9308 8.35333 11.8474 7.70833 13.2249 7.70833C15.8658 7.70833 16.4916 9.13583 16.4916 11.755V16.6067H13.8191V12.3517C13.8191 10.86 13.4608 10.0183 12.5508 10.0183C11.2883 10.0183 10.7633 10.9258 10.7633 12.3517V16.6067H8.08992V7.82333ZM3.50659 16.4925H6.17992V7.70833H3.50659V16.4917V16.4925ZM6.56242 4.84333C6.56746 5.07222 6.52673 5.29982 6.44262 5.51276C6.35851 5.7257 6.23271 5.91969 6.07261 6.08336C5.91251 6.24702 5.72133 6.37706 5.5103 6.46584C5.29926 6.55461 5.07262 6.60035 4.84367 6.60035C4.61472 6.60035 4.38808 6.55461 4.17704 6.46584C3.966 6.37706 3.77483 6.24702 3.61473 6.08336C3.45463 5.91969 3.32883 5.7257 3.24472 5.51276C3.16061 5.29982 3.11988 5.07222 3.12492 4.84333C3.13481 4.39404 3.32024 3.96649 3.64149 3.65224C3.96274 3.33798 4.39427 3.16201 4.84367 3.16201C5.29307 3.16201 5.7246 3.33798 6.04585 3.65224C6.3671 3.96649 6.55253 4.39404 6.56242 4.84333Z"
                fill="black"
              />
            </svg>
            {/* tweeter */}
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 0.5625C5.45996 0.5625 0.5625 5.45996 0.5625 11.5C0.5625 17.54 5.45996 22.4375 11.5 22.4375C17.54 22.4375 22.4375 17.54 22.4375 11.5C22.4375 5.45996 17.54 0.5625 11.5 0.5625ZM16.7563 8.80713C16.7637 8.92188 16.7637 9.0415 16.7637 9.15869C16.7637 12.7427 14.0342 16.8711 9.04639 16.8711C7.5083 16.8711 6.08252 16.4243 4.88135 15.6553C5.10107 15.6797 5.31104 15.6895 5.53565 15.6895C6.80518 15.6895 7.97217 15.2598 8.90234 14.5322C7.71094 14.5078 6.70996 13.7266 6.36816 12.6523C6.78564 12.7134 7.16162 12.7134 7.59131 12.6035C6.97785 12.4789 6.42645 12.1457 6.0308 11.6606C5.63515 11.1755 5.41964 10.5684 5.4209 9.94238V9.9082C5.77979 10.1108 6.20215 10.2354 6.64404 10.2524C6.27256 10.0049 5.96792 9.66946 5.75711 9.27595C5.5463 8.88244 5.43585 8.443 5.43555 7.99658C5.43555 7.49121 5.56738 7.02979 5.8042 6.62939C6.48511 7.46762 7.33479 8.15318 8.29801 8.64152C9.26123 9.12986 10.3164 9.41004 11.395 9.46387C11.0117 7.62061 12.3887 6.12891 14.0439 6.12891C14.8252 6.12891 15.5283 6.45605 16.0239 6.9834C16.6367 6.86865 17.2227 6.63916 17.7451 6.33154C17.5425 6.95898 17.1177 7.48877 16.5537 7.82324C17.1006 7.76465 17.6279 7.61328 18.1162 7.40088C17.7476 7.94287 17.2861 8.42383 16.7563 8.80713Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
