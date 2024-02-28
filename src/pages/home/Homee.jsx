import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './Homee.css'
import { Carousel } from 'react-bootstrap'
import LOGO1 from './photos/image00001.jpg'
import LOGO2 from './photos/image00002.jpg'
import LOGO3 from './pictures/image00040.jpeg'
import LOGO4 from './photos/image00010.jpg'
import  LOGO5 from './photos/kyalami-events.jpeg'
import LOGO6 from './photos/outside.jpeg'
import LOGO7 from './pictures/image00009.jpg'
import LOGO8 from './pictures/image00003.jpg'
const Homee = () =>{

    return (
        <>

<div className='navbar'>
      <Navbar/>
      </div>


      <div className='header'>
        <h1>REDEFINING AFRICAN DAY VIBE</h1>
      </div>

    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block"
          src={LOGO1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide</h5>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={LOGO2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide </h5>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={LOGO4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide </h5>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={LOGO5}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide </h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={LOGO6}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide </h5>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

 
        <div className='the-need'>
          <h2>The need to choose us</h2>
        </div>
       <div className='content'>
          <img className='content-picture' src={LOGO2} alt="" />
          <p>KYALAMISHISANYAMA IS AN ONGROWING BRAND ESTABLISHED IN 2023 AND PRIDES ITS <br></br> -SELF IN PROVIDING NOT ON UNIQUE MUSIC, TRADITIONAL SHISANYAMA & AFRICAN <br></br>CUISINE BUT ALSO IN REDEFINING THE AFRICAN DAY VIDE. WE SPECIALISE IN GIVING OUR CUSTOMERS A FLAVOURED SHISANYAMA EXPERIENCE.</p>
       </div>

        <div>
          <h2>Life's better poolside</h2>
        </div>
       <div className='content'>
       <p>journey into clarity, tranquility, and the pure embrace of water's pristine beauty </p>
       
          <img className='content-picture' src={LOGO8} alt=''/>
       </div>

       <div>
         <h2>A small step for prawns, a giant leap for prawn-kind</h2>
      </div>
       <div className='content'>
          <img className='content-picture' src={LOGO3} alt=''/>
          <p> In each bite, discover the poetry of the deep, as prawns unveil a tale of freshness, tenderness, and the essence of culinary refinement.</p>
       </div>

       


       <div className='Footer'>
        <Footer />
       </div>
       
    </>
    )
  
}
export default Homee;