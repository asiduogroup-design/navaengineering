import React from "react";
import {
  FaHandshake,
  FaLightbulb,
  FaLeaf,
  FaCheckCircle
} from "react-icons/fa";
import "./Mission.css";

export default function Mission() {
  return (
    <section className="mission-page">

        <div className="mission-hero">
          <div className="overlay">
          <h1>La Nostra Missione</h1>

<p>Condivisione • Conoscenza • Innovazione • Responsabilità Ambientale</p>
</div>
        </div>

        {/* Intro */}
        <div className="mission-intro">
          <span>CHI SIAMO</span>

<h2>Progettiamo Soluzioni di Ingegneria Sostenibili</h2>

<p>
In Nava Engineering ogni progetto nasce dall'ascolto delle esigenze del cliente.
Grazie alla collaborazione, all'innovazione e all'eccellenza tecnica,
realizziamo soluzioni ingegneristiche efficienti, sostenibili e orientate al futuro.
</p>
        </div>

        {/* Cards */}
        <div className="mission-grid">
          <div className="mission-card">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900"
              alt=""
            />
            <div className="card-content">
              <FaHandshake className="card-icon" />
             <h3>Condivisione</h3>

<p>
Ogni soluzione ingegneristica viene sviluppata insieme al cliente.
La collaborazione consente di prendere decisioni progettuali migliori,
ottimizzare i costi e garantire il successo del progetto.
</p>
            </div>
          </div>

          <div className="mission-card">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900"
              alt=""
            />
            <div className="card-content">
              <FaLightbulb className="card-icon" />
              <h3>Conoscenza & Innovazione</h3>
              <p>
                Anni di esperienza professionale combinati con software moderni
                e strumenti di ingegneria avanzati ci permettono di creare soluzioni
                innovative e affidabili.
              </p>
            </div>
          </div>

          <div className="mission-card">
            <img
              src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=900"
              alt=""
            />
            <div className="card-content">
              <FaLeaf className="card-icon" />
              <h3>Etica Ambientale</h3>
              <p>
                La sostenibilità e l'efficienza energetica guidano ogni decisione
                ingegneristica, contribuendo a ridurre l'impatto ambientale e
                migliorare le prestazioni degli edifici nel lungo periodo.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="mission-content">
          <div className="text">
            <h2>Ingegneria con uno Scopo</h2>
            <p>
              Al centro della nostra missione c'è la condivisione continua delle
              scelte ingegneristiche con i nostri clienti. Ogni soluzione è progettata
              non solo per soddisfare i requisiti tecnici, ma anche per ottimizzare
              investimenti, manutenzione ed efficienza operativa.
            </p>
            <p>
              Nava Engineering combina un ampio know-how nell'ingegneria elettrica,
              meccanica e antincendio con tecnologie innovative per creare soluzioni
              ingegneristiche integrate per edifici complessi.
            </p>
            <ul>
              <li>
                <FaCheckCircle /> Approccio ingegneristico orientato al cliente
              </li>
              <li>
                <FaCheckCircle /> Principi di progettazione sostenibile
              </li>
              <li>
                <FaCheckCircle /> Software di ingegneria avanzato
              </li>
              <li>
                <FaCheckCircle /> Sicurezza antincendio & ottimizzazione energetica
              </li>
              <li>
                <FaCheckCircle /> Soluzioni integrate innovative
              </li>
            </ul>
          </div>

          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900"
              alt=""
            />
          </div>
        </section>

        {/* Statistics */}
        <section className="stats">
          <div>
            <h2>25+</h2>
            <span>Anni di Esperienza</span>
          </div>
          <div>
            <h2>500+</h2>
            <span>Progetti Completati</span>
          </div>
          <div>
            <h2>100%</h2>
            <span>Impegno verso i Clienti</span>
          </div>
          <div>
            <h2>24/7</h2>
            <span>Supporto Professionale</span>
          </div>
        </section>

    </section>
  );
}