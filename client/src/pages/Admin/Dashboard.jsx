import React, { useEffect, useState } from 'react';

const TYPES = [
  { key: 'servizi', label: 'Servizi' },
  { key: 'referenze', label: 'Referenze' },
  { key: 'curriculum', label: 'Curriculum' },
  { key: 'portfolio', label: 'Portfolio' },
  { key: 'dotazioni', label: 'Dotazioni' },
];

function useApiKeyHeader() {
  const apiKey = import.meta.env.VITE_API_KEY || null;
  return apiKey ? { 'x-api-key': apiKey, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
}

export default function Dashboard() {
  const [type, setType] = useState(TYPES[0].key);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ title: '', body: '', link: '', order: 0 });
  const [editingId, setEditingId] = useState(null);
  const headers = useApiKeyHeader();

  async function fetchItems(t) {
    setLoading(true);
    try {
      const res = await fetch(`/api/content/${t}`);
      const json = await res.json();
      setItems(json || []);
    } catch (err) {
      console.error(err);
    } finally { setLoading(false); }
  }

  useEffect(() => { fetchItems(type); }, [type]);

  function resetForm() { setForm({ title: '', body: '', link: '', order: 0 }); setEditingId(null); }

  async function handleSave(e) {
    e.preventDefault();
    try {
      if (editingId) {
        await fetch(`/api/content/${type}/${editingId}`, { method: 'PUT', headers, body: JSON.stringify(form) });
      } else {
        await fetch(`/api/content/${type}`, { method: 'POST', headers, body: JSON.stringify(form) });
      }
      await fetchItems(type);
      resetForm();
    } catch (err) { console.error(err); }
  }

  async function handleEdit(item) {
    setEditingId(item._id);
    setForm({ title: item.title || '', body: item.body || '', link: item.link || '', order: item.order || 0 });
  }

  async function handleDelete(id) {
    if (!confirm('Delete this item?')) return;
    try {
      await fetch(`/api/content/${type}/${id}`, { method: 'DELETE', headers });
      await fetchItems(type);
    } catch (err) { console.error(err); }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>
      <div style={{ display: 'flex', gap: 20 }}>
        <div style={{ minWidth: 220 }}>
          <label>Type</label>
          <select value={type} onChange={e => setType(e.target.value)} style={{ display: 'block', width: '100%', marginTop: 6 }}>
            {TYPES.map(t => <option key={t.key} value={t.key}>{t.label}</option>)}
          </select>

          <h4 style={{ marginTop: 12 }}>Items</h4>
          {loading ? <div>Loading...</div> : (
            <ul style={{ paddingLeft: 0 }}>
              {items.map(it => (
                <li key={it._id} style={{ listStyle: 'none', padding: 6, borderBottom: '1px solid #eee' }}>
                  <strong>{it.title}</strong>
                  <div style={{ fontSize: 13, color: '#555' }}>{it.link}</div>
                  <div style={{ marginTop: 6 }}>
                    <button onClick={() => handleEdit(it)} style={{ marginRight: 8 }}>Edit</button>
                    <button onClick={() => handleDelete(it._id)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div style={{ flex: 1 }}>
          <h4>{editingId ? 'Edit item' : 'New item'}</h4>
          <form onSubmit={handleSave}>
            <div style={{ marginBottom: 8 }}>
              <label>Title</label>
              <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} style={{ width: '100%' }} />
            </div>
            <div style={{ marginBottom: 8 }}>
              <label>Body</label>
              <textarea value={form.body} onChange={e => setForm({ ...form, body: e.target.value })} style={{ width: '100%', height: 120 }} />
            </div>
            <div style={{ marginBottom: 8 }}>
              <label>Link</label>
              <input value={form.link} onChange={e => setForm({ ...form, link: e.target.value })} style={{ width: '100%' }} />
            </div>
            <div style={{ marginBottom: 8 }}>
              <label>Order</label>
              <input type="number" value={form.order} onChange={e => setForm({ ...form, order: parseInt(e.target.value || 0) })} />
            </div>
            <div>
              <button type="submit" style={{ marginRight: 8 }}>{editingId ? 'Update' : 'Create'}</button>
              <button type="button" onClick={resetForm}>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
