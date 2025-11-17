import React, { useState } from "react";
import data from "../data/mock-data.json";

export default function WorkoutPlan() {
  const week = data.workoutPlans?.week || [];
  const [activeIdx, setActiveIdx] = useState(0); // Monday default

  if (!week.length) {
    return (
      <section id="workout" className="section">
        <div className="container">
          <h2 className="section-title">Workout Plan</h2>
          <p className="muted">No workout plan found in data.</p>
        </div>
      </section>
    );
  }

  const active = week[activeIdx];

  return (
    <section id="workout" className="section">
      <div className="container">
        <h2 className="section-title">Weekly Workout Plan (Mon–Sat)</h2>

        {/* tabs */}
        <div className="workout-tabs" role="tablist" aria-label="Week days">
          {week.map((d, i) => (
            <button
              key={d.day}
              className={`tab ${i === activeIdx ? "active" : ""}`}
              onClick={() => setActiveIdx(i)}
              role="tab"
              aria-selected={i === activeIdx}
            >
              <div className="tab-day">{d.day}</div>
              <div className="tab-focus">{d.focus}</div>
            </button>
          ))}
        </div>

        {/* active day details */}
        <div className="workout-day card">
          <div className="day-header">
            <h3>{active.day} — <span className="muted">{active.focus}</span></h3>
            <div className="day-actions">
              <button className="btn small ghost" onClick={() => alert("Mark as completed (demo)")}>
                Mark Done
              </button>
            </div>
          </div>

          <ol className="exercise-list">
            {active.exercises.map((ex, i) => (
              <li key={i} className="exercise-item">
                <div className="ex-left">
                  <div className="ex-name">{ex.name}</div>
                  {ex.notes && <div className="muted ex-notes">{ex.notes}</div>}
                </div>
                <div className="ex-sets">{ex.sets}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
