// MENU and simple pure helpers for ChatWidget
export const MENU = {
  main: {
    title: 'Main Menu',
    reply: "👋 Ciao! Sono <strong>NovAI</strong>, assistente virtuale di Nava Engineering.<br/><br/>Come posso aiutarti oggi?<br/><br/>Scegli una delle opzioni qui sotto.",
    buttons: [
      { label: '🏢 Engineering Services', action: { type: 'menu', target: 'engineering' } },
      { label: '📄 Request a Quotation', action: { type: 'menu', target: 'requestQuote' } },
      { label: '🏗 Portfolio', action: { type: 'menu', target: 'portfolio' } },
      { label: '👨‍💼 About Nava Engineering', action: { type: 'menu', target: 'about' } },
      { label: '📞 Contact Us', action: { type: 'menu', target: 'contact' } },
      { label: '📍 Office Location', action: { type: 'menu', target: 'location' } },
    ]
  },
  engineering: {
    title: 'Engineering Services',
    reply: `Nava Engineering offre:<br/><br/>• Ingegneria Elettrica<br/>• Ingegneria Meccanica<br/>• Sistemi di Protezione Antincendio<br/>• Progettazione HVAC<br/>• Consulenza per l'Efficienza Energetica<br/>• Soluzioni per Energie Rinnovabili<br/>• Certificazione delle Prestazioni Energetiche<br/>• Ispezioni Tecniche<br/>• Direzione Lavori`,
    buttons: [
      { label: 'Electrical', action: { type: 'menu', target: 'electrical' } },
      { label: 'Mechanical', action: { type: 'menu', target: 'mechanical' } },
      { label: 'Fire Protection', action: { type: 'menu', target: 'fire' } },
      { label: 'Back to Menu', action: { type: 'menu', target: 'main' } },
    ]
  },
  electrical: {
    title: 'Electrical',
    reply: `Forniamo:<br/><br/>• Progettazione Impianti Elettrici<br/>• Distribuzione di Energia<br/>• Progettazione Illuminotecnica<br/>• Sistemi di Emergenza<br/>• Sistemi a Bassa Tensione<br/>• Collaudo e Messa in Servizio`,
    buttons: [
      { label: 'Request Quote', action: { type: 'menu', target: 'requestQuote' } },
      { label: 'Back', action: { type: 'menu', target: 'main' } },
    ]
  },
  mechanical: {
    title: 'Mechanical',
    reply: `I nostri servizi di ingegneria meccanica includono:<br/><br/>• HVAC<br/>• Idraulica<br/>• Sistemi a Pompa di Calore<br/>• Ventilazione<br/>• Impianti Termici`,
    buttons: [
      { label: 'Request Quote', action: { type: 'menu', target: 'requestQuote' } },
      { label: 'Back', action: { type: 'menu', target: 'main' } },
    ]
  },
  fire: {
    title: 'Fire Protection',
    reply: `I servizi di ingegneria antincendio includono:<br/><br/>• Progettazione di Prevenzione Incendi<br/>• Certificazioni di Sicurezza Antincendio<br/>• Impianti a Sprinkler<br/>• Estrazione Fumi<br/>• Valutazione del Rischio d'Incendio`,
    buttons: [
      { label: 'Request Quote', action: { type: 'menu', target: 'requestQuote' } },
      { label: 'Back', action: { type: 'menu', target: 'main' } },
    ]
  },
  requestQuote: {
    title: 'Request a Quotation',
    reply: `Saremo lieti di preparare un preventivo.<br/><br/>Per favore fornisci:<br/>• Tipo di progetto<br/>• Superficie dell'edificio<br/>• Città<br/>• Servizio richiesto<br/><br/>Oppure clicca una delle opzioni sotto.`,
    buttons: [
      { label: 'Open Contact Form', action: { type: 'route', target: '/contact' } },
      { label: 'Talk to Expert', action: { type: 'external', target: 'https://wa.me/?text=Vorrei+parlare+con+un+esperto' } },
      { label: 'Back to Menu', action: { type: 'menu', target: 'main' } },
    ]
  },
  portfolio: {
    title: 'Portfolio',
    reply: `Abbiamo realizzato progetti in:<br/><br/>• Edifici Commerciali<br/>• Residenze<br/>• Ospedali<br/>• Centri Sportivi<br/>• Data Center<br/>• Edifici Pubblici`,
    buttons: [
      { label: 'View Portfolio', action: { type: 'route', target: '/portfolio' } },
      { label: 'Back', action: { type: 'menu', target: 'main' } },
    ]
  },
  about: {
    title: 'About Nava Engineering',
    reply: `Nava Engineering è una società di ingegneria con sede a Milano, Italia.<br/><br/>Abbiamo oltre 25 anni di esperienza in:<br/>• Ingegneria Elettrica<br/>• Ingegneria Meccanica<br/>• Prevenzione Incendi<br/>• Consulenza Energetica`,
    buttons: [
      { label: 'Open About Page', action: { type: 'route', target: '/about' } },
      { label: 'Back', action: { type: 'menu', target: 'main' } },
    ]
  },
  contact: {
    title: 'Contact',
    reply: `Puoi contattarci tramite:<br/><br/>Email<br/>Telefono<br/><br/>Via Matteo Civitali 42<br/>20148 Milano (MI)`,
    buttons: [
      { label: 'Open Contact Page', action: { type: 'route', target: '/contact' } },
      { label: 'WhatsApp', action: { type: 'external', target: 'https://wa.me/39' } },
      { label: 'Back', action: { type: 'menu', target: 'main' } },
    ]
  },
  location: {
    title: 'Office Location',
    reply: `Nava Engineering S.R.L.<br/><br/>Via Matteo Civitali 42<br/><br/>20148 Milano`,
    buttons: [
      { label: 'Open Google Maps', action: { type: 'external', target: 'https://maps.google.com/?q=Via+Matteo+Civitali+42+Milano' } },
      { label: 'Back', action: { type: 'menu', target: 'main' } },
    ]
  }
};

export function findButtonInMenu(menuObj, label) {
  if (!menuObj || !menuObj.buttons) return null;
  return menuObj.buttons.find(b => b.label === label) || null;
}

// search across all menus for a button whose label matches the provided text (case-insensitive, includes)
export function findButtonAcrossMenus(menus, text) {
  if (!menus || !text) return null;
  const lower = text.toLowerCase();
  for (const key of Object.keys(menus)) {
    const m = menus[key];
    if (!m || !m.buttons) continue;
    for (const b of m.buttons) {
      if (b.label.toLowerCase().includes(lower) || lower.includes(b.label.toLowerCase())) return b;
    }
  }
  return null;
}
