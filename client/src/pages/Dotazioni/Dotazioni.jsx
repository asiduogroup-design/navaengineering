import React from "react";
import {
  FaDesktop,
  FaLaptop,
  FaPrint,
  FaServer,
  FaNetworkWired,
  FaCogs,
  FaTools,
  FaMicrochip,
} from "react-icons/fa";

import "./Dotazioni.css";

const hardware = [
  "Two DELL Precision 5820 Workstations - Intel Xeon W-2223, 64GB RAM, Windows 11, Nvidia Quadro K5000.",
  "Professional BenQ PD2500Q 25” QHD CAD/CAM Monitors.",
  "Dell Latitude E6520 Laptop.",
  "ASUS F556U Laptop.",
  "LAN Network connecting all workstations.",
  "Epson Aculaser C1100 Color Laser Printer.",
  "HP OfficeJet Pro 8620 Multifunction Printer.",
  "Canon i-SENSYS MF6180dw Laser Printer.",
  "HP DesignJet 500 A0 Plotter.",
  "A0 Guillotine Paper Cutter.",
  "A4 Scanner.",
  "NAS My Cloud EX2 Ultra with RAID Backup and multiple 4TB backup drives."
];

const software = [
  "Microsoft Office 365",
  "AutoCAD 2024",
  "Revit 2024",
  "Blumatica Energy",
  "Impiantus Fumo",
  "Solarius",
  "Dialux Evo",
  "ZEUS Plus",
  "General Cavi CP 2022",
  "SW-Air"
];

const instruments = [
  "KYORITSU KEW 6010 Multifunction Tester",
  "KYORITSU ELD 7040 Earth Tester",
  "SACOP UNI MP7 Water Flow Meter",
  "Solarzig Photovoltaic Tester",
  "PCE-172 Lux Meter",
  "DR3000 PK Reinforcement Detector",
  "DIEMME N1 Concrete Rebound Hammer"
];

export default function Dotazioni() {
  return (
    <section className="equipment-page">

      <div className="container">

      <div className="page-title">

        <span>Resources & Equipment</span>

        <h1>DOTAZIONI</h1>

        <p>
          Nava Engineering is equipped with advanced hardware,
          professional engineering software and certified measuring
          instruments to ensure high-quality engineering services.
        </p>

      </div>

      {/* Hardware */}

      <section className="equipment-section">

        <h2>
          <FaDesktop /> Hardware & Office Equipment
        </h2>

        <div className="equipment-grid">

          {hardware.map((item, index) => (

            <div className="equipment-card" key={index}>

              <FaLaptop className="card-icon" />

              <p>{item}</p>

            </div>

          ))}

        </div>

      </section>

      {/* Software */}

      <section className="equipment-section">

        <h2>
          <FaCogs /> Software Used
        </h2>

        <div className="equipment-grid">

          {software.map((item, index) => (

            <div className="equipment-card" key={index}>

              <FaMicrochip className="card-icon" />

              <p>{item}</p>

            </div>

          ))}

        </div>

      </section>

      {/* Instruments */}

      <section className="equipment-section">

        <h2>
          <FaTools /> Testing & Measuring Instruments
        </h2>

        <div className="equipment-grid">

          {instruments.map((item, index) => (

            <div className="equipment-card" key={index}>

              <FaTools className="card-icon" />

              <p>{item}</p>

            </div>

          ))}

        </div>

      </section>

      </div>

    </section>

  );
}