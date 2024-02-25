// Navbar.js

import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../photos/logo.png";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div
        className={`navbar-menu-icon`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
         {menuOpen ? <GrClose className="close-icon" /> : <FaBars />}
      </div>
      <ul className={menuOpen ? "open" : "navbar-links"}>
        <li>
          <NavLink
            exact
            to="/"
            className={activeLink === "/" ? "active-link" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={activeLink === "/menu" ? "active-link" : ""}
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/music"
            className={activeLink === "/music" ? "active-link" : ""}
          >
            Music Section
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={activeLink === "/about" ? "active-link" : ""}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={activeLink === "/contact" ? "active-link" : ""}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={activeLink === "/gallery" ? "active-link" : ""}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/book"
            className={activeLink === "/book" ? "active-link" : ""}
          >
            Book a Table
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
