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
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const Home = () => {

  const images = [
     LOGO1,LOGO2,LOGO3
];
  
  return (
    <>
      <Navbar />
      <div className='main-home-heading'>
        <h1>REDEFINING AFRICAN DAY VIBE</h1>
      </div>
      <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url('https://kyalami-menu.s3.eu-west-1.amazonaws.com/kyalami-pictures/Home/image00010.jpg')` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url('https://kyalami-menu.s3.eu-west-1.amazonaws.com/kyalami-pictures/Home/image00062.jpeg')` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div className="slid-img" style={{ 'backgroundImage': `url('https://kyalami-menu.s3.eu-west-1.amazonaws.com/kyalami-pictures/Home/image00060.jpeg')` }}>
                 
                </div>
            </div>
        </Slide>
		
		<div className='the-need'>
          <h1>The need to choose us</h1>
        </div>
       <div className='content'>
          <img className='content-picture' src='https://kyalami-menu.s3.eu-west-1.amazonaws.com/kyalami-pictures/Home/kyalami-events.jpeg' alt="" />
          <p>
kyalamishisanyama is an ongrowing brand established in 2023 and prides itself in providing not only unique music, traditional shisanyama & african cuisine but also in redefining the african day vibe. we specialise in giving our customers a flavoured shisanyama experience.</p>
       </div>

        <div>
          <h1 className='hcenter'>Life's better poolside</h1>
        </div>
       <div className='content'>
       <p>journey into clarity, tranquility, and the pure embrace of water's pristine beauty </p>
       
          <img className='content-picture' src='https://kyalami-menu.s3.eu-west-1.amazonaws.com/kyalami-pictures/Home/image00003.jpg' alt=''/>
       </div>

       <div>
         <h2>A small step for prawns, a giant leap for prawn-kind</h2>
      </div>
       <div className='content'>
          <img className='content-picture' src='https://kyalami-menu.s3.eu-west-1.amazonaws.com/kyalami-pictures/Home/image00040.jpeg' alt=''/>
          <p> In each bite, discover the poetry of the deep, as prawns unveil a tale of freshness, tenderness, and the essence of culinary refinement.</p>
       </div>

       <div className="spaceM"></div>
      
      <div className='Footer'>
        <Footer />
      </div>
    </>
  );
};

export default Home;
