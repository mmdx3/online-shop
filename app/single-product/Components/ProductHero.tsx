import React from "react";
import ProductImage from "./ProductImage";
import ProductDetail from "./ProductDetail"; 
import ISproductService from "@/Types/ProductType";

const ProductHero = ({ p }: { p: ISproductService | undefined}) => {
  return (
    <div className="container mx-auto h-[820px] flex justify-center items-center">
      <div className="w-[1241px] h-[720px] flex justify-between items-start  ">
        <ProductImage />
        <ProductDetail product={p} />
      </div>
    </div>
  );
};

export default ProductHero;
