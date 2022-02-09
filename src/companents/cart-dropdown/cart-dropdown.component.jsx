import React from "react";

import CustomButton from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton> Go to Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
