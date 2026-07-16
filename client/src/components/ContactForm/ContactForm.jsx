import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <section className="contact-section">

      <div className="contact-container">

        <div className="contact-heading">
          <span>CONTATTACI</span>
          <h2>Contattaci per un preventivo</h2>
          <p>
            Compila il modulo sottostante e il nostro team ti contatterà il prima possibile.
          </p>
        </div>

        <form className="contact-form">

          <div className="form-row">

            <div className="form-group">
              <label>Il tuo nome</label>
              <input
                type="text"
                placeholder="Inserisci il tuo nome"
              />
            </div>

            <div className="form-group">
              <label>La tua email</label>
              <input
                type="email"
                placeholder="Inserisci la tua email"
              />
            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Il tuo telefono</label>
              <input
                type="text"
                placeholder="Inserisci il tuo numero di telefono"
              />
            </div>

            <div className="form-group">
              <label>Oggetto</label>
              <input
                type="text"
                placeholder="Oggetto"
              />
            </div>

          </div>

          <div className="form-group">
            <label>Il tuo messaggio (facoltativo)</label>

            <textarea
              rows="7"
              placeholder="Scrivi il tuo messaggio..."
            ></textarea>
          </div>

          <div className="form-group">
            <label>Allega file</label>

            <input type="file" />
          </div>

          <button type="submit" className="submit-btn">
            Invia Richiesta
          </button>

        </form>

      </div>

    </section>
  );
}