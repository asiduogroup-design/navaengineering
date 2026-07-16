import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo (2).png";
import RequestQuote from "../RequestQuote/RequestQuote";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    function onScroll() {
      const current = window.pageYOffset || document.documentElement.scrollTop;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (current > lastScroll.current && current > 50) {
            // scrolling down
            setHidden(true);
          } else {
            // scrolling up
            setHidden(false);
          }
          lastScroll.current = current <= 0 ? 0 : current;
          ticking.current = false;
        });
        ticking.current = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Referenze", to: "/referenze" },
    { label: "Mission", to: "/mission" },
    { label: "Servizi di ingegneria", to: "/servizi" },
    { label: "Curriculum", to: "/curriculum" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Dotazioni", to: "/dotazioni" },
    { label: "Contatti", to: "/contatti" },
  ];

  return (
    <header className={hidden && !isOpen ? 'hidden' : ''}>
      <div className="navbar-container">

        {/* Logo */}
          <Link to="/" className="logo">
          <div className="logo-icon">
            <img src={logo} alt="Nava Engineering" className="logo-img" />
          </div>

          {/* Removed site name and tagline - logo image only */}
          </Link>

        {/* Desktop Navigation */}
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Quote Button */}
        <button className="quote-btn" onClick={() => setShowQuote(true)}>
          Richiedi preventivo
        </button>

        {showQuote && <RequestQuote onClose={() => setShowQuote(false)} />}

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>
    </header>
  );
}