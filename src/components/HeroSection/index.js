import React from "react";
import Button from "../common/Button";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="herosection-wrapper">
      <div className="hero-section flex flex-col max-width ">
        <div className="hero-heading">
          rewards for paying credit card bills.
        </div>
        <div className="hero-subheading">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText={"Download CRED"} className="button">
          {" "}
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
