import React from "react";

//import "./button.styles.scss";

import { CustomButtonContainer } from "./button.styles";

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
