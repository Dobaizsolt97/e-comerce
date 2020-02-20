import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  inverted,
  children,
  IsGoogleSignIn,
  ...otherProps
}) => (
  <button
    className={` ${inverted ? "inverted" : ""}  ${
      IsGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
