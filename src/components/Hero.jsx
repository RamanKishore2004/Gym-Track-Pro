import React from 'react';
import heroImg from '../assets/images/hero.jpg';

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="container hero-inner">
        <section id="hero" className="hero"></section>
        <div>
          <h1>Transform Your Fitness Journey</h1>
          <p className="lead">Streamline your operations. Grow your business. Deliver a better fitness experience.</p>
        </div>
        <div className="hero-media">
          <img src={heroImg} alt="gym vibes" />
        </div>
      </div>
    </section>
  )
}
