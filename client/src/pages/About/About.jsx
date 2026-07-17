import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-page">

      <div className="about-container container">

        <span className="about-tag">
          CHI SIAMO
        </span>

        <h1>La nostra storia</h1>

        <p>
          Docente di ruolo di ITIS ed assistente del prof. Brenna al
          Politecnico di Milano, in qualità di esperto nel settore della
          progettazione e della sicurezza degli impianti elettrici e
          ingegnere libero professionista dal 1998...
        </p>

        <p>
          La Nava Engineering Srl è una società di ingegneria che prosegue
          ed evolve l'expertise dello Studio Tecnico dell'Ing. Nava.
        </p>

        <p>
          L'Ing. Nava Demetrio inizia la propria carriera professionale nel
          1996 come segretario della Commissione di Studio Impianti
          Elettrici del Collegio degli Ingegneri ed Architetti di Milano.
        </p>

        <p>
          Nel 1998 consegue l'attestazione di Coordinatore della Sicurezza.
        </p>

        <p>
          Nel 2001 diventa membro del Sottocomitato CEI 64-C.
        </p>

        <p>
          Dal 2001 opera anche nel settore degli appalti pubblici come
          collaudatore della Regione Lombardia.
        </p>

        <div className="about-video">

  <h2>Video di presentazione della Nava Engineering:</h2>

  <div className="video-wrapper">

    <iframe
      src="https://www.youtube.com/embed/Sf6P948q7io"
      title="Nava Engineering Presentation"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>

  </div>

</div>

      </div>

    </section>
  );
}