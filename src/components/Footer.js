import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="subscribe-section">
          <h1>evinco</h1>
          <input type="email" placeholder="Enter your mail" />
          <button>Subscribe</button>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Get in touch</a>
          <a href="/">FAQs</a>
        </div>
      </div>
      <div className="footer-bottom">
        <NavLink to="/create-club"><button className='create-club'>create club</button></NavLink>
        <p>made possible by nikunj & sumati</p>
      </div>
    </footer>
  );
};

export default Footer;