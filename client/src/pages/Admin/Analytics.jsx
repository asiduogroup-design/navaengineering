import React, { useEffect, useState } from 'react';
import './Analytics.css';

function SmallBarChart({ items }) {
  // items: [{label, value}]
  const max = Math.max(...items.map(i => i.value), 1);
  return (
    <svg width="100%" height={items.length * 28} viewBox={`0 0 400 ${items.length * 28}`} preserveAspectRatio="xMinYMin">
      {items.map((it, idx) => {
        const y = idx * 28;
        const w = Math.round((it.value / max) * 300);
        return (
          <g key={it.label} transform={`translate(0, ${y})`}>
            <text x={0} y={14} fontSize={12} fill="#333">{it.label}</text>
            <rect x={120} y={4} width={w} height={18} fill="#2b8cff" rx={3} />
            <text x={430} y={14} fontSize={12} fill="#333">{it.value}</text>
          </g>
        )
      })}
    </svg>
  )
}

export default function Analytics() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiKey = import.meta.env.VITE_API_KEY || null;
        const headers = {};
        if (apiKey) headers['x-api-key'] = apiKey;
        const res = await fetch('/api/analytics', { headers });
        if (!res.ok) throw new Error('Failed to fetch analytics');
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  if (error) return <div style={{padding:20}}>Errore: {error}. Assicurati che VITE_API_KEY sia impostato se richiesto dal server.</div>;
  if (!data) return <div style={{padding:20}}>Caricamento...</div>;

  // Build chart items: show top-level event counts
  const items = Object.keys(data).map(k => ({ label: k, value: data[k].count || 0 }));

  return (
    <div className="analytics-container container">
      <h2>Analytics</h2>
      <div style={{maxWidth:600}}>
        <SmallBarChart items={items} />
      </div>
      <h3 style={{marginTop:16}}>Raw JSON</h3>
      <pre className="analytics-pre">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
