import React from "react";
import data from "../data/mock-data.json";

function Donut({ value, size = 60, stroke = 8, color, label }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;

  return (
    <div style={{ width: size, textAlign: "center", position: "relative", margin: " auto" }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          r={r}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          stroke="#edf3ec"
          strokeWidth={stroke}
        />
        <circle
          r={r}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
       
      {/* Center Text (Percentage) */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: 18,
          fontWeight: "bold"
        }}
      >
        {Math.round(value)}%
      </div>

      {/* Label under donut */}
      <div style={{ fontSize: 12, marginTop: 6, color: "#777" }}>{label}</div>
    </div>
  );
}

export default function Attendance({ student = data.attendance.student }) {
  const { roll, name, photo, counts } = student;

  const present = counts.present || 0;
  const absent = counts.absent || 0;
  const total = present + absent || 1;

  const presentPct = (present / total) * 100;
  const absentPct = (absent / total) * 100;
  const overallPct = presentPct;

  return (
    <section id="attendance" className="section">
      <div className="container">

        {/* ✅ ADDED HEADING */}
        <h2 className="section-title">User Attendance</h2>

        <div className="attendance-card card">

          {/* LEFT SIDE */}
          <div className="att-center">
            <div className="profile">
              <div className="avatar-wrap">
                <img src={photo} className="avatar-lg" alt={name} />
              </div>
              <div className="roll">{roll}</div>
              <div className="name">{name}</div>
            </div>

            <div className="summary">

              {/* Big Donut - Overall */}
              <div className="big-donut-wrap">
                <Donut
                  value={overallPct}
                  size={180}
                  stroke={16}
                  color="#2f9e48"
                  label="Overall Attendance"
                />
              </div>

              {/* Small Donuts */}
              <div className="small-donuts">
                <Donut
                  value={presentPct}
                  size={90}
                  stroke={8}
                  color="#2f9e48"
                  label="Present"
                />

                <Donut
                  value={absentPct}
                  size={90}
                  stroke={8}
                  color="#d53f3f"
                  label="Absent"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="att-right">
            <div className="stats-box">
             
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
