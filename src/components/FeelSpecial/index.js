import React from "react";
import "./feelspecial.css";
import Button from "../common/Button";
const FeelSpecial = () => {
  return (
    <div className="photo-section ">
      <div className="feel-special">
        <div className="feel-special-content flex flex-col">
          <div>
            <div className="photo-section-heading">
              feel special more often.
            </div>
            <div className="photo-section-subheading">
              exclusive rewards for paying your bills
            </div>
          </div>
          <div>
            <div className="photo-section-description">
              every time you pay your credit card bills on CRED, you receive
              CRED coins. you can use these to win exclusive rewards or get
              special access to curated products and experiences. on CRED, good
              begets good.
            </div>
            <div>
              <Button buttonText={"Explore rewards"}> </Button>
            </div>
          </div>
        </div>
        <div className="photo-section-bottom"></div>
      </div>
    </div>
  );
};

export default FeelSpecial;
