import React, { useState, useEffect } from "react";
import "./RequestQuote.css";

export default function RequestQuote({ onClose }) {
  const [form, setForm] = useState({
    nome: "",
    azienda: "",
    email: "",
    telefono: "",
    servizio: "",
    messaggio: "",
  });
  const [attachment, setAttachment] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    // analytics: modal opened
    const apiKey = import.meta.env.VITE_API_KEY || null;
    const headers = { 'Content-Type': 'application/json' };
    if (apiKey) headers['x-api-key'] = apiKey;
    fetch('/api/analytics', { method: 'POST', headers, body: JSON.stringify({ event: 'open', source: 'request_quote' }) }).catch(()=>{});
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: "" }));
  }

  function handleFile(e) {
    setAttachment(e.target.files[0] || null);
    setErrors((s) => ({ ...s, attachment: "" }));
  }

  function validate() {
    const err = {};
    if (!form.nome || form.nome.trim().length < 2) err.nome = "Inserisci nome e cognome";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Inserisci un'email valida";
    if (attachment && attachment.size > 10 * 1024 * 1024) err.attachment = "File troppo grande (max 10MB)";
    return err;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccessMessage("");
    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }

    setSubmitting(true);
    try {
      const data = new FormData();
      Object.keys(form).forEach((k) => data.append(k, form[k] || ""));
      if (attachment) data.append("attachment", attachment);

      const apiKey = import.meta.env.VITE_API_KEY || null;
      const fetchOpts = { method: 'POST', body: data };
      if (apiKey) fetchOpts.headers = { 'x-api-key': apiKey };
      const res = await fetch("/api/quote", fetchOpts);

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Server error");
      }

      setSuccessMessage("Richiesta inviata. Riceverai una risposta a breve.");
      setForm({ nome: "", azienda: "", email: "", telefono: "", servizio: "", messaggio: "" });
      setAttachment(null);
      // analytics: submission
      fetch('/api/analytics', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ event: 'submit', source: 'request_quote' }) }).catch(()=>{});
      if (onClose) setTimeout(onClose, 1400);
    } catch (err) {
      console.error(err);
      setErrors((s) => ({ ...s, submit: "Errore durante l'invio. Riprova più tardi." }));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="rq-overlay" role="dialog" aria-modal="true">
      <div className="rq-modal">
        <button className="rq-close" onClick={onClose} aria-label="Chiudi">×</button>

        <h2>Richiedi preventivo</h2>
        <p>Compila il modulo sottostante e ti ricontatteremo per fornirti un preventivo.</p>

        <form className="rq-form" onSubmit={handleSubmit}>
          <div className="rq-row">
            <label>Nome e Cognome
              <input name="nome" value={form.nome} onChange={handleChange} required />
              {errors.nome && <div className="rq-error">{errors.nome}</div>}
            </label>

            <label>Azienda
              <input name="azienda" value={form.azienda} onChange={handleChange} />
            </label>
          </div>

          <div className="rq-row">
            <label>Email
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
              {errors.email && <div className="rq-error">{errors.email}</div>}
            </label>

            <label>Telefono
              <input name="telefono" value={form.telefono} onChange={handleChange} />
            </label>
          </div>

          <label>Servizio richiesto
            <select name="servizio" value={form.servizio} onChange={handleChange}>
              <option value="">-- Seleziona --</option>
              <option value="diagnosi">Diagnosi energetica</option>
              <option value="antincendio">Reti antincendio</option>
              <option value="impianti">Impianti elettrici/MEP</option>
              <option value="altro">Altro</option>
            </select>
          </label>

          <label>Messaggio
            <textarea name="messaggio" value={form.messaggio} onChange={handleChange} rows="5" />
          </label>

          <label>Allega file (PDF/DOC/JPG, max 10MB)
            <input type="file" name="attachment" onChange={handleFile} />
            {errors.attachment && <div className="rq-error">{errors.attachment}</div>}
          </label>

          {errors.submit && <div className="rq-error">{errors.submit}</div>}
          {successMessage && <div className="rq-success">{successMessage}</div>}

          <div className="rq-actions">
            <button type="button" className="rq-cancel" onClick={onClose} disabled={submitting}>Annulla</button>
            <button type="submit" className="rq-submit" disabled={submitting}>{submitting ? 'Invio...' : 'Invia richiesta'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
