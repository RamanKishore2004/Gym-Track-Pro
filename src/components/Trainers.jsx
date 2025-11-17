import React from 'react'
import t1 from '../assets/images/trainer11.jpg'
import t2 from '../assets/images/trainer22.jpg'
import t3 from '../assets/images/trainer33.jpg'

const localImgs = [t1, t2, t3]

export default function Trainers({ trainers }) {
  return (
    <section id="trainers" className="section alt">
      <div className="container">
        <h2 className="section-title">Meet Our Trainers</h2>

        <div className="grid trainers-grid">
          {trainers.map((t, idx) => (
            <div key={t.id} className="card trainer-card">

              <img className="avatar" src={localImgs[idx % localImgs.length]} alt={t.name} />

              <h3>{t.name}</h3>
              <div className="muted">{t.specialty} • {t.experience}</div>

              <div className="tags">
                {t.tags.map((tg, i) => (
                  <span key={i} className="tag">{tg}</span>
                ))}
              </div>

              <div className="card-actions">
                <button
                  className="btn primary"
                 onClick={() => {
                  document.querySelector("#schedule")?.scrollIntoView({
                behavior: "smooth",
    });
  }}
>
  Book Session
</button>

             

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
