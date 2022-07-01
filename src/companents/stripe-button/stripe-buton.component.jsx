import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    "pk_test_51LGikjGhbU28Lbw9YJqAwivfz8x2uVKFTXjBl9IGgx7kOMG0DgOOJDK9Kl3uMVDFeA8XzDGEQeuhEm55DoPuqEUe00ryzqTKa5";

  const onToken = token => {
    console.log(token);
    alert("Payment Done");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Store Ltd."
      billingAddress
      shippingAddress
      description={`Your Total is $ ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
