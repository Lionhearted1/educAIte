import React from "react";
import "./dashboard.css";
function AboutSectioComponent() {
  return (
    <div>
      <section>
        <div class="personal-bests-container">
          <div class="box box-one">
            <img
              src="https://svgsilh.com/svg/3199472.svg"
              alt="running image"
            />
            <p>Fastest 5K Run: 22min</p>
            <button class="flex justify-evenly space-x-6 nb-button default rounded">
              Learn More
            </button>
          </div>
          <div class="box box-two">
            <img src="https://svgsilh.com/svg/297155.svg" alt="cycling image" />
            <p>Longest Distance Cycling: 4 miles</p>
            <button class="flex justify-evenly space-x-6 nb-button default rounded">
              Learn More
            </button>
          </div>
          <div class="box box-three">
            <img src="https://svgsilh.com/svg/154505.svg" alt="skating image" />
            <p>Longest Roller-Skating: 2 hours</p>
            <button class="flex justify-evenly space-x-6 nb-button default rounded">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSectioComponent;
