import React from "react";

import "./checkout.styles.scss";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../companents/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import StripeCheckoutButton from "../../companents/stripe-button/stripe-buton.component";

const CheckoutPage = ({ cartItems, totalvalue }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Qunatity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}>
          {" "}
        </CheckoutItem>
      ))}
      <div className="total">
        <span> TOTAL ${totalvalue}</span>
      </div>

      <div className="test-warning">
        *Please use the following Card
        <br />
        4242424242424242 - Exp: 01-23 - CVV:123
      </div>

      <StripeCheckoutButton price={totalvalue} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalvalue: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
