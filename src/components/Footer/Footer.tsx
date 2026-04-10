import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo" aria-label="Perficient Logo">
            <svg width="24" height="35" viewBox="0 0 24 35" fill="none">
              <path
                d="M0 0h8.5C15.4 0 20 4.6 20 11.5S15.4 23 8.5 23H5v12H0V0zm5 18h3.5C11.8 18 15 15.3 15 11.5S11.8 5 8.5 5H5v13z"
                fill="currentColor"
              />
            </svg>
            <span className="footer-logo-text">erficient</span>
          </div>
          <span className="footer-copyright">Perficient™ 2026</span>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <a href="#terms" className="footer-link">Terms of Service</a>
          <a href="#support" className="footer-link">Support</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;