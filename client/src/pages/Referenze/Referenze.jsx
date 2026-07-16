import React from "react";
import {
  FaAward,
  FaUserShield,
  FaUniversity,
  FaClipboardCheck,
  FaCertificate,
  FaBolt,
  FaFire,
  FaGavel
} from "react-icons/fa";

import "./Referenze.css";

const qualifications = [
  {
    icon: <FaCertificate />,
    title: "Regional Testing Register",
    year: "2001",
    description:
      "Registered in the Lombardy Regional Register of Technical Testers for technological and electrical systems.",
  },
  {
    icon: <FaUserShield />,
    title: "Safety Coordinator",
    year: "1998",
    description:
      "Qualified Safety Coordinator for Design & Construction in compliance with Legislative Decree 81/08.",
  },
  {
    icon: <FaFire />,
    title: "Fire Prevention Specialist",
    year: "2001",
    description:
      "Authorized professional for Fire Prevention according to Italian Fire Safety Regulations.",
  },
  {
    icon: <FaGavel />,
    title: "Court Technical Consultant",
    year: "2002",
    description:
      "Registered Technical Consultant for the Court of Milan in Electrical Engineering.",
  },
  {
    icon: <FaAward />,
    title: "Energy Certifier (CENED)",
    year: "2016",
    description:
      "Registered Energy Performance Certification professional in Lombardy.",
  },
  {
    icon: <FaBolt />,
    title: "Certified Energy Manager (EGE)",
    year: "2023",
    description:
      "Accredia Certified Expert in Energy Management (Civil Sector).",
  }
];

const memberships = [
  "Member of CEI Technical Committee 64.",
  "Member of CEI Committee 205 - Building Bus Systems.",
  "Member of the Milan Engineers Association.",
  "Member of the Milan Chamber of Commerce Technical Commission.",
  "Technical Consultant for Public Authorities.",
  "Electrical Engineering Commission Member.",
];

const timeline = [
  {
    year: "1997",
    title: "Registered Engineer"
  },
  {
    year: "1998",
    title: "Safety Coordinator Qualification"
  },
  {
    year: "2000",
    title: "First Place - Engineering Competition"
  },
  {
    year: "2001",
    title: "Fire Prevention Professional"
  },
  {
    year: "2002",
    title: "Court Technical Consultant"
  },
  {
    year: "2016",
    title: "Energy Certification"
  },
  {
    year: "2023",
    title: "Certified EGE"
  }
];

export default function Referenze() {
  return (
    <section className="referenze">

      <div className="hero">

        <div className="hero-content">

          <span>Professional Credentials</span>

          <h1>Referenze</h1>

          <p>
            More than 25 years of professional registrations,
            engineering certifications and technical memberships.
          </p>

        </div>

      </div>

      {/* Qualifications */}

      <section className="section">

        <h2>Professional Certifications</h2>

        <div className="cards">

          {qualifications.map((item, index) => (

            <div className="card" key={index}>

              <div className="icon">
                {item.icon}
              </div>

              <span className="year">
                {item.year}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </section>

      {/* Memberships */}

      <section className="section">

        <div className="membership">

          <div className="membership-image">

            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900"
              alt=""
            />

          </div>

          <div className="membership-content">

            <h2>Professional Memberships</h2>

            <ul>

              {memberships.map((item, index) => (

                <li key={index}>
                  ✔ {item}
                </li>

              ))}

            </ul>

          </div>

        </div>

      </section>

      {/* Timeline */}

   <section className="section">

    <h2>Professional Journey</h2>

    <div className="journey">

        {timeline.map((item, index) => (

            <div
                className={`journey-item ${index % 2 === 0 ? "left" : "right"}`}
                key={index}
            >

                <div className="journey-card">

                    <span>{item.year}</span>

                    <h3>{item.title}</h3>

                </div>

            </div>

        ))}

    </div>

</section>

    </section>
  );
}