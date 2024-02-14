import Image from "next/image";
import React, { ReactNode } from "react";
import { useAppSelector } from "@/Redux/Store";
import { useDispatch } from "react-redux";
import useNumberWithCommas from "@/app/utils/useNumberWithCommas";
import {  deleteShopCart } from "@/Redux/reducers/shopCartSlice";
import ISproductService from "@/Types/ProductType";

const ProductDetail = () => {
  const shopCart = useAppSelector((state) => state.shopCart);
  const dispatch = useDispatch();
  const { numberWithCommas } = useNumberWithCommas();

  const hanleDeleteItem = (id: number) => {
    const updatecart = shopCart.filter((i) => i.id !== id);
    dispatch(deleteShopCart(updatecart));
  };

  const SubTotalPrice = (id: number): ReactNode => {
    const item: ISproductService | undefined = shopCart.find(
      (i) => i.id === id,
    );

    let totalPrice;
    if (item) {
      const price = item?.price - (item?.price * item?.OfferPercent) / 100;
      totalPrice = numberWithCommas(price * item.quantity);

      return totalPrice;
    }
  };

  return (
    <div className="w-[817px] h-[315px]  flex flex-col justify-between items-start ">
      {/* Head */}
      <div className="w-[817px] h-[55px] bg-[#F9F1E7] flex justify-between items-center gap-[32px]">
        {/* Item */}
        <div className="w-[108px] "></div>
        <h2 className="min-w-[129px] h-[24px] font-[500] text-[16px] text-[var(--text-black)]">
          Product
        </h2>
        <h3 className="w-[112px] h-[24px] font-[400] text-[16px] text-[#000000]">
          Price
        </h3>
        <h4 className="w-[70px] h-[24px] font-[500] text-[16px] text-[#000000]">
          Quantity
        </h4>
        <h4 className="w-[112px] font-[400px] text-[16px] text-[#000000]">
          Subtotal
        </h4>
        <div className="w-[85px]"></div>
      </div>
      {/* Item */}
      <div className="w-full max-h-[250px] flex flex-col justify-start items-start gap-[25px]">
        {shopCart.map((item) => (
          <div
            key={item.id}
            className="w-[817px]  flex justify-between items-center gap-[32px]"
          >
            <Image
              className="w-[108px] h-[105px] object-cover rounded-[5px]"
              src={item.picture}
              alt="productImg"
            />
            <h2 className="min-w-[108px]  font-[400] text-[16px] text-[#9F9F9F]">
              {item.name}
            </h2>
            <h4 className="w-[112px]  font-[500] text-[16px] text-[#000000]">
              {numberWithCommas(
                item.price - (item.price * item.OfferPercent) / 100,
              )}
            </h4>
            <div className="w-[32px] h-[32px] rounded-[5px] border border-[#9F9F9F] flex justify-center items-center ">
              <span className="h-[24px] font-[400] text-[16px] text-[#000000]">
                {item.quantity}
              </span>
            </div>
            <h4 className="w-[112px] font-[400px] text-[16px] text-[#000000] overflow-hidden text-ellipsis whitespace-nowrap ">
              {SubTotalPrice(item.id)}
            </h4>
            <div className="w-[85px] ">
              {/* Delete Icon */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onClick={() => hanleDeleteItem(item.id)}
              >
                <path
                  d="M23.625 7H20.125V4.8125C20.125 3.84727 19.3402 3.0625 18.375 3.0625H9.625C8.65977 3.0625 7.875 3.84727 7.875 4.8125V7H4.375C3.89102 7 3.5 7.39102 3.5 7.875V8.75C3.5 8.87031 3.59844 8.96875 3.71875 8.96875H5.37031L6.0457 23.2695C6.08945 24.202 6.86055 24.9375 7.79297 24.9375H20.207C21.1422 24.9375 21.9105 24.2047 21.9543 23.2695L22.6297 8.96875H24.2812C24.4016 8.96875 24.5 8.87031 24.5 8.75V7.875C24.5 7.39102 24.109 7 23.625 7ZM18.1562 7H9.84375V5.03125H18.1562V7Z"
                  fill="#B88E2F"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
