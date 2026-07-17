import React from "react";
import {
  FaAward,
  FaUserShield,
  FaUniversity,
  FaClipboardCheck,
  FaCertificate,
  FaBolt,
  FaFire,
  FaGavel
} from "react-icons/fa";

import "./Referenze.css";

const qualifications = [
  {
    icon: <FaCertificate />,
    title: "Iscrizione all'Albo Regionale dei Collaudatori",
    year: "2001",
    description:
      "Iscritto all'Albo Regionale della Lombardia dei Collaudatori per impianti tecnologici ed elettrici.",
  },
  {
    icon: <FaUserShield />,
    title: "Coordinatore della Sicurezza",
    year: "1998",
    description:
      "Abilitato come Coordinatore della Sicurezza in fase di Progettazione ed Esecuzione ai sensi del D.Lgs. 81/08.",
  },
  {
    icon: <FaFire />,
    title: "Professionista Antincendio",
    year: "2001",
    description:
      "Professionista autorizzato alla progettazione e certificazione della prevenzione incendi secondo la normativa italiana.",
  },
  {
    icon: <FaGavel />,
    title: "Consulente Tecnico d'Ufficio (CTU)",
    year: "2002",
    description:
      "Iscritto all'Albo dei Consulenti Tecnici del Tribunale di Milano per il settore Elettrotecnico.",
  },
  {
    icon: <FaAward />,
    title: "Certificatore Energetico CENED",
    year: "2016",
    description:
      "Iscritto all'Albo Regionale dei Certificatori Energetici della Regione Lombardia.",
  },
  {
    icon: <FaBolt />,
    title: "Esperto in Gestione dell'Energia (EGE)",
    year: "2023",
    description:
      "Esperto certificato Accredia nella Gestione dell'Energia - Settore Civile.",
  }
];

const memberships = [
  "Membro del Comitato Tecnico CEI CT 64.",
  "Membro del Comitato CEI 205 - Sistemi Bus per Edifici.",
  "Membro del Collegio degli Ingegneri e Architetti di Milano.",
  "Membro della Commissione Tecnica della Camera di Commercio di Milano.",
  "Consulente Tecnico per Enti Pubblici.",
  "Membro della Commissione Impianti dell'Ordine degli Ingegneri di Milano.",
];
const timeline = [
  {
    year: "1997",
    title: "Iscrizione all'Albo degli Ingegneri"
  },
  {
    year: "1998",
    title: "Abilitazione come Coordinatore della Sicurezza"
  },
  {
    year: "2000",
    title: "Primo classificato al Concorso Ordinario"
  },
  {
    year: "2001",
    title: "Professionista Antincendio"
  },
  {
    year: "2002",
    title: "Consulente Tecnico del Tribunale (CTU)"
  },
  {
    year: "2016",
    title: "Certificatore Energetico CENED"
  },
  {
    year: "2023",
    title: "Esperto in Gestione dell'Energia (EGE)"
  }
];
export default function Referenze() {
  return (
    <section className="referenze">

      

      <div className="hero">

        <div className="hero-content">

          <span>Qualifiche professionali</span>

          <h1>Referenze </h1>

          <p>
            Oltre 25 anni di abilitazioni professionali,
            certificazioni ingegneristiche e affiliazioni a enti tecnici.
          </p>

        </div>

      </div>

      {/* Qualifications */}

      <section className="section">

        <h2>Certificazioni professionali</h2>

        <div className="cards">

          {qualifications.map((item, index) => (

            <div className="card" key={index}>

              <div className="icon">
                {item.icon}
              </div>

              <span className="year">
                {item.year}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </section>

      {/* Memberships */}

      <section className="section">

        <div className="membership">

          <div className="membership-image">

            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900"
              alt=""
            />

          </div>

          <div className="membership-content">

            <h2>Affiliazioni professionali</h2>

            <ul>

              {memberships.map((item, index) => (

                <li key={index}>
                  ✔ {item}
                </li>

              ))}

            </ul>

          </div>

        </div>

      </section>

      {/* Timeline */}

  <section className="section">

    <h2>Percorso professionale</h2>

    <div className="journey">

        {timeline.map((item, index) => (

            <div
                className={`journey-item ${index % 2 === 0 ? "left" : "right"}`}
                key={index}
            >

                <div className="journey-card">

                    <span>{item.year}</span>

                    <h3>{item.title}</h3>

                </div>

            </div>

        ))}

    </div>

</section>


    </section>
  );
}