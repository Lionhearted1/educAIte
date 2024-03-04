import React from "react";
import "./dashboard.css";

function HeroSectionComponent() {
  return (
    <div>
      <section class="section bg-dark has-bg-image">
        <div class="div-container hero-content">
          <p class="hero-subtitle">
            <strong class="strong">Good Morning Champ!</strong>
          </p>
          <h1 class="hero-title">Time to seize the day 🌞</h1>
          <p class="section-text">
            Exercise not only changes your body but it changes your mind and
            your attitude.
          </p>
        </div>
        <div class="flex justify-evenly space-x-6">
          <button href="#" class="nb-button blue rounded">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default HeroSectionComponent;
