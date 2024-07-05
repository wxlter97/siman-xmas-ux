// NavBar.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSearch,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

import logo from "../../assets/images/logo.png";
import OtherItems from "./OtherItems";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => (
  <nav>
    <div className="navbar-container justify-center flex">
      {/* Logo para desktop */}
      <div className="basis-1/16 logo hidden md:flex">
        <Link to="/siman-xmas-ux">
          <img src={logo} alt="siman.com" className="logo-image" />
        </Link>
      </div>
      <div className="hmb-menu md:border-x md:border-black basis-1/4 md:basis-1/16">
        <div className="hamburger">
          <span />
          <span />
          <span />
        </div>
        <div className="hmb-menu-text hidden md:flex">MENÚ</div>
      </div>
      {/* Logo para mobile */}
      <div className="logo md:hidden">
        <Link to="/siman-xmas-ux">
          <img src={logo} alt="siman.com" className="logo-image" />
        </Link>
      </div>
      <div className="hidden md:basis-1/4 md:flex">
        <SearchBar />
      </div>
      <div className="user-items basis-1/4 md:basis-3/4">
        <FontAwesomeIcon icon={faHeart} className="icon" />
        <FontAwesomeIcon icon={faUser} className="hidden md:flex icon" />
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
      </div>
    </div>
    <OtherItems />
  </nav>
);

export default NavBar;
