import React from "react";

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="left-side">
          <img src="/images/logo2.png" alt="Logo" className="footer-logo" />
          <p>2118 Thornridge Cir. Dubai, UAE 35624</p>
          <p>Phone: +33 415 65356 - 9</p>
          <p>Email: contact@lugar.com</p>
        </div>
        <div className="right-side">
          <div className="footer-nav">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-nav">
            <h3>Legal Links</h3>
            <ul>
              <li>Terms</li>
              <li>Conditions</li>
              <li>Policy</li>
            </ul>
          </div>
          <div className="footer-nav">
            <h3>Social Media</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Youtube</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
