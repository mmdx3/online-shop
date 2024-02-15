"use client";
import ISproductService from "@/Types/ProductType";
import GetProduct from "@/app/service/getProduct";
import React, { useEffect, useState } from "react";
import ProductCom from "@/app/Components/Product";
const RelatedProduct = () => {
  const [Product, setProduct] = useState<ISproductService[]>([]);
  useEffect(() => {
    GetProduct(location.origin + "/api/product").then((d) =>
      setProduct(d?.data.data),
    );
  }, []);
  return (
    <div className="container mx-auto flex flex-col gap-[25px] py-[35px] h-[777px]">
      <h3 className="min-w-[309px] mx-auto h-[54px] font-[500] text-[36px] text-[#000000]">
        Related Products
      </h3>
      <div className="w-[1236px] mx-auto h-[446px] gap-[32px] flex justify-start items-center">
        {Product.slice(0, 4).map((p) => (
          <ProductCom p={p} key={p.id} />
        ))}
      </div>
      {/* Show More */}
      <button className="w-[245px] h-[48px] border border-[#B88E2F] rounded-[5px] mx-auto mt-[25px]">
        <h3 className="min-w-[89px] h-[24px] font-[600] text-[16px] text-[#B88E2F]">
          Show More
        </h3>
      </button>
    </div>
  );
};

export default RelatedProduct;
