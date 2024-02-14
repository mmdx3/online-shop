"use client";
import ISproductService from "@/Types/ProductType";
import GetShopCartItem from "@/app/utils/GetShopCartItem";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ISproductService[] = GetShopCartItem();

export const ShopCartSlice = createSlice({
  name: "ShopCartSlice",
  initialState,
  reducers: {
    addShopCart: (state, action: PayloadAction<ISproductService>) => {
      const itemInCart = state.find((i) => i.id === action.payload.id);

      if (itemInCart) {
        // Increase the quantity of the existing product
        const updatedItem = {
          ...itemInCart,
          quantity:  action.payload.quantity,
        };
        const item = state.map((i) =>
          i.id === updatedItem.id ? updatedItem : i,
        );

        localStorage.setItem("shopCart", JSON.stringify(item));
        // Update the state with the updated product
        return item;
      } else {
        // Add the new product to the state
        return state.concat(action.payload);
      }
    },
    deleteShopCart: (state, action: PayloadAction<ISproductService[]>) => {
      localStorage.setItem("shopCart", JSON.stringify(action.payload));

      return (state = action.payload);
    },
  },
});

export const { addShopCart, deleteShopCart } = ShopCartSlice.actions;
export default ShopCartSlice.reducer;
