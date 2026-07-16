import React from "react";
import "./Home.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Link } from "react-router-dom";
import heroVideo from "../../assets/nava engineering.mp4";
import ChatWidget from "../../components/ChatWidget/ChatWidget";

export default function Home() {
  return (
    <>
      {/* ================= Hero Section ================= */}

    <section className="hero">

    <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
    >
        <source src={heroVideo} type="video/mp4" />
    </video>

    <div className="hero-overlay"></div>

   <div className="hero-content">

    <div className="hero-title">

       

    </div>

</div>

  

</section>

{/* Buttons below hero video */}
<div className="hero-buttons-below" style={{ textAlign: 'center', padding: '24px 0' }}>
    <Link to="/about">
        <button className="primary-btn">Chi siamo</button>
    </Link>
    <Link to="/diagnosi">
        <button className="primary-btn servizi-btn">Servizi</button>
    </Link>
</div>


    {/* ================= SETTORI ================= */}

<section className="section-block">

    <div className="section-image">

        <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200"
            alt="Engineering"
        />

    </div>

    <div className="section-content">

        <span>OUR EXPERTISE</span>

        <h2>Settori di Intervento</h2>

        <p>
            Nava Engineering provides complete engineering consultancy
            from feasibility studies through executive design,
            construction supervision and final testing.
        </p>

        <ul>

            <li>✔ Studi di fattibilità</li>

            <li>✔ Progettazione preliminare</li>

            <li>✔ Progettazione definitiva</li>

            <li>✔ Direzione lavori</li>

            <li>✔ Capitolati d'appalto</li>

            <li>✔ Collaudi tecnici</li>

        </ul>

    </div>

</section>
{/* ================= CLIENTELA ================= */}

<section className="section-block reverse">

    <div className="section-content">

        <span>OUR CLIENTS</span>

        <h2>Clientela di riferimento</h2>

        <p>
            Our engineering services are trusted by public and private
            organizations across numerous industries.
        </p>

        <div className="client-grid">

            <div>🏢 Studi di architettura</div>

            <div>🏗 Imprese edili</div>

            <div>🏛 Enti pubblici</div>

            <div>🏥 Ospedali</div>

            <div>⚡ Centrali termiche</div>

            <div>🏢 Data Center</div>

            <div>🚗 Autorimesse</div>

            <div>🏟 Centri sportivi</div>

        </div>

    </div>

    <div className="section-image">

        <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200"
            alt="Clients"
        />

    </div>

</section>
{/* ================= WHY CHOOSE US ================= */}

<section className="why-us">

    <h2>Why Choose Nava Engineering</h2>

    <p>
        Engineering excellence built on experience, innovation and trust.
    </p>

    <div className="why-grid">

        <div className="why-card">

            <h1>25+</h1>

            <span>Years Experience</span>

        </div>

        <div className="why-card">

            <h1>500+</h1>

            <span>Projects Completed</span>

        </div>

        <div className="why-card">

            <h1>100%</h1>

            <span>Client Satisfaction</span>

        </div>

        <div className="why-card">

            <h1>24/7</h1>

            <span>Technical Support</span>

        </div>

    </div>

</section>

      {/* ================= Contact Form Section ================= */}


    <ContactForm />

      <ChatWidget />

    </>
  );
}