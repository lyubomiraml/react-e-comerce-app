import { ShopActionTypes } from "./shop.types";

export const setCollections = (collections) => ({
  type: ShopActionTypes.SET_COLLECTIONS,
  payload: collections,
});
