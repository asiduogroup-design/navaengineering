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
  {
    icon: <FaDesktop />,
    text: "Due workstation DELL Precision 5820 - Intel Xeon W-2223, 64 GB RAM, Windows 11, Nvidia Quadro K5000."
  },
  {
    icon: <FaDesktop />,
    text: "Monitor professionali BenQ PD2500Q da 25” QHD per progettazione CAD/CAM."
  },
  {
    icon: <FaLaptop />,
    text: "Notebook Dell Latitude E6520."
  },
  {
    icon: <FaLaptop />,
    text: "Notebook ASUS F556U."
  },
  {
    icon: <FaNetworkWired />,
    text: "Rete LAN dedicata per il collegamento di tutte le postazioni di lavoro."
  },
  {
    icon: <FaPrint />,
    text: "Stampante laser a colori Epson Aculaser C1100."
  },
  {
    icon: <FaPrint />,
    text: "Stampante multifunzione HP OfficeJet Pro 8620."
  },
  {
    icon: <FaPrint />,
    text: "Stampante laser Canon i-SENSYS MF6180dw."
  },
  {
    icon: <FaPrint />,
    text: "Plotter HP DesignJet 500 formato A0."
  },
  {
    icon: <FaTools />,
    text: "Taglierina professionale formato A0."
  },
  {
    icon: <FaDesktop />,
    text: "Scanner formato A4."
  },
  {
    icon: <FaServer />,
    text: "Sistema NAS My Cloud EX2 Ultra con backup RAID e unità di backup multiple da 4 TB."
  }
];

const software = [
  { icon: <FaMicrochip />, text: "Microsoft Office 365" },
  { icon: <FaDesktop />, text: "AutoCAD 2024" },
  { icon: <FaDesktop />, text: "Revit 2024" },
  { icon: <FaCogs />, text: "Blumatica Energy" },
  { icon: <FaCogs />, text: "Impiantus Fumo" },
  { icon: <FaCogs />, text: "Solarius" },
  { icon: <FaDesktop />, text: "Dialux Evo" },
  { icon: <FaCogs />, text: "ZEUS Plus" },
  { icon: <FaMicrochip />, text: "General Cavi CP 2022" },
  { icon: <FaDesktop />, text: "SW-Air" }
];

const instruments = [
  { icon: <FaTools />, text: "Tester multifunzione KYORITSU KEW 6010" },
  { icon: <FaTools />, text: "Misuratore di terra KYORITSU ELD 7040" },
  { icon: <FaTools />, text: "Misuratore di portata SACOP UNI MP7" },
  { icon: <FaMicrochip />, text: "Tester per impianti fotovoltaici Solarzig" },
  { icon: <FaTools />, text: "Luxmetro PCE-172" },
  { icon: <FaTools />, text: "Rilevatore di armature DR3000 PK" },
  { icon: <FaTools />, text: "Sclerometro DIEMME N1" }
];

export default function Dotazioni() {
  return (
    <section className="equipment-page">


      <div className="page-title">

        <span>Risorse & Dotazioni</span>

        <h1>DOTAZIONI</h1>

        <p>
          Nava Engineering è dotata di hardware avanzato,
          software professionale per l'ingegneria e strumenti di misura
          certificati per garantire servizi di ingegneria di alta qualità.
        </p>

      </div>

      {/* Hardware */}

      <section className="equipment-section">

        <h2>
          <FaDesktop /> Hardware & Dotazioni d'Ufficio
        </h2>

        <div className="equipment-grid">

{hardware.map((item, index) => (

<div className="equipment-card" key={index}>

    <div className="card-icon">
        {item.icon}
    </div>

    <p>{item.text}</p>

</div>

))}
        </div>

      </section>

      {/* Software */}

      <section className="equipment-section">

        <h2>
          <FaCogs /> Software Utilizzato
        </h2>

        <div className="equipment-grid">

          {software.map((item,index)=>(
<div className="equipment-card" key={index}>
    <div className="card-icon">{item.icon}</div>
    <p>{item.text}</p>
</div>
))}
        </div>

      </section>

      {/* Instruments */}

      <section className="equipment-section">

        <h2>
          <FaTools /> Strumenti di Misura e Collaudo
        </h2>

        <div className="equipment-grid">

          {instruments.map((item, index) => (

            <div className="equipment-card" key={index}>

              <div className="card-icon">
                {item.icon}
              </div>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </section>


    </section>

  );
}