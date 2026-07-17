import React from "react";
import "./Servizi.css";

const services = [
  {
    title: "Energy Engineering",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200",
    description:
      "Energy audits, energy diagnosis, energy performance certification and sustainable engineering solutions for residential, commercial and industrial buildings.",
    points: [
      "Energy Diagnosis",
      "Energy Certification",
      "Energy Audits",
      "Building Performance Analysis",
    ],
  },
  {
    title: "HVAC & Mechanical Engineering",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200",
    description:
      "Design of heating, cooling, ventilation, heat pump and domestic hot water systems with maximum efficiency.",
    points: [
      "Heat Pumps",
      "Air Conditioning",
      "Ventilation Systems",
      "Heating Systems",
    ],
  },
  {
    title: "Fire Protection Engineering",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
    description:
      "Complete fire prevention engineering, sprinkler systems, fire safety studies and SCIA documentation.",
    points: [
      "Fire Prevention",
      "Sprinkler Systems",
      "Smoke Extraction",
      "SCIA Fire Safety",
    ],
  },
  {
    title: "Electrical Engineering",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    description:
      "Electrical power distribution, lighting systems, special systems and intelligent building solutions.",
    points: [
      "Electrical Design",
      "Lighting Design",
      "Special Systems",
      "Power Distribution",
    ],
  },
  {
    title: "Renewable Energy",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200",
    description:
      "Photovoltaic systems, battery storage, renewable energy consultancy and sustainable engineering.",
    points: [
      "Solar Panels",
      "Battery Storage",
      "Renewable Energy",
      "Green Buildings",
    ],
  },
  {
    title: "Testing & Commissioning",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200",
    description:
      "Technical inspections, acceptance tests, commissioning and engineering verification services.",
    points: [
      "Technical Testing",
      "Commissioning",
      "Inspection",
      "Quality Assurance",
    ],
  },
];

export default function Servizi() {
  return (
    <section className="services-page">

      <div className="container">

      <div className="services-header">

        <span>ENGINEERING EXPERTISE</span>

        <h1>Engineering Services</h1>

        <p>
          Nava Engineering delivers innovative engineering solutions
          across electrical, mechanical, energy and fire protection
          disciplines, ensuring quality, safety and sustainability.
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

      </div>

    </section>
  );
}