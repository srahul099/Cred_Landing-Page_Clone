import React from "react";
import "./credexperience.css";
import Button from "../common/Button";
const CredExperience = () => {
  return (
    <div className="photo-section ">
      <div className="credexperience">
        <div className="credexperience-content flex flex-col">
          <div>
            <div className="photo-section-heading photo-section-headingce">
              we take your money matters seriously.
            </div>
            <div className="photo-section-subheading">
              so that you don’t have to.
            </div>
          </div>
          <div>
            <div className="photo-section-descriptionce photo-section-description">
              never miss a due date with reminders to help you pay your bills on
              time, instant settlements mean you never wait for your payments to
              go through and statement analysis lets you know where your money
              goes, always.
            </div>
            <div>
              <Button buttonText={"Experience the upgrade"}> </Button>
            </div>
          </div>
        </div>
        <div className="photo-section-bottom"></div>
      </div>
    </div>
  );
};

export default CredExperience;
