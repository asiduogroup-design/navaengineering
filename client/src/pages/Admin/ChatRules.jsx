import React, { useEffect, useState } from 'react';

export default function ChatRules() {
  const [rules, setRules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ pattern: '', reply: '', buttons: '', order: 0 });
  const [editingId, setEditingId] = useState(null);

  async function fetchRules() {
    setLoading(true);
    try {
      const res = await fetch('/api/chat/rules');
      const json = await res.json();
      setRules(json);
    } catch (err) { console.error(err); }
    setLoading(false);
  }

  useEffect(() => { fetchRules(); }, []);

  function reset() { setForm({ pattern: '', reply: '', buttons: '', order: 0 }); setEditingId(null); }

  async function save(e) {
    e.preventDefault();
    try {
      const payload = { pattern: form.pattern, reply: form.reply, buttons: form.buttons.split('|').map(s=>s.trim()).filter(Boolean), order: Number(form.order||0) };
      if (editingId) {
        await fetch(`/api/chat/rules/${editingId}`, { method: 'PUT', headers: { 'Content-Type':'application/json', 'x-api-key': import.meta.env.VITE_API_KEY || '' }, body: JSON.stringify(payload) });
      } else {
        await fetch('/api/chat/rules', { method: 'POST', headers: { 'Content-Type':'application/json', 'x-api-key': import.meta.env.VITE_API_KEY || '' }, body: JSON.stringify(payload) });
      }
      await fetchRules(); reset();
    } catch (err) { console.error(err); }
  }

  async function editRule(r) {
    setEditingId(r.id);
    setForm({ pattern: r.pattern, reply: r.reply, buttons: (r.buttons||[]).join(' | '), order: r.order||0 });
  }

  async function del(id) {
    if (!confirm('Delete rule?')) return;
    try {
      await fetch(`/api/chat/rules/${id}`, { method: 'DELETE', headers: { 'x-api-key': import.meta.env.VITE_API_KEY || '' } });
      await fetchRules();
    } catch (err) { console.error(err); }
  }

  const [testInput, setTestInput] = useState('');
  const [testResult, setTestResult] = useState(null);

  function handleTest() {
    if (!testInput) return setTestResult('Inserisci un testo di prova.');
    // match local rules
    const r = rules.find(rule => {
      try { return new RegExp(rule.pattern, 'i').test(testInput); } catch { return false; }
    });
    if (r) {
      setTestResult(r.reply);
    } else setTestResult('No rule matched.');
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Chatbot Rules</h2>
      <div style={{ display:'flex', gap:20 }}>
        <div style={{ minWidth:300 }}>
          <h4>Existing rules</h4>
          {loading ? <div>Loading...</div> : (
            <ul style={{ paddingLeft:0 }}>
              {rules.map(r => (
                <li key={r.id} style={{ listStyle:'none', borderBottom:'1px solid #eee', padding:8 }}>
                  <div><strong>/{r.pattern}/</strong></div>
                  <div dangerouslySetInnerHTML={{ __html: r.reply }} style={{ marginTop:6 }} />
                  <div style={{ marginTop:6 }}>
                    <button onClick={()=>editRule(r)} style={{ marginRight:8 }}>Edit</button>
                    <button onClick={()=>del(r.id)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div style={{ flex:1 }}>
          <h4>{editingId ? 'Edit rule' : 'New rule'}</h4>
          <form onSubmit={save}>
            <div style={{ marginBottom:8 }}>
              <label>Pattern (regex)</label>
              <input value={form.pattern} onChange={e=>setForm({...form, pattern:e.target.value})} style={{ width:'100%' }} />
            </div>
            <div style={{ marginBottom:8 }}>
              <label>Reply (HTML allowed)</label>
              <textarea value={form.reply} onChange={e=>setForm({...form, reply:e.target.value})} style={{ width:'100%', height:120 }} />
            </div>
            <div style={{ marginBottom:8 }}>
              <label>Buttons (separate with | )</label>
              <input value={form.buttons} onChange={e=>setForm({...form, buttons:e.target.value})} style={{ width:'100%' }} />
            </div>
            <div style={{ marginBottom:8 }}>
              <label>Order</label>
              <input type="number" value={form.order} onChange={e=>setForm({...form, order:e.target.value})} />
            </div>
            <div>
              <button type="submit" style={{ marginRight:8 }}>{editingId ? 'Update' : 'Create'}</button>
              <button type="button" onClick={reset}>Reset</button>
            </div>
          </form>

          <div style={{ marginTop: 20 }}>
            <h4>Test / Preview</h4>
            <div style={{ marginBottom:8 }}>
              <input value={testInput} onChange={e=>setTestInput(e.target.value)} placeholder="Scrivi un esempio di messaggio" style={{ width:'100%' }} />
            </div>
            <div style={{ marginBottom:8 }}>
              <button onClick={handleTest}>Run Test</button>
            </div>
            <div style={{ padding:8, background:'#fafafa', border:'1px solid #eee' }} dangerouslySetInnerHTML={{ __html: testResult || 'Nessun test eseguito' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
