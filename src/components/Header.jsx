import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">

        {/* CLICKABLE LOGO → GOES TO HERO SECTION */}
        <h1
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => {
            document.querySelector("#hero")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Gym<span>Track</span> Pro
        </h1>

        {/* NAVIGATION LINKS */}
        <nav className="nav">
          <a href="#trainers">Trainers</a>
          <a href="#gallery">Gallery</a>
          <a href="#membership">Membership</a>
          <a href="#schedule">Schedule</a>
        </nav>

        {/* BUTTONS */}
        <a href="#schedule" className="btn primary nav-btn">Book a Session</a>

        <a href="#membership" className="btn primary nav-btn">
          Join Now
        </a>

        <button className="btn logout-btn">Logout</button>

      </div>
    </header>
  );
}

