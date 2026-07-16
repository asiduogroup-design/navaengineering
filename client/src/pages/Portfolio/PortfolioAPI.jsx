import React, { useEffect, useState } from 'react';
import './Portfolio.css';

export default function Portfolio() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch('/api/content/portfolio').then(r => r.json()).then(j => setItems(j)).catch(() => setItems([]));
  }, []);

  return (
    <section className="portfolio-page">
      <div className="container">
        <h1>Portfolio</h1>
        {items && items.length > 0 ? (
          <div>
            {items.map(it => (
              <div key={it._id} style={{ marginBottom: 12 }}>
                <h3>{it.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: it.body || '' }} />
              </div>
            ))}
          </div>
        ) : (
          <p>Galleria progetti e lavori.</p>
        )}
      </div>
    </section>
  );
}
