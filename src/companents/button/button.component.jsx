import React from "react";

import "./button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...OtherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...OtherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
