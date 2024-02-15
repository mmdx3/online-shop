"use client";
import ISproductService from "@/Types/ProductType";

export default function GetShopCartItem(): ISproductService[] {
  if (typeof window !== "undefined" && localStorage) {
    const items: ISproductService[] | null | string =
      localStorage.getItem("shopCart");
    if (items && items.length > 0) {
      return JSON.parse(items);
    }
  }

  return [];
}
