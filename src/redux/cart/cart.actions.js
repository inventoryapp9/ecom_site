import { CartActionsTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionsTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
  type: CartActionsTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = item => ({
  type: CartActionsTypes.CLEAR_ITEM_FORM_CART,
  payload: item,
});
export const RemoveItem = item => ({
  type: CartActionsTypes.REMOVE_ITEM,
  payload: item,
});
