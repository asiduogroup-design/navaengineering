import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import IntroModal from "./components/IntroModal/IntroModal";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Privacy from "./pages/Privacy/Privacy";
import Termini from "./pages/Termini/Termini";
import Contatti from "./pages/Contatti/Contatti";
import Opportunita from "./pages/Opportunita/Opportunita";
import Referenze from "./pages/Referenze/Referenze";
import Mission from "./pages/Mission/Mission";
import Servizi from "./pages/Servizi/Servizi";
import Diagnosi from "./pages/Diagnosi/Diagnosi";
import Analytics from "./pages/Admin/Analytics";
import Dashboard from "./pages/Admin/Dashboard";
import ChatRules from "./pages/Admin/ChatRules";
import Curriculum from "./pages/Curriculum/Curriculum";
import Portfolio from "./pages/Portfolio/Portfolio";
import Dotazioni from "./pages/Dotazioni/Dotazioni";
import WhatsAppWidget from "./components/WhatsAppWidget/WhatsAppWidget";

export default function App() {
  return (
    <>
      <Navbar />
      <IntroModal />
<main>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/termini" element={<Termini />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/opportunita" element={<Opportunita />} />
        <Route path="/referenze" element={<Referenze />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/servizi" element={<Servizi />} />
        <Route path="/diagnosi" element={<Diagnosi />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/chat-rules" element={<ChatRules />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/dotazioni" element={<Dotazioni />} />
      </Routes>
</main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}