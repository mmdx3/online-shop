import React from "react";
import BillingDetail from "./BillingDetail";
import Payment from "./Payment";

const CheckOutDetail = () => {
  return (
    <div className="container mx-auto h-[1829px] flex justify-start items-start mt-[55px] ">
      <div className="w-[1242px] h-[1714px] justify-between items-center ">
        <BillingDetail />
      </div>
      <Payment />
    </div>
  );
};

export default CheckOutDetail;
