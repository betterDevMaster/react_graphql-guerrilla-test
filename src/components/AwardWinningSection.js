import React from 'react';

const AwardWinningSection = () => {
  return (
    <section className="award-winning-section">
      <div className="award-content">
        <div className="image">
          <img src="/images/house2.png" alt="Award" />
        </div>
        <div className="details">
          <h2>Award winning real estate company in Dubai</h2>
          <p>
          Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis ornare magna.
          </p>
          <div className="award-sections">
            <div className="award-section">
              <p>Previous projects</p>
              <p>34+</p>
            </div>
            <div className="award-section">
              <p>Years Experience</p>
              <p>20y</p>
            </div>
            <div className="award-section">
              <p>Ongoing Projects</p>
              <p>16</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardWinningSection;
