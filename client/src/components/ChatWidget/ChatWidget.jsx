import React, { useEffect, useState, useRef } from 'react';
import { MENU, findButtonAcrossMenus } from './menuHelpers';
import './ChatWidget.css';

// Helper (pure) can stay outside component
function randomDelay() { return 300 + Math.floor(Math.random() * 201); }

export default function ChatWidget() {
  // React states
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => [{ from: 'bot', content: MENU.main.reply, ts: Date.now() }]);
  const [text, setText] = useState('');
  const [currentMenu, setCurrentMenu] = useState('main');
  const ref = useRef();

  useEffect(() => { ref.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  // helper to push messages
  function pushMessage(from, content) { setMessages(m => [...m, { from, content, ts: Date.now() }]); }

  // send bot message with typing delay and server logging
  async function sendBotMessage(htmlContent) {
    const delay = randomDelay();
    await new Promise(r => setTimeout(r, delay));
    pushMessage('bot', htmlContent);
    try {
      const headers = { 'Content-Type': 'application/json' };
      if (import.meta.env.VITE_API_KEY) headers['x-api-key'] = import.meta.env.VITE_API_KEY;
      fetch('/api/chat/log', { method: 'POST', headers, body: JSON.stringify({ from: 'bot', message: htmlContent, page: window.location.pathname }) }).catch(()=>{});
    } catch {}
  }

  // show a menu: set current and send reply
  async function showMenu(menuName) {
    const menu = MENU[menuName];
    if (!menu) return sendBotMessage("I couldn't find an answer for that.<br/><br/>Please choose one of the options below.");
    setCurrentMenu(menuName);
    await sendBotMessage(menu.reply);
  }

  function navigateTo(route) { setTimeout(() => { window.location.href = route; }, 400); }

  // handle quick button actions
  function handleQuickAction(btnLabel) {
    const menu = MENU[currentMenu] || MENU.main;
    const btnObj = menu.buttons.find(b => b.label === btnLabel);
    if (!btnObj) {
      sendBotMessage("I couldn't find an answer for that.<br/><br/>Please choose one of the options below.");
      setCurrentMenu('main');
      return;
    }

    pushMessage('user', btnObj.label);
    try { const headers = { 'Content-Type': 'application/json' }; if (import.meta.env.VITE_API_KEY) headers['x-api-key'] = import.meta.env.VITE_API_KEY; fetch('/api/chat/log', { method: 'POST', headers, body: JSON.stringify({ from: 'user', message: btnObj.label, page: window.location.pathname }) }).catch(()=>{}); } catch {}

    const { action } = btnObj;
    if (action.type === 'menu') {
      showMenu(action.target);
    } else if (action.type === 'route') {
      sendBotMessage('Opening the page...');
      navigateTo(action.target);
    } else if (action.type === 'external') {
      sendBotMessage('Opening...');
      window.open(action.target, '_blank');
    }
  }

  // handle typed messages
  function handleSend(evt) {
    evt?.preventDefault();
    const t = text.trim(); if (!t) return;
    pushMessage('user', t); setText('');
    try { const headers = { 'Content-Type': 'application/json' }; if (import.meta.env.VITE_API_KEY) headers['x-api-key'] = import.meta.env.VITE_API_KEY; fetch('/api/chat/log', { method: 'POST', headers, body: JSON.stringify({ from: 'user', message: t, page: window.location.pathname }) }).catch(()=>{}); } catch {}

    const matchedBtn = findButtonAcrossMenus(MENU, t);
    if (matchedBtn) { handleQuickAction(matchedBtn.label); return; }

    sendBotMessage("I couldn't find an answer for that.<br/><br/>Please choose one of the options below.");
    setCurrentMenu('main');
  }

  return (
    <div className={`chat-widget ${open ? 'open' : ''}`}>
{!open && (
    <div
        className="chat-toggle"
        onClick={() => setOpen(true)}
    >
        💬
    </div>
)}      
{open && (
        <div className="chat-panel">
          <div className="chat-header"><span>Assistente Nava Engineering</span>

            <button
                className="chat-close"
                onClick={() => setOpen(false)}
            >
                ✕
            </button></div>
          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}><div className="msg-text" dangerouslySetInnerHTML={{__html: m.content}} /></div>
            ))}
            <div ref={ref} />
          </div>
          <form className="chat-input" onSubmit={handleSend}>
            <input value={text} onChange={e=>setText(e.target.value)} placeholder="Scrivi un messaggio..." />
            <button type="submit">Invia</button>
          </form>
          <div className="chat-quick">
            {(MENU[currentMenu] || MENU.main).buttons.map((b, idx) => (
              <button key={b.label + idx} onClick={()=>handleQuickAction(b.label)} className="quick">{b.label}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
