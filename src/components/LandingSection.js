// components/LandingSection.js
import React from 'react';
import NavBar from './NavBar';

const LandingSection = () => {
  return (
    <section className="landing-section">
      <NavBar />
      <div className="content">
        <div className="text-content">
          <h1>A home is built with love and dreams</h1>
          <p>Real estate farm that makes your dreams true</p>
          <div className="buttons">
            <button className='active'>Our projects</button>
            <button>Contact us</button>
          </div>
        </div>
        <div className="image-content">
          <img src="/images/house1.png" alt="House" />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
