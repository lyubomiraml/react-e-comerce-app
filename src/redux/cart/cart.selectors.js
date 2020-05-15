import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector([selectCart], (cart) =>
  cart.cartItems.reduce((sumOfItems, item) => sumOfItems + item.quantity, 0)
);
