import React from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "Nuova Sede Provinciale",
    location: "Monza, Italia",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
    category: "Edificio Istituzionale",
    description:
      "Progettazione completa degli impianti elettrici, meccanici, idraulici, HVAC e antincendio per la nuova Sede della Provincia di Monza e Brianza.",
    services: [
      "Progettazione Elettrica",
      "Impianti Meccanici",
      "HVAC",
      "Prevenzione Incendi"
    ]
  },

  {
    title: "Ospedale San Carlo",
    location: "Milano, Italia",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200",
    category: "Settore Sanitario",
    description:
      "Progettazione impiantistica e Direzione Lavori per reparti ospedalieri, sale operatorie, unità di endoscopia e adeguamento degli impianti elettrici.",
    services: [
      "Impianti Elettrici Ospedalieri",
      "HVAC",
      "Sicurezza",
      "Direzione Lavori"
    ]
  },

  {
    title: "Impianto Elettrico Industriale",
    location: "Bresso, Italia",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
    category: "Settore Industriale",
    description:
      "Progettazione e realizzazione di impianti elettrici industriali, distribuzione dell'energia e sistemi di automazione.",
    services: [
      "Distribuzione Elettrica",
      "Automazione Industriale",
      "Illuminazione Industriale"
    ]
  },

  {
    title: "Edificio Universitario",
    location: "Università di Milano",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
    category: "Istruzione",
    description:
      "Progettazione degli impianti elettrici e meccanici per laboratori universitari e strutture dedicate alla formazione.",
    services: [
      "Laboratori",
      "Impianti Elettrici",
      "Impianti Meccanici"
    ]
  },

  {
    title: "Riqualificazione Energetica Residenziale",
    location: "Milano",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200",
    category: "Residenziale",
    description:
      "Efficientamento energetico, riqualificazione degli impianti HVAC e ammodernamento degli impianti elettrici per complessi residenziali.",
    services: [
      "Efficienza Energetica",
      "Pompe di Calore",
      "Adeguamento Elettrico"
    ]
  },

  {
    title: "Progettazione Antincendio",
    location: "Edifici Pubblici",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
    category: "Prevenzione Incendi",
    description:
      "Studi di prevenzione incendi, progettazione di impianti sprinkler, sistemi di evacuazione fumi e valutazione del rischio incendio.",
    services: [
      "Prevenzione Incendi",
      "Impianti Sprinkler",
      "Evacuazione Fumi"
    ]
  }
];

export default function Portfolio() {
  return (
    <section className="portfolio">


      <div className="portfolio-heading">

       <span>I NOSTRI PROGETTI</span>

<h1>Portfolio</h1>

<p>
Scopri alcuni dei principali progetti realizzati da Nava Engineering
nei settori dell'ingegneria elettrica, meccanica, energetica,
impiantistica e della prevenzione incendi in tutta Italia.
</p>

      </div>

      <div className="portfolio-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-image">

              <img src={project.image} alt={project.title} />

              <span className="category">
                {project.category}
              </span>

            </div>

            <div className="project-content">

              <h2>{project.title}</h2>

              <h4>{project.location}</h4>

              <p>{project.description}</p>

              <div className="service-tags">

                {project.services.map((item, i) => (

                  <span key={i}>{item}</span>

                ))}

              </div>

            </div>

          </div>

        ))}

      </div>


    </section>
  );
}