import React from "react";
import "./Curriculum.css";

const timeline = [
  {
    year: "2001 - 2004",
    title: "ALER Milano",
    description:
      "Direzione Lavori e Coordinamento della Sicurezza per l'adeguamento degli impianti elettrici nei quartieri Domus Teramo, Alzaia Naviglio Pavese e Ticinese Scaldasole.",
  },
  {
    year: "2003 - 2004",
    title: "Politecnico di Milano",
    description:
      "Collaudo tecnico-amministrativo degli impianti elettrici e speciali dell'edificio DISET di Via Bonardi.",
  },
  {
    year: "2006 - 2019",
    title: "A2A Milano",
    description:
      "Collaudo tecnico-amministrativo degli interventi sugli impianti semaforici previsti dal Piano 2004.",
  },
  {
    year: "2008 - 2010",
    title: "Museo Nazionale della Scienza e della Tecnologia",
    description:
      "Collaudo tecnico-amministrativo degli impianti elettrici, meccanici e speciali del Museo Leonardo da Vinci di Milano.",
  },
  {
    year: "2010 - 2013",
    title: "Ospedale San Carlo Borromeo",
    description:
      "Progettazione, Direzione Lavori e Coordinamento della Sicurezza per il nuovo Servizio di Endoscopia e altri reparti ospedalieri.",
  },
  {
    year: "2012 - 2013",
    title: "ALER Milano",
    description:
      "Direzione Lavori per l'adeguamento degli impianti elettrici del quartiere Lope de Vega.",
  },
  {
    year: "2017",
    title: "Comune di Bresso",
    description:
      "Progettazione definitiva ed esecutiva degli impianti idrico-sanitari, elettrici, di riscaldamento e raffrescamento dell'area EX RAM ISO Rivolta.",
  },
  {
    year: "2019",
    title: "Metropolitana Milanese",
    description:
      "Progettazione dell'impianto di spegnimento automatico a gas IG-01 per gli archivi anagrafici di Via Larga.",
  },
  {
    year: "2021",
    title: "Sistema di Controllo Targhe",
    description:
      "Progettazione definitiva, Direzione Lavori e realizzazione di sistemi di controllo targhe con infrastrutture in fibra ottica.",
  },
  {
    year: "2023",
    title: "CTO Torino",
    description:
      "Coordinamento della Sicurezza in fase di progettazione ed esecuzione presso i presidi ospedalieri CTO di Torino.",
  },
  {
    year: "2024",
    title: "MM Metropolitana Milanese",
    description:
      "Assessment tecnico per la messa a norma del patrimonio ERP del Comune di Milano in materia di prevenzione incendi.",
  },
  {
    year: "2025",
    title: "Comune di Peschiera Borromeo",
    description:
      "Direzione Lavori e Coordinamento della Sicurezza per la manutenzione straordinaria degli impianti elettrici degli edifici scolastici comunali.",
  },
];

export default function Curriculum() {
  return (
    <section className="curriculum">
      <div className="curriculum-header">

    <span>ESPERIENZA PROFESSIONALE</span>

    <h1>Curriculum Professionale</h1>

    <p>
        Oltre 25 anni di esperienza nella progettazione,
        direzione lavori, collaudi tecnico-amministrativi,
        prevenzione incendi e coordinamento della sicurezza
        per opere civili, industriali e infrastrutturali.
    </p>

</div>

      <div className="timeline">
        {timeline.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="timeline-content">
              <span className="year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}