import React from "react";

import "./signin-and-signup.styles.scss";

import SignIn from "../../companents/sign-in/sign-in.component";

import SignUp from "../../companents/sign-up/sign-up.component";

const SigninAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default SigninAndSignUpPage;
