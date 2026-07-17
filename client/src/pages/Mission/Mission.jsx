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

    <section className="mission-page">
      <div className="container">

      <div className="mission-hero">

        <div className="overlay">

          <h1>Our Mission</h1>

          <p>
            Sharing • Knowledge • Innovation • Environmental Responsibility
          </p>

        </div>

      </div>

      {/* Intro */}

      <div className="mission-intro">

        <span>WHO WE ARE</span>

        <h2>
          Building Sustainable Engineering Solutions
        </h2>

        <p>
          At Nava Engineering, every project begins with understanding the
          client's vision. Through collaboration, innovation and technical
          excellence, we deliver engineering solutions that are efficient,
          sustainable and future-ready.
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

            <h3>Sharing</h3>

            <p>
              Every engineering solution is developed together with the
              client. Collaboration ensures better design decisions,
              optimized costs and successful project delivery.
            </p>

          </div>

        </div>

        <div className="mission-card">

          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900"
      </section>
      </div>
          />

          <div className="card-content">

            <FaLightbulb className="card-icon" />

            <h3>Knowledge & Innovation</h3>

            <p>
              Years of professional experience combined with modern software
              and advanced engineering tools allow us to create innovative
              and reliable solutions.
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

            <h3>Environmental Ethics</h3>

            <p>
              Sustainability and energy efficiency guide every engineering
              decision, helping reduce environmental impact while improving
              long-term building performance.
            </p>

          </div>

        </div>

      </div>

      {/* Main Content */}

      <section className="mission-content">

        <div className="text">

          <h2>Engineering with Purpose</h2>

          <p>
            At the heart of our mission is the continuous sharing of
            engineering choices with our clients. Every solution is designed
            not only to meet technical requirements but also to optimize
            investment, maintenance and operational efficiency.
          </p>

          <p>
            Nava Engineering combines extensive know-how in electrical,
            mechanical and fire protection engineering with innovative
            technologies to create integrated engineering solutions for
            complex buildings.
          </p>

          <ul>

            <li><FaCheckCircle /> Client-focused engineering approach</li>

            <li><FaCheckCircle /> Sustainable design principles</li>

            <li><FaCheckCircle /> Advanced engineering software</li>

            <li><FaCheckCircle /> Fire safety & energy optimization</li>

            <li><FaCheckCircle /> Innovative integrated solutions</li>

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

          <span>Years Experience</span>

        </div>

        <div>

          <h2>500+</h2>

          <span>Projects Completed</span>

        </div>

        <div>

          <h2>100%</h2>

          <span>Client Commitment</span>

        </div>

        <div>

          <h2>24/7</h2>

          <span>Professional Support</span>

        </div>

      </section>

    </section>
  );
}