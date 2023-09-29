import React, { useState } from "react";
import "./header.css";
const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);
  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
  };
  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}
      >
        <div className="mobile-navbar">
          <div className="mobile-nav-item">
            <a
              className="navbar-link"
              href="https://cred.club/cred-pay?source=hamburger"
              target="_blank"
            >
              CRED pay
            </a>
          </div>
          <div className="mobile-nav-item">
            <a
              className="navbar-link"
              href="https://cred.club/check-your-credit-score"
              target="_blank"
            >
              credit score check
            </a>
          </div>
        </div>
      </div>
      <div className="flex max-width header">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          alt="cred logo"
          className="header-logo"
        />
        <div className="only-mobile mobile-menu-button-wrapper">
          <button
            class={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="header-nav-item">
            <a
              className="navbar-link"
              href="https://cred.club/check-your-credit-score"
              target="_blank"
            >
              credit score check
            </a>
          </div>
          <div className="header-nav-item">
            <a
              className="navbar-link"
              href="https://cred.club/cred-pay?source=hamburger"
              target="_blank"
            >
              CRED pay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
