import React from "react";
import {
  FaFileContract,
  FaBuilding,
  FaGlobe,
  FaCopyright,
  FaExclamationTriangle,
  FaEnvelope,
  FaCalendarAlt
} from "react-icons/fa";

import "./Termini.css";

export default function Termini() {

  const sections = [

    {
      icon: <FaBuilding />,
      title: "Proprietà del sito",
      text:
        "Il sito web è di proprietà della Nava Engineering Srl, con sede legale in Via Matteo Civitali 42, 20148 Milano (MI), iscritta al Registro delle Imprese della Camera di Commercio di Milano, Monza Brianza e Lodi con numero MI2685853."
    },

    {
      icon: <FaGlobe />,
      title: "Uso del sito",
      text:
        "Il sito è destinato esclusivamente a scopi informativi, professionali e commerciali. L'utente si impegna ad utilizzarlo nel rispetto della normativa vigente e delle presenti condizioni."
    },

    {
      icon: <FaCopyright />,
      title: "Proprietà intellettuale",
      text:
        "Tutti i contenuti, testi, immagini, loghi, documenti e materiale pubblicato sono protetti dalle leggi sul diritto d'autore e rimangono di proprietà esclusiva di Nava Engineering Srl o dei rispettivi titolari."
    },

    {
      icon: <FaExclamationTriangle />,
      title: "Limitazione di responsabilità",
      text:
        "La Società non potrà essere ritenuta responsabile per eventuali danni diretti o indiretti derivanti dall'utilizzo del sito o dall'impossibilità di accedervi."
    },

    {
      icon: <FaEnvelope />,
      title: "Contatti",
      text:
        "Per qualsiasi informazione relativa ai presenti Termini e Condizioni è possibile contattarci all'indirizzo email studionavademetrio@gmail.com oppure telefonicamente al numero 02/405563."
    }

  ];

  return (

    <section className="terms">

      {/* Hero */}

      <div className="terms-hero">

        <div className="hero-icon">

          <FaFileContract />

        </div>

        <h1>Termini e Condizioni</h1>

        <p>

          Condizioni di utilizzo del sito web
          Nava Engineering S.R.L.

        </p>

        <span>

          <FaCalendarAlt />

          Ultimo aggiornamento • 04/02/2025

        </span>

      </div>

      {/* Intro */}

      <div className="intro-card">

        <h2>Benvenuto</h2>

        <p>

          L'accesso e l'utilizzo del sito web Nava Engineering S.R.L.
          implicano l'accettazione dei presenti Termini e Condizioni.
          Ti invitiamo a leggerli attentamente prima di utilizzare
          il sito.

        </p>

      </div>

      {/* Cards */}

      <div className="terms-container container">

        {sections.map((item, index) => (

          <div
            className="term-card"
            key={index}
          >

            <div className="card-header">

              <div className="card-icon">

                {item.icon}

              </div>

              <h3>{item.title}</h3>

            </div>

            <p>{item.text}</p>

          </div>

        ))}

      </div>

    </section>

  );

}