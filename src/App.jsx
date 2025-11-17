import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import Trainers from "./components/Trainers";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import data from "./data/mock-data.json";
import Supplements from "./components/Supplements";
import Membership from "./components/Membership";
import CommonServicesCorner from "./components/CommonServicesCorner";
import WorkoutPlan from "./components/WorkoutPlan";
import Attendance from "./components/Attendance";

export default function App() {
  const [items] = useState(data);

  return (
    <div className="app-root">
      <Header />

      {/* floating corner panel (common services) */}
      <CommonServicesCorner
        onSelect={(id) => {
          if (id === "workout") {
            document.querySelector("#workout")?.scrollIntoView({ behavior: "smooth" });
          }
          if (id === "supplement") {
            document.querySelector("#supplements")?.scrollIntoView({ behavior: "smooth" });
          }
          if (id === "subscription") {
            document.querySelector("#membership")?.scrollIntoView({ behavior: "smooth" });
          }
          if (id === "attendance") {
            document.querySelector("#attendance")?.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />

      <Hero />

      <main className="container">
        {/* uncomment if you want plans on main */}
        {/* <Plans plans={items.plans} /> */}

        <Trainers trainers={items.trainers} />
        <Schedule classes={items.classes} />

        {/* Workout plan (Mon - Sat) */}
        <WorkoutPlan />

        {/* Attendance card */}
        <Attendance />

        <Supplements supplements={items.supplements} />
        <Membership />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
