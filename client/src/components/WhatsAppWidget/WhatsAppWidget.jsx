import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppWidget.css";

export default function WhatsAppWidget() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=393333766736"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-widget"
    >
      <div className="whatsapp-icon">
        <FaWhatsapp />
      </div>

      <div className="whatsapp-content">
        <div className="top-row">
          <span className="company-name">Nava Engineering Srl</span>

          <span className="online-badge">
            Online
          </span>
        </div>

        <h4>Contattaci in chat!</h4>
      </div>
    </a>
  );
}