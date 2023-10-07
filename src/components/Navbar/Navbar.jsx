import React, { useRef, useState } from "react";
import { images } from "../../assets/images/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("hamburger");
    setHamburgerActive(!hamburgerActive);
  };

  return (
    <div className="navbar" ref={navRef}>
      <div className="container navbar-container">
        <Link to="#">
          <img src={images.Logo} alt="logo" className="logo" />
        </Link>
        <div className="nav-links">
          <Link
            to="https://drive.google.com/file/d/12-JRIzcSTkeBsclk2oP5vQMn21IGwWDW/view?usp=sharing"
            className="link"
            target="_blank"
          >
            Resume
          </Link>
          <Link
            to="https://github.com/DipakGohil007"
            className="link"
            target="_blank"
          >
            Github
          </Link>
          <Link
            to="https://www.linkedin.com/in/dipak-gohil-7286b2238/"
            className="link"
            target="_blank"
          >
            Connect
          </Link>
        </div>
        <button className="hamburger-menu-btn" onClick={showNavbar}>
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
