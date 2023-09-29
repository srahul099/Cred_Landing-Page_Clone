import React from "react";
import "./credsecurity.css";
import Button from "../common/Button";
const CredSecurity = () => {
  return (
    <div className="photo-section ">
      <div className="cred-security">
        <div className="cred-security-content flex flex-col">
          <div>
            <div className="photo-section-heading">
              security first. and second.
            </div>
            <div className="photo-section-subheading">
              what’s yours remains only yours.
            </div>
          </div>
          <div>
            <div className="photo-section-description">
              CRED ensures that all your personal data and transactions are
              encrypted, and secured so what’s yours remains only yours. there’s
              no room for mistakes because we didn’t leave any.
            </div>
            <div>
              <Button buttonText={"Become a member"}> </Button>
            </div>
          </div>
        </div>
        <div className="photo-section-bottom"></div>
      </div>
    </div>
  );
};

export default CredSecurity;
