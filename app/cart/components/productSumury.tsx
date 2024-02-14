import React from "react";
import ProductDetail from "./ProductDetail";
import TotalCart from "./TotalCart";

const ProductSumury = () => {

  return (
    <div className="container mx-auto h-[525px] flex justify-center items-center bg-[#FFFFFF]">
      <div className="w-[1240px] h-[390px] flex justify-between items-start ">
        <ProductDetail />
        <TotalCart />
      </div>
    </div>
  );
};

export default ProductSumury;
