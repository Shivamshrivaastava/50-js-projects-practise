import { useState } from "react";
import "./header.css";
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function handleShowMobileMenu() {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <div className="menu-wrapper">
      <div
        className={`mobile-menu only-mobile ${showMobileMenu ? "overlay" : ""}`}
      >
        <ul className="mobile-navbar">
          <li className="mobile-nav-item">CRED pay</li>
          <li className="mobile-nav-item">credit score check</li>
        </ul>
      </div>
      <div className=" flex max-width header-section">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          alt="credLogo"
          className="header-logo"
        />
        <div className="only-mobile mobile-button-menu-wrapper">
          <button
            className={`hamburger hamburger--spin ${
              showMobileMenu ? "is-active" : ""
            }`}
            onClick={handleShowMobileMenu}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <ul className="non-mobile flex header-nav-items-wrapper">
          <li className="header-nav-item">credit score check</li>
          <li className="header-nav-item">CRED pay</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
