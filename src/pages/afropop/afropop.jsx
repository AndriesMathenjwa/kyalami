import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import './afropop.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Afropop = () => {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();

    React.useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

  return (
    <div className="Afropop">
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
            <div className='AfropopPoster'>
                    <h2 style={{ color:'white', textAlign: 'Center' }}>#Afropop event guide 2024</h2>
                    <div className='gig_date'>
                    <h3 style={{color:'white',  marginLeft: '2%'}}>5 MARCH</h3>
                    <hr style={{ border: '3px solid white', width: '60px', marginLeft: '2%', marginBottom: '10px' }} />
                    <label style={{marginBottom:'2%', color: 'white', marginLeft:'2%'}} htmlFor="">hhhhgfgfdgfdgdxg</label><br />
                    <label style={{marginBottom:'2%', color: 'white', marginLeft:'2%'}} htmlFor="">hhhhgfgfdgfdgdxg</label>
                    </div>
                    <div className='gig_date'>
                    <h3 style={{color:'white',  marginLeft: '2%'}}>5 MARCH</h3>
                    <hr style={{ border: '3px solid white', width: '60px', marginLeft: '2%', marginBottom: '10px' }} />
                    <label style={{marginBottom:'2%', color: 'white', marginLeft:'2%'}} htmlFor="">hhhhgfgfdgfdgdxg</label><br />
                    <label style={{marginBottom:'2%', color: 'white', marginLeft:'2%'}} htmlFor="">hhhhgfgfdgfdgdxg</label>
                    </div>
                    
            </div>
            <div className="MusicNav">
                <label style={{ color:'rgb(255, 168, 6)' }}>Go to:</label>
                <Link to="/soul">Soul</Link>
                <Link to="/deep">Deep House</Link>
                <Link to="/amapiano">Amapiano</Link>
                <Link to="/rnb">R&B</Link>
                <Link to="/afrotech">Afrotech</Link>

                
            </div>
            <div>
            <h2 style={{ marginTop: '50px', textAlign: 'center' }}>Redefining African day vibe.</h2>
            </div>
            
      <Footer />
    </div>
  );
}

export default Afropop;
