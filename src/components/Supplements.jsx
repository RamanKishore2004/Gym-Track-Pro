import React, { useState, useRef } from "react";
import data from "../data/mock-data.json";

export default function Supplements() {
  const supplements = data.supplements;

  const [toast, setToast] = useState({ visible: false, text: "" });
  const timerRef = useRef(null);

  const showToast = (msg) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    setToast({ visible: true, text: msg });

    timerRef.current = setTimeout(() => {
      setToast({ visible: false, text: "" });
      timerRef.current = null;
    }, 2000);
  };

  const handleAddToCart = (item) => {
    console.log("Added:", item); // <-- Replace later with real cart logic
    showToast(`${item.name} added to cart`);
  };

  return (
    <section id="supplements" className="section">
      <div className="container">
        <h2 className="section-title">Supplements</h2>

        <div className="grid plans-grid">
          {supplements.map((s) => (
            <article key={s.id} className="card plan-card">
              <h3>{s.name}</h3>
              <div className="muted">
                {s.size} • {s.price}
              </div>
              <p>{s.desc}</p>

              <ul className="features">
                {s.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <div className="card-actions">
                <button
                  className="btn primary"
                  onClick={() => handleAddToCart(s)}
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Toast box */}
      <div className={`cart-toast ${toast.visible ? "show" : ""}`}>
        {toast.text}
      </div>
    </section>
  );
}
