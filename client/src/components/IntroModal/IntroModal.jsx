import React, { useEffect, useState } from "react";
import "./IntroModal.css";
import RequestQuote from "../RequestQuote/RequestQuote";

export default function IntroModal() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", servizio: "", messaggio: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [openFullForm, setOpenFullForm] = useState(false);

  // show modal on every page load (including refresh)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    // fire analytics: modal opened
    const apiKey = import.meta.env.VITE_API_KEY || null;
    const headers = { 'Content-Type': 'application/json' };
    if (apiKey) headers['x-api-key'] = apiKey;
    fetch('/api/analytics', { method: 'POST', headers, body: JSON.stringify({ event: 'open', source: 'intro_modal' }) }).catch(()=>{});
    return () => clearTimeout(t);
  }, []);

  function close() {
    setVisible(false);
  }

  function handleOverlayClick(e) {
    if (e.target.classList.contains("intro-overlay")) close();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess("");
    try {
      const data = new FormData();
      data.append("nome", form.nome || "Visitatore");
      data.append("email", form.email || "");
      data.append("servizio", form.servizio || "");
      data.append("messaggio", form.messaggio || "Richiesta dal modal introduttivo");

      const res = await fetch("/api/quote", { method: "POST", body: data });
      if (!res.ok) throw new Error("Invio fallito");
      setSuccess("Grazie, la tua richiesta è stata inviata.");
      // analytics: submission
      try {
        const apiKey = import.meta.env.VITE_API_KEY || null;
        const headers = { 'Content-Type': 'application/json' };
        if (apiKey) headers['x-api-key'] = apiKey;
        fetch('/api/analytics', { method: 'POST', headers, body: JSON.stringify({ event: 'submit', source: 'intro_modal' }) }).catch(()=>{});
      } catch (e) {}
      setTimeout(() => close(), 1200);
    } catch (err) {
      console.error(err);
      setSuccess("Errore nell'invio. Riprova più tardi.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!visible) return null;

  return (
    <div className="intro-overlay" onClick={handleOverlayClick}>
      <div className="intro-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="intro-close" onClick={() => close()} aria-label="Chiudi">×</button>
        <h3>Hai bisogno di un servizio di ingegneria?</h3>
        <p>Dicci brevemente cosa ti serve o richiedi un preventivo veloce — ti ricontatteremo.</p>

        <form className="intro-form" onSubmit={handleSubmit}>
          <div className="intro-row">
            <input name="nome" placeholder="Nome e cognome" value={form.nome} onChange={handleChange} />
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          </div>

          <select name="servizio" value={form.servizio} onChange={handleChange}>
            <option value="">Servizio richiesto (opzionale)</option>
            <option value="diagnosi">Diagnosi energetica</option>
            <option value="antincendio">Reti antincendio</option>
            <option value="impianti">Impianti elettrici/MEP</option>
          </select>

          <textarea name="messaggio" placeholder="Breve descrizione (opzionale)" value={form.messaggio} onChange={handleChange} rows="3" />

          <div className="intro-actions">
            <button type="button" className="intro-skip" onClick={() => close()}>Non ora</button>
            <button type="button" className="intro-send" onClick={() => { setOpenFullForm(true); close(); }}>Apri modulo completo</button>
            <button type="submit" className="intro-send" disabled={submitting}>{submitting ? 'Invio...' : 'Invia richiesta'}</button>
          </div>

          {success && <div className="intro-success">{success}</div>}
        </form>
        {openFullForm && <RequestQuote onClose={() => setOpenFullForm(false)} />}
      </div>
    </div>
  );
}
