import React from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "New Provincial Headquarters",
    location: "Monza, Italy",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
    category: "Institutional Building",
    description:
      "Complete design of electrical, mechanical, plumbing, HVAC and fire protection systems for the new Provincial Headquarters of Monza & Brianza.",
    services: [
      "Electrical Design",
      "Mechanical Systems",
      "HVAC",
      "Fire Protection"
    ]
  },

  {
    title: "San Carlo Hospital",
    location: "Milano, Italy",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200",
    category: "Healthcare",
    description:
      "Engineering design and supervision for hospital departments including operating rooms, endoscopy units and electrical upgrades.",
    services: [
      "Medical Electrical Systems",
      "HVAC",
      "Safety",
      "Project Management"
    ]
  },

  {
    title: "Industrial Electrical Installation",
    location: "Bresso, Italy",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
    category: "Industrial",
    description:
      "Design and execution of industrial electrical systems, power distribution and automation infrastructure.",
    services: [
      "Power Distribution",
      "Automation",
      "Industrial Lighting"
    ]
  },

  {
    title: "Educational Building",
    location: "University of Milan",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
    category: "Education",
    description:
      "Electrical and mechanical engineering design for university laboratories and educational facilities.",
    services: [
      "Laboratory Design",
      "Electrical",
      "Mechanical"
    ]
  },

  {
    title: "Residential Energy Upgrade",
    location: "Milano",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200",
    category: "Residential",
    description:
      "Energy efficiency improvement, HVAC redesign and electrical modernization for residential complexes.",
    services: [
      "Energy Efficiency",
      "Heat Pumps",
      "Electrical Upgrade"
    ]
  },

  {
    title: "Fire Protection Engineering",
    location: "Public Buildings",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
    category: "Fire Safety",
    description:
      "Fire prevention studies, sprinkler systems, smoke extraction and fire risk assessments for public facilities.",
    services: [
      "Fire Prevention",
      "Sprinklers",
      "Smoke Extraction"
    ]
  }
];

export default function Portfolio() {
  return (
    <section className="portfolio">

      <div className="container">

      <div className="portfolio-heading">

        <span>OUR PROJECTS</span>

        <h1>Engineering Portfolio</h1>

        <p>
          Discover some of the engineering projects successfully completed by
          Nava Engineering across Italy.
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