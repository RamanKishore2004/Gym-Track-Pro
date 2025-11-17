import React, { useState } from 'react'

export default function Schedule({ classes }) {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Easy", "Medium", "Hard"]

  const filteredClasses =
    activeFilter === "All"
      ? classes
      : classes.filter(cls => cls.difficulty === activeFilter)

  return (
    <section id="schedule" className="section">
      <div className="container">
        <h2 className="section-title">Class Schedule</h2>

        <div className="filters">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={activeFilter === f ? "filter active" : "filter"}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="schedule-list">
          {filteredClasses.map(cls => (
            <div key={cls.id} className="schedule-card">
              <div className="info">
                <h3>{cls.name}</h3>
                <p>🕒 {cls.time}</p>
                <p>🔥 Difficulty: {cls.difficulty}</p>
              </div>
              <div className="trainer">
                <span>Trainer</span>
                <strong>{cls.trainer}</strong>
                <button className="btn ghost">Book</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
