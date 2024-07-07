import React from "react";
import "./button.css";
const Button = ({ buttonText, onClick, customClasses, prefix }) => {
  return (
    <div>
      <div
        className={`flex absolute-center button-wrapper ${customClasses}`}
        onClick={onclick}
      >
        {prefix}
        {buttonText}
      </div>
    </div>
  );
};

export default Button;
