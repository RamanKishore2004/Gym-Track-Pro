import React from 'react'

export default function Plans({ plans }) {
  return (
    <section id="plans" className="section">
      <div className="container">
        <h2 className="section-title">Membership Plans</h2>

        <div className="grid plans-grid">
          {plans.map(p => (
            <article key={p.id} className="card plan-card">

              <h3>{p.name}</h3>

              {/* Price only */}
              <div className="price">{p.price}</div>

              <ul className="features">
                {p.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              {/* Only ONE button */}
              <div className="card-actions">
                <button className="btn primary">Buy Now</button>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
