import React from "react";
import "./Contatti.css";

export default function Contatti() {
  return (
    <section className="contatti-page">

        <div className="contatti-grid">
          <div className="contact-details">
            <h1>Contatti</h1>
            <p className="contact-phones"><strong>Tel:</strong> 02/405563 &nbsp;&nbsp; <strong>Cell:</strong> 333/3766736</p>

            <h3>Contatti di posta elettronica:</h3>
            <ul>
              <li>studionavademetrio@gmail.com</li>
              <li>tecnicostudionavademetrio@gmail.com</li>
              <li>tecnico@navaengineeringsrl.com</li>
            </ul>

            <h3>PEC:</h3>
            <p>demetriovincenzo.nava@ingpec.eu</p>
          </div>

          <div className="map-column">
            <h3>Indice posizione</h3>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps?q=Via+Matteo+Civitali+42,+20148+Milano+MI&hl=it&z=16&output=embed"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nava Engineering Location"
              ></iframe>
            </div>
          </div>
        </div>
    </section>
  );
}
