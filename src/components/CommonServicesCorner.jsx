import React, { useState, useEffect } from "react";

const services = [
  {
    id: "workout",
    title: "Workout Plan",
    subtitle: "Personalized routines"
  },
  {
    id: "attendance",
    title: "Attendance",
    subtitle: "View attendance card"
  },
  {
    id: "supplement",
    title: "Supplement Corner",
    subtitle: "Stock & recommendations"
  },
  {
    id: "subscription",
    title: "Subscription Plan",
    subtitle: "Manage memberships"
  }
];

export default function CommonServicesCorner({ onSelect }) {
  const [open, setOpen] = useState(false);

  // keyboard ESC to close
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    if (onSelect) {
      onSelect(id);
      return;
    }
    // fallback behavior if no onSelect provided:
    if (id === "workout") document.querySelector("#workout")?.scrollIntoView({ behavior: "smooth" });
    if (id === "attendance") document.querySelector("#attendance")?.scrollIntoView({ behavior: "smooth" });
    if (id === "supplement") document.querySelector("#supplements")?.scrollIntoView({ behavior: "smooth" });
    if (id === "subscription") document.querySelector("#membership")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* floating corner button */}
      <div className="corner-panel">
        <button
          className={`corner-toggle ${open ? "open" : ""}`}
          aria-label="Open common services"
          onClick={() => setOpen((s) => !s)}
        >
          {/* three dots icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="4" cy="12" r="2" fill="currentColor" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <circle cx="20" cy="12" r="2" fill="currentColor" />
          </svg>
        </button>

        {/* card */}
        <div className={`corner-card ${open ? "visible" : ""}`} role="dialog" aria-hidden={!open}>
          <div className="card-header">
            <h4>Common Services</h4>
            <button className="card-close" aria-label="Close" onClick={() => setOpen(false)}>✕</button>
          </div>

          <ul className="corner-services" role="list">
            {services.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  className="corner-row"
                  onClick={() => handleClick(s.id)}
                >
                  <span className="corner-title">{s.title}</span>
                  <span className="corner-sub">{s.subtitle}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
