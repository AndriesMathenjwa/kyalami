import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './saturday.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Saturday = () => {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();

    React.useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

  return (
    <div className="Music">
      <Navbar />
      <div className="spaceM"></div>
      <div className='Mheading' style={{ marginTop: '50px', textAlign: 'center' }}>
        <h1>#Gigs</h1>
      </div>
      <div className="gig_links">
                <ul>
                    <li>Day :</li>
                    <li><NavLink to="/friday" className={activeLink === "/friday" ? 'active-day' : ''}>Friday</NavLink></li>
                    <li><NavLink to="/saturday" className={activeLink === "/saturday" ? 'active-day' : ''}>Saturday</NavLink></li>
                    <li><NavLink to="/sunday" className={activeLink === "/sunday" ? 'active-day' : ''}>Sunday</NavLink></li>
                    <li>Specific day:<input type="date" /></li>

                </ul>
            </div>
            <div>
            <h2 style={{ marginTop: '50px', textAlign: 'center' }}>Link saturday</h2>
            <hr className='Underline'/> 
            </div>
            <div className='Saposter'>
                    
            </div>
            <div>
            <h2 style={{ marginTop: '50px', textAlign: 'center' }}>Redefining African day vibe.</h2>
            </div>
      <Footer />
    </div>
  );
}

export default Saturday;
