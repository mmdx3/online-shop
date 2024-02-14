"use client"
import React from "react";
import BreadCrumbs from "@/Components/BreadCrumbs";
import ProductSumury from "./components/productSumury";
import MainSection from "../../Components/MainSection";

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
