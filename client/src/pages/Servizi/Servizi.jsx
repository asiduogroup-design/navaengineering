import React from "react";
import "./Servizi.css";

const services = [
  {
    title: "Ingegneria Energetica",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200",
    description:
      "Diagnosi energetiche, certificazioni energetiche, audit energetici e soluzioni progettuali sostenibili per edifici residenziali, commerciali e industriali.",
    points: [
      "Diagnosi Energetica",
      "Certificazione Energetica",
      "Audit Energetici",
      "Analisi delle Prestazioni Energetiche",
    ],
  },
  {
    title: "Impianti Termici e Meccanici",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200",
    description:
      "Progettazione di impianti di riscaldamento, raffrescamento, ventilazione, pompe di calore e produzione di acqua calda sanitaria ad alta efficienza.",
    points: [
      "Pompe di Calore",
      "Impianti di Climatizzazione",
      "Ventilazione Meccanica",
      "Impianti di Riscaldamento",
    ],
  },
  {
    title: "Ingegneria Antincendio",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
    description:
      "Progettazione antincendio completa, sistemi sprinkler, reti idriche antincendio, studi di prevenzione incendi e pratiche SCIA.",
    points: [
      "Prevenzione Incendi",
      "Impianti Sprinkler",
      "Evacuazione Fumi",
      "Pratiche SCIA Antincendio",
    ],
  },
  {
    title: "Impianti Elettrici",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    description:
      "Progettazione di impianti elettrici civili e industriali, illuminazione, sistemi speciali e soluzioni per edifici intelligenti.",
    points: [
      "Progettazione Elettrica",
      "Progettazione Illuminotecnica",
      "Impianti Speciali",
      "Distribuzione dell'Energia",
    ],
  },
  {
    title: "Energie Rinnovabili",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200",
    description:
      "Progettazione di impianti fotovoltaici, sistemi di accumulo, consulenza sulle energie rinnovabili ed efficientamento energetico.",
    points: [
      "Impianti Fotovoltaici",
      "Sistemi di Accumulo",
      "Energie Rinnovabili",
      "Edifici Sostenibili",
    ],
  },
  {
    title: "Collaudi e Verifiche Tecniche",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200",
    description:
      "Collaudi tecnico-amministrativi, verifiche impiantistiche, prove di accettazione e servizi di controllo qualità.",
    points: [
      "Collaudi Tecnici",
      "Verifiche Impiantistiche",
      "Ispezioni Tecniche",
      "Controllo Qualità",
    ],
  },
];
export default function Servizi() {
  return (
    <section className="services-page">


      <div className="services-header">

        <span>COMPETENZE INGEGNERISTICHE</span>

<h1>Servizi di Ingegneria</h1>

<p>
Nava Engineering offre servizi professionali di progettazione
nei settori dell'ingegneria elettrica, meccanica, energetica,
impiantistica e della prevenzione incendi, garantendo qualità,
sicurezza, innovazione e sostenibilità in ogni progetto.
</p>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <img src={service.image} alt={service.title} />

            <div className="service-content">

              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <ul>

                {service.points.map((item, i) => (

                  <li key={i}>{item}</li>

                ))}

              </ul>

            </div>

          </div>

        ))}

      </div>


    </section>
  );
}