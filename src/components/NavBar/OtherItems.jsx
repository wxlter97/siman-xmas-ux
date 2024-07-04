// NavBar.jsx

import React from "react";
import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faVideo,
  faGift,
  faCreditCard,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const OtherItems = () => (
  <div className="hidden md:flex other-items">
    <div className="other-item" onClick={() => window.open("tel:22983777")}>
      <FontAwesomeIcon icon={faPhone} className="icon" />
      2298-3777
    </div>
    <div className="other-item" onClick={() => window.open("https://wa.me/50322105454")}>
      <FontAwesomeIcon icon={faWhatsapp} className="icon" />
      Compra por WhatsApp
    </div>
    <div className="other-item" onClick={() => window.open("/live-shopping", "_self")}>
      <FontAwesomeIcon icon={faVideo} className="icon" />
      Live Shopping
    </div>
    <div className="other-item" onClick={() => window.open("/clubes", "_self")}>
      <FontAwesomeIcon icon={faGift} className="icon" />
      Clubes
    </div>
    <div className="other-item" onClick={() => window.open("/credisiman", "_self")}>
      <FontAwesomeIcon icon={faCreditCard} className="icon" />
      Credisiman
    </div>
    <div className="other-item marketplace" onClick={() => window.open("/marketplace", "_self")}>
      <FontAwesomeIcon icon={faStore} className="icon-purple" />
      Marketplace
    </div>
  </div>
);

export default OtherItems;
