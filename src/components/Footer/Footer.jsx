import React, { useState } from "react";
import "./Footer.scss";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGooglePlay,
  FaApple,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import LogoRed from "../../assets/images/logo_red.png";
import FlagSv from "../../assets/images/flag_sv.png";
import FlagGt from "../../assets/images/flag_gt.png";
import FlagCr from "../../assets/images/flag_cr.png";
import FlagNi from "../../assets/images/flag_ni.png";
import PaymentMethods from "../../assets/images/payment_methods.png";
import PagoSeguro from "../../assets/images/pago_seguro.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [country, setCountry] = useState("SV");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      alert("¡Gracias por suscribirte!");
      setEmail("");
      setError("");
    } else {
      setError("Por favor, introduce un correo electrónico válido.");
    }
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const countryFlag = (country) => {
    switch (country) {
      case "SV":
        return FlagSv;
      case "GT":
        return FlagGt;
      case "CR":
        return FlagCr;
      case "NI":
        return FlagNi;
      default:
        return FlagSv;
    }
  };

  const countryName = (country) => {
    switch (country) {
      case "SV":
        return "El Salvador";
      case "GT":
        return "Guatemala";
      case "CR":
        return "Costa Rica";
      case "NI":
        return "Nicaragua";
      default:
        return "El Salvador";
    }
  };

  const currency = (country) => {
    switch (country) {
      case "SV":
        return "US$";
      case "GT":
        return "GTQ";
      case "CR":
        return "CRC";
      case "NI":
        return "NIO";
      default:
        return "US$";
    }
  };

  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="footer-container">
      <div className="grid footer-top">
        <div className="footer-logo hidden md:flex">
          <img src={LogoRed} alt="Siman Logo" />
        </div>
        <div className="footer-links gap-4 grid md:flex">
          <div className="footer-column">
            <h4
              onClick={() => toggleSection("corporativo")}
              className="flex justify-between items-center"
            >
              SIMAN CORPORATIVO
              <span className="md:hidden">
                {expandedSection === "corporativo" ? <FaMinus /> : <FaPlus />}
              </span>
            </h4>
            <ul
              className={`md:block ${
                expandedSection === "corporativo" ? "block" : "hidden"
              }`}
            >
              <li>
                <Link to="/quienes-somos">Quiénes Somos</Link>
              </li>
              <li>
                <Link to="/vision-mision">Visión y Misión</Link>
              </li>
              <li>
                <Link to="/historia">Historia</Link>
              </li>
              <li>
                <Link to="/sucursales">Sucursales</Link>
              </li>
              <li>
                <Link to="/servicios">Servicios</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4
              onClick={() => toggleSection("programas")}
              className="flex justify-between items-center"
            >
              PROGRAMAS
              <span className="md:hidden">
                {expandedSection === "programas" ? <FaMinus /> : <FaPlus />}
              </span>
            </h4>
            <ul
              className={`md:block ${
                expandedSection === "programas" ? "block" : "hidden"
              }`}
            >
              <li>
                <Link to="/monedero">Monedero</Link>
              </li>
              <li>
                <Link to="/certificados">Certificados de Regalo</Link>
              </li>
              <li>
                <Link to="/garantias">Garantías</Link>
              </li>
              <li>
                <Link to="/siman-pro">Siman PRO</Link>
              </li>
              <li>
                <Link to="/credisiman">Credisman</Link>
              </li>
              <li>
                <Link to="/marketplace">Marketplace</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4
              onClick={() => toggleSection("servicio")}
              className="flex justify-between items-center"
            >
              SERVICIO AL CLIENTE
              <span className="md:hidden">
                {expandedSection === "servicio" ? <FaMinus /> : <FaPlus />}
              </span>
            </h4>
            <ul
              className={`md:block ${
                expandedSection === "servicio" ? "block" : "hidden"
              }`}
            >
              <li>
                <Link to="/faq">Preguntas Frecuentes</Link>
              </li>
              <li>
                <Link to="/contacto">Contáctenos</Link>
              </li>
              <li>
                <Link to="/condiciones">Condiciones ofertas</Link>
              </li>
              <li>
                <Link to="/seguridad">Seguridad del Sitio</Link>
              </li>
              <li>
                <Link to="/privacidad">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/reparacion">Solicitud de Reparación</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="hidden md:flex justify-between items-center">
              &nbsp;
            </h4>
            <ul
              className={`md:block ${
                expandedSection === "servicio" ? "block" : "hidden"
              }`}
            >
              <li>
                <Link to="/devoluciones">Política de Devoluciones</Link>
              </li>
              <li>
                <Link to="/retracto">Derecho de Retracto</Link>
              </li>
              <li>
                <Link to="/condiciones">Condiciones de Uso</Link>
              </li>
              <li>
                <Link to="/terminos">Términos y Condiciones</Link>
              </li>
              <li>
                <Link to="/covid-19">Boletín COVID-19</Link>
              </li>
            </ul>
          </div>
          <div className="vertical-line"></div>
          <div className="footer-column">
            <h4 className="flex justify-between items-center">
              Suscríbete para obtener las mejores ofertas
            </h4>
            <div>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={handleEmailChange}
                className={`p-2 border ${
                  error ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                onClick={handleSubscribe}
                className="btn mt-2 p-2 bg-blue-500 text-white rounded-md"
              >
                Suscribirse
              </button>{" "}
              <div className="country-select mt-4">
                <img
                  src={countryFlag(country)}
                  alt="Flag"
                  className="inline-block mr-2"
                />
                <select
                  value={country}
                  onChange={handleCountryChange}
                  className="p-2 border border-gray-300 rounded-md w-full md:w-3/4"
                >
                  <option value="SV">El Salvador</option>
                  <option value="GT">Guatemala</option>
                  <option value="CR">Costa Rica</option>
                  <option value="NI">Nicaragua</option>
                </select>
                <span className="ml-2">{currency}</span>
              </div>
              <div className="social-icons w-full mt-4">
                <Link to="/facebook">
                  <FaFacebook />
                </Link>
                <Link to="/instagram">
                  <FaInstagram />
                </Link>
                <Link to="/twitter">
                  <FaTwitter />
                </Link>
                <Link to="/youtube">
                  <FaYoutube />
                </Link>
                <Link to="/google-play">
                  <FaGooglePlay />
                </Link>
                <Link to="/apple">
                  <FaApple />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="payment-methods pb-4 pt-4">
          <img src={PagoSeguro} alt="Pago Seguro" />
        </div>
        <div className="payment-methods pb-4 pt-4">
          <img src={PaymentMethods} alt="Payment Methods" />
        </div>
        <div className="footer-legal">
          <p className="pb-4">
            Copyright © 2023 Almacenes Siman El Salvador. Reservados todos los
            derechos.
          </p>
          <p className="pt-4">
            Almacenes Siman S.A. de C.V. - NIT: 0614-170266-001-3
          </p>
          <p>
            Almacenes venta de diversos artículos - Paseo General Escalón,
            Centro Comercial Galerías, San Salvador.
          </p>
          <p>
            Llámanos{" "}
            <span
              onClick={() => (window.location.href = "tel:2298-3777")}
              className="phone-number"
            >
              2298-3777
            </span>
            -{" "}
            <a
              href="mailto:contacto@siman.com"
              target="_blank"
              rel="noreferrer"
            >
              contacto@siman.com
            </a>
          </p>
        </div>
        <div className="talk-to-an-expert">
          <button className="btn expert-btn">
            <FaTwitter />
            Habla con un experto
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
