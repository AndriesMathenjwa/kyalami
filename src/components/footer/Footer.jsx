import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
      </div>
      <div className="footer-info">
        Kyalami Shisanyama © All Rights Reserved{" "}
        <span className="tncs">T’s & C’s </span> Privacy Policies
      </div>
    </footer>
  );
};

export default Footer;
