import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; 
import "./navbar.css";
import logo from "../../photos/logo.png";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();

    React.useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="navbar-links">
                <ul>
                    <li><NavLink exact to="/" className={activeLink === "/" ? 'active-link' : ''}>Home</NavLink></li>
                    <li><NavLink to="/menu" className={activeLink === "/menu" ? 'active-link' : ''}>Menu</NavLink></li>
                    <li><NavLink to="/music" className={activeLink === "/music" ? 'active-link' : ''}>Music Section</NavLink></li>
                    <li><NavLink to="/about" className={activeLink === "/about" ? 'active-link' : ''}>About Us</NavLink></li>
                    <li><NavLink to="/contact" className={activeLink === "/contact" ? 'active-link' : ''}>Contact Us</NavLink></li>
                    <li><NavLink to="/gallery" className={activeLink === "/gallery" ? 'active-link' : ''}>Gallery</NavLink></li>
                    <li><NavLink to="/book" className={activeLink === "/book" ? 'active-link' : ''}>Book a Table</NavLink></li>
                </ul>
            </div>
            <div className="navbar-menu-icon">
                <FaBars />
            </div>
        </nav>
    );
};

export default Navbar;
