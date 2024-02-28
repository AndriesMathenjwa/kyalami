import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './music.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';

const Music = () => {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const handleGBlockClick = (genre) => {
        
        switch (genre.toLowerCase()) {
          case 'soul':
            navigate('/soul');
            break;
          case 'deep':
            navigate('/deep');
            break;
          case 'afropop':
            navigate('/afropop');
            break;
          case 'amapiano':
            navigate('/amapiano');
            break;
          case 'rnb':
            navigate('/rnb');
            break;
          case 'afrotech':
            navigate('/afrotech');
            break;
          default:
            //default
            break;
        }
      };

    return (
        <div className="Music">
            <div>
                <Navbar />
            </div>
            <div className="spaceM"></div>
            <div className='Mheading' style={{ marginTop: '50px', textAlign: 'center' }}>
                <h1>#Gigs</h1>
            </div>
            <div className="gig_links">
                <ul>
                    <li>Day :</li>
                    <li><NavLink to="/friday" className={activeLink === "/friday" ? 'active-day' : ''}>Friday</NavLink></li>
                    <li><NavLink to="/saturday" className={activeLink === "/Saturday" ? 'active-day' : ''}>Saturday</NavLink></li>
                    <li><NavLink to="/sunday" className={activeLink === "/Sunday" ? 'active-day' : ''}>Sunday</NavLink></li>
                    <li>Specific day:<input type="date" className='gig-date' /></li>
                </ul>
            </div>
            <div className='Our_music'>
                <div className='Mheading' style={{ marginTop: '50px', textAlign: 'center' }}>
                    <h1 style={{ color: '#ffffff' }}>#Our Music</h1>
                </div>

                <div className='Genres'>
                    <div className='gBlocks' style={{ backgroundColor: '#FFFFFF', color: 'black' }} onClick={() => handleGBlockClick('Soul')}>
                        <h2>Soul</h2>
                    </div>
                    <div className='gBlocks' style={{ backgroundColor: 'rgb(255, 168, 6)', color: 'black' }} onClick={() => handleGBlockClick('deep')}>
                        <h2>Deep House</h2>
                    </div>
                    <div className='gBlocks' style={{ backgroundColor: '#FFFFFF', color: 'black' }} onClick={() => handleGBlockClick('afropop')}>
                        <h2>Afro-Pop</h2>
                    </div>
                </div>
                <div className='Genres'>
                    <div className='gBlocks' style={{ backgroundColor: 'rgb(255, 168, 6)', color: 'black' }} onClick={() => handleGBlockClick('amapiano')}>
                        <h2>Amapiano</h2>
                    </div>
                    <div className='gBlocks' style={{ backgroundColor: '#FFFFFF', color: 'black' }} onClick={() => handleGBlockClick('rnb')}>
                        <h2>R&B</h2>
                    </div>
                    <div className='gBlocks' style={{ backgroundColor: 'rgb(255, 168, 6)', color: 'black' }} onClick={() => handleGBlockClick('afrotech')}>
                        <h2>Afro-Tech</h2>
                    </div>
                </div>
            </div>
            <div>
                <h2 style={{ marginTop: '50px', marginBottom: '50px', textAlign: 'center' }}>Redefining African day vibe.</h2>
            </div>
            <Footer />
        </div>
    );
}

export default Music;
