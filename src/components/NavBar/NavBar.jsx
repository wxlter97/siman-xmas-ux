// NavBar.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUser,
  faShoppingCart,
  faSearch,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/images/logo.png";
import OtherItems from "./OtherItems";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => (
  <nav>
    <div className="flex flex-row navbar-container">
      <div className="basis-1/16 logo">
        <Link to="/">
          <img src={logo} alt="siman.com" className="logo-image" />
        </Link>
      </div>
      <div className="basis-1/16 hmb-menu">
        <div className="hamburger">
          <span />
          <span />
          <span />
        </div>
        <div className="hmb-menu-text">MENÚ</div>
      </div>

      <div className="basis-1/4">
      <SearchBar />
      </div>
      <div className="basis-3/4 user-items">
        <FontAwesomeIcon icon={faHeart} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
      </div>
    </div>
    <OtherItems />
  </nav>
);

export default NavBar;
