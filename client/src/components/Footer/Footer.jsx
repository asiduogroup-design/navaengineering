import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaBriefcase,
  FaEnvelope,
  FaArrowUp,
  FaBuilding
} from "react-icons/fa";

import "./Footer.css";
import logo from "../../assets/logo (2).png";

export default function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (

    <footer className="footer">

      <div className="footer-overlay"></div>

      <div className="footer-container">

        {/* Azienda */}

        <div className="footer-column">

          <img
            src={logo}
            alt="Nava Engineering"
            className="footer-logo"
          />

          <h2>Nava Engineering S.R.L.</h2>

          <p className="company-desc">

            Società di Ingegneria specializzata nella progettazione
            integrata edilizia, energetica, impiantistica e nella
            prevenzione incendi.

          </p>

          <div className="address">

            <FaBuilding />

            <span>

              Società di Ingegneria

            </span>

          </div>

          <div className="address">

            <FaMapMarkerAlt />

            <span>

              Via Matteo Civitali n°42
              <br />
              20148 Milano (MI)

            </span>

          </div>

        </div>

        {/* Social */}

        <div className="footer-column">

          <h3>

            <FaLinkedinIn />

            Social

          </h3>

          <a
            href="https://www.linkedin.com/in/demetrio-nava-848b2a73/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

        {/* Privacy */}

        <div className="footer-column">

          <h3>

            <FaShieldAlt />

            Privacy

          </h3>

          <Link to="/Privacy">
            Privacy Policy
          </Link>

          <Link to="/Termini">
            Termini e condizioni
          </Link>

          <Link to="/Contatti">
            Contattaci
          </Link>

        </div>

        {/* Lavoro */}

        <div className="footer-column">

          <h3>

            <FaBriefcase />

            Lavoro

          </h3>

          <Link to="/Opportunita">
            Opportunità
          </Link>

          <Link to="/Contatti">

            <FaEnvelope
              style={{
                marginRight: "8px",
                fontSize: "13px"
              }}
            />

            Invia il tuo CV

          </Link>

        </div>

      </div>

      {/* Footer Bottom */}

      <div className="footer-bottom">

        <p>

          © {new Date().getFullYear()} Nava Engineering S.R.L.
          Tutti i diritti riservati.

        </p>

        <button
          className="back-top"
          onClick={scrollTop}
          aria-label="Torna in alto"
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>

  );
}