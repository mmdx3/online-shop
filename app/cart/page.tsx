"use client"
import React from "react";
import BreadCrumbs from "@/app/Components/BreadCrumbs";
import ProductSumury from "./components/productSumury";
import MainSection from "@/app/Components/MainSection";

const page = () => {
  return (
    <div className="container mx-auto ">
      <BreadCrumbs page="Cart" />
      <ProductSumury />
      <MainSection />
    </div>
  );
};

export default page;
