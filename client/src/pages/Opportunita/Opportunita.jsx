import React from "react";
import {
  FaUsers,
  FaGraduationCap,
  FaLaptopCode,
  FaClipboardCheck,
  FaArrowRight
} from "react-icons/fa";

import ContactForm from "../../components/ContactForm/ContactForm";
import "./Opportunita.css";

export default function Opportunita() {

  const jobs = [
    {
      title: "Disegnatore CAD",
      description:
        "Esperienza nella progettazione tecnica e utilizzo di AutoCAD."
    },
    {
      title: "Progettista Impianti",
      description:
        "Progettazione di impianti elettrici, meccanici e speciali."
    },
    {
      title: "Collaboratore Tecnico",
      description:
        "Supporto alle attività di progettazione e direzione lavori."
    }
  ];

  return (

    <section className="career-page">

      <div className="container">

      {/* Hero */}

      <div className="career-hero">

        <div className="hero-overlay">

          <h1>Lavora con Noi</h1>

          <p>

            Cerchiamo professionisti motivati
            pronti a crescere insieme a Nava Engineering.

          </p>

        </div>

      </div>

      {/* Why Join */}

      <section className="career-section">

        <h2>Perché scegliere Nava Engineering?</h2>

        <div className="benefits">

          <div className="benefit-card">

            <FaUsers />

            <h3>Team Professionale</h3>

            <p>
              Lavora con ingegneri esperti in progetti complessi.
            </p>

          </div>

          <div className="benefit-card">

            <FaGraduationCap />

            <h3>Crescita Continua</h3>

            <p>
              Opportunità di formazione e sviluppo professionale.
            </p>

          </div>

          <div className="benefit-card">

            <FaLaptopCode />

            <h3>Tecnologie Moderne</h3>

            <p>
              Utilizziamo software e strumenti di ultima generazione.
            </p>

          </div>

        </div>

      </section>

      {/* Open Positions */}

      <section className="career-section">

        <h2>Figure Ricercate</h2>

        <div className="job-grid">

          {jobs.map((job, index) => (

            <div className="job-card" key={index}>

              <h3>{job.title}</h3>

              <p>{job.description}</p>

              <button>

                Candidati

                <FaArrowRight />

              </button>

            </div>

          ))}

        </div>

      </section>

      {/* Process */}

      <section className="career-section">

        <h2>Il Processo di Selezione</h2>

        <div className="process">

          <div>

            <FaClipboardCheck />

            <h4>Invia la candidatura</h4>

          </div>

          <div>

            <FaUsers />

            <h4>Colloquio</h4>

          </div>

          <div>

            <FaGraduationCap />

            <h4>Inserimento nel Team</h4>

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="career-contact">

        <h2>Invia la tua candidatura</h2>

        <p>

          Compila il modulo seguente e il nostro team
          ti contatterà il prima possibile.

        </p>

        <ContactForm />

      </section>

      </div>

    </section>

  );

}