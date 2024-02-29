import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import "./home.css";
import Footer from '../../components/footer/Footer';
import { Carousel } from 'react-bootstrap';
import LOGO1 from '../../photos/image00001.jpg';
import LOGO2 from '../../photos/image00002.jpg';
import LOGO3 from '../../photos/image00040.jpeg';
import LOGO4 from '../../photos/image00010.jpg';
import LOGO5 from '../../photos/kyalami-events.jpeg';
import LOGO6 from '../../photos/outside.jpeg';
import LOGO8 from '../../photos/image00003.jpg';

const Home = () => {
  
  return (
    <>
      <Navbar />
      <div className='header'>
        <h1>REDEFINING AFRICAN DAY VIBE</h1>
      </div>
      
      <div className='Footer'>
        <Footer />
      </div>
    </>
  );
};

export default Home;
