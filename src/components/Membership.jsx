// src/components/Membership.jsx
import React, { useState } from "react";
import data from "../data/mock-data.json";

export default function Membership() {
  // don't mutate the imported JSON — copy into local state
  const initial = data.userMembership || { status: "Inactive", plan: "-", expiry: "" };

  const newPlans = [
    { id: 1, duration: "1 Month", price: 800 },
    { id: 2, duration: "6 Months", price: 4800 },
    { id: 3, duration: "12 Months", price: 9600 }
  ];

  const [selectedPlan, setSelectedPlan] = useState(newPlans[0]);
  const [successMsg, setSuccessMsg] = useState("");
  const [currentMembership, setCurrentMembership] = useState({
    status: initial.status,
    plan: initial.plan,
    expiry: initial.expiry
  });

  const handleChange = (e) => {
    const selected = newPlans.find(p => p.duration === e.target.value);
    if (selected) setSelectedPlan(selected);
  };

  // helper to add months to a date string (YYYY-MM-DD)
  const addMonths = (dateStr, months) => {
    const base = dateStr ? new Date(dateStr) : new Date();
    const d = new Date(base);
    d.setMonth(d.getMonth() + months);
    // normalise to YYYY-MM-DD
    return d.toISOString().slice(0, 10);
  };

  const applyPlan = () => {
    // parse months from "1 Month"/"6 Months"/"12 Months"
    const months = parseInt(selectedPlan.duration, 10) || 1;
    const newExpiry = addMonths(new Date().toISOString().slice(0,10), months);

    // update local membership state (frontend-only)
    setCurrentMembership({
      status: "Active",
      plan: selectedPlan.duration,
      expiry: newExpiry
    });

    // show success
    setSuccessMsg(`Your ${selectedPlan.duration} plan has been applied successfully!`);

    // auto-hide after 3s
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  return (
    <section id="membership" className="section">
      <div className="container">
        <h2 className="section-title">Membership</h2>

        {/* Current Plan */}
        <div className="membership-current card">
          <h3>Your Current Plan</h3>
          <p><strong>Status:</strong> {currentMembership.status}</p>
          <p><strong>Plan:</strong> {currentMembership.plan}</p>
          <p><strong>Expiry:</strong> {currentMembership.expiry}</p>
        </div>

        {/* Upgrade Section */}
        <div className="membership-upgrade card" style={{ marginTop: 20 }}>
          <h3>Choose New Plan</h3>

          <select
            value={selectedPlan.duration}
            onChange={handleChange}
            className="membership-select"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: 8,
              border: "1px solid #e6e6e6",
              background: "#fff"
            }}
          >
            {newPlans.map((p) => (
              <option key={p.id} value={p.duration}>
                {p.duration} - ₹{p.price.toLocaleString()}
              </option>
            ))}
          </select>

          <div className="new-plan-price" style={{ marginTop: 12 }}>
            <p><strong>Price:</strong> ₹{selectedPlan.price.toLocaleString()}</p>
          </div>

         <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "15px" }}>
  <button 
    className="btn primary"
    onClick={applyPlan}
  >
    Apply Plan
  </button>
</div>

          {/* Success message */}
          {successMsg && (
            <div
              className="success-msg"
              style={{
                marginTop: 12,
                padding: "10px 14px",
                background: "#e6fff0",
                color: "#117a3d",
                borderRadius: 8,
                fontWeight: 600,
                display: "inline-block"
              }}
            >
              {successMsg}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
