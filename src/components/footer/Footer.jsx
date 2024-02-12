import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/contact">Contact Us</a>
        <a href="/about">About Us</a>
      </div>
      <div className="footer-info">
        Kyalami Shisanyama © All Rights Reserved  <span className='tncs'>T’s & C’s </span>  Privacy Policies
      </div>
    </footer>
  );
}

export default Footer;
