import React from 'react';
import LandingSection from './components/LandingSection';
import PropertiesSection from './components/PropertiesSection';
import AwardWinningSection from './components/AwardWinningSection';
import FooterSection from './components/FooterSection';

import './styles/global.css';
import './styles/landing.css';
import './styles/properties.css';
import './styles/awardwinning.css';
import './styles/footer.css';

const App = () => {
  return (
    <div className="App">
      <LandingSection />
      <PropertiesSection />
      <AwardWinningSection />
      <FooterSection />
    </div>
  );
};

export default App;
