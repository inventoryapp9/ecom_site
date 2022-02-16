import { CartActionsTypes } from "./cart.types";
import { additemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionsTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionsTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: additemToCart(state.cartItems, action.paylaod),
      };
    default:
      return state;
  }
};
export default CartReducer;
