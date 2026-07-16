import React, { useEffect, useState } from 'react';
import './Dotazioni.css';

export default function Dotazioni() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch('/api/content/dotazioni').then(r => r.json()).then(j => setItems(j)).catch(() => setItems([]));
  }, []);

  return (
    <section className="dotazioni-page">
      <div className="container">
        <h1>Dotazioni</h1>
        {items && items.length > 0 ? (
          <div>
            {items.map(it => (
              <div key={it._id} style={{ marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: it.body || `<strong>${it.title}</strong>` }} />
            ))}
          </div>
        ) : (
          <p>Dotazioni hardware e software. Please add entries from the admin dashboard.</p>
        )}
      </div>
    </section>
  );
}
