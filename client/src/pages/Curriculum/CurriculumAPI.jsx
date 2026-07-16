import React, { useEffect, useState } from 'react';
import './Curriculum.css';

export default function Curriculum() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch('/api/content/curriculum').then(r => r.json()).then(j => setItems(j)).catch(() => setItems([]));
  }, []);

  return (
    <section className="curriculum-page">
      <div className="container">
        <h1>Curriculum</h1>
        {items && items.length > 0 ? (
          <div>
            {items.map(it => (
              <div key={it._id} style={{ marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: it.body || `<strong>${it.title}</strong>` }} />
            ))}
          </div>
        ) : (
          <p>Content not configured. Please add entries from the admin dashboard.</p>
        )}
      </div>
    </section>
  );
}
