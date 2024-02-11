"use client";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import GetSingleProduct from "@/app/service/getSingleproduct";
import ISproductService from "@/Types/ProductType";
import ProductHero from "../Components/ProductHero";
import Description from "../Components/Description";
import RelatedProduct from "../Components/RelatedProduct";

const page = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<ISproductService>();
  useEffect(() => {
    GetSingleProduct(location.origin + "/api/singleproduct/" + params.id).then(
      (p) => setProduct(p?.data?.data),
    );
  }, []);

  return (
    <div className="container mx-auto ">
      <BreadCrumb name={product?.name as string} />
      <ProductHero p={product} />
      <Description />
      <RelatedProduct />
    </div>
  );
};

export default page;
