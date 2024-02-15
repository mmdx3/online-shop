import BreadCrumbs from "@/app/Components/BreadCrumbs";
import MainSection from "@/app/Components/MainSection";
import React from "react";
import CheckOutDetail from "./components/CheckOutDetail";

const page = () => {
  return (
    <>
      <BreadCrumbs page="Checkout" />
      <CheckOutDetail />
      <MainSection />
    </>
  );
};

export default page;
