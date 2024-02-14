import { useAppSelector } from "@/Redux/Store";
import useNumberWithCommas from "@/app/utils/useNumberWithCommas";
import React, {  useEffect, useState } from "react";

const TotalCart = () => {
  const shopCart = useAppSelector((state) => state.shopCart);
  const { numberWithCommas } = useNumberWithCommas();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    shopCart.forEach((i) => {
      const price = i?.price - (i?.price * i?.OfferPercent) / 100;
      total += price * i.quantity;
    });

    setTotal(total);
  }, []);

  return (
    <div className="w-[393px] h-[390px] bg-[#F9F1E7] flex flex-col justify-between items-center gap-[15px] pt-[15px] pb-[55px]">
      {/* Title */}
      <h2 className="w-[179px] h-[48px] font-[600] text-[32px] text-[#000000]">
        Cart Totals
      </h2>

      <div className="flex flex-col justify-between w-[220px] gap-[15px]">
        {/* Sub total */}
        <div className="flex justify-between w-full ">
          <h3 className="w-[69px] h-[24px] font-[500] text-[16px] text-[#000000]">
            Subtotal
          </h3>
          <h3 className="min-w-[112px] h-[24px] font-[400] text-[16px] text-[#9F9F9F]">
            {numberWithCommas(total)}
          </h3>
        </div>
        {/* Total */}
        <div className="flex justify-between w-full ">
          <h3 className="w-[69px] h-[24px] font-[500] text-[16px] text-[#000000]">
            Total
          </h3>
          <h3 className="min-w-[112px] h-[24px] font-[500] text-[20px] text-[#B88E2F]">
            {numberWithCommas(total)}
          </h3>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="w-[222px] h-[59px] rounded-[15px] border border-[#000000]">
        <span className="font-[400] text-[20px] text-[#000000]">Check Out</span>
      </button>
    </div>
  );
};

export default TotalCart;
