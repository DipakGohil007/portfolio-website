import React from "react";
import { images } from "../../assets/images/images";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="container navbar-container">
        <Link to="/">
          <img src={images.Logo} alt="logo" className="logo" />
        </Link>
        <div className="nav-links">
          <Link to={"/"} className="link">
            Home
          </Link>
          <Link to={"/"} className="link">
            About
          </Link>
          <Link to={"/"} className="link">
            Projects
          </Link>
          <Link
            to={"https://www.linkedin.com/in/dipak-gohil-7286b2238/"}
            className="link"
            target="_blank"
          >
            Connect
          </Link>
        </div>
        {/* <button className="hamburger-menu-btn" onClick={showNavbar}>
        <GiHamburgerMenu />
      </button> */}
      </div>
    </div>
  );
};

export default Navbar;
