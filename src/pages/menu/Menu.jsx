import React from "react";
import './menu.css';
import Navbar from "../../components/navbar/Navbar";
import LOGO4 from './image00010.jpg';
import Footer from "../../components/footer/Footer";


const Menu = () => {
  

    return (
        <>
        <div className="navbar">
            <Navbar/>
        
        </div>
        
        
       
            <div className="menu">
                <div className="menu-div">
                     <img className='menuPic' src={LOGO4} alt=''/>

                </div>
                
                <h3>MENUS</h3>
                <p>Treat yourself to our best food that caters to every taste. Our team at Kyalami Shisanyama is dedicated to crafting the ideal 'nyama' experience for you</p>

                <h4 className="food">Our Food</h4>
                    <div className="food-div">
                        <a href="https://mail.google.com/mail/u/1/#chat/space/AAAA8wekrcs">Food Menu Sets</a>
                    </div>
                    
                <h4 className="bev">Our Beverages</h4>
                <div className="drinks-div">
                        <a className="drinks" href="https://kyalamishisanyama.co.za/">Beverages</a>
                    </div>
            </div>

         
            <Footer/>
           
           
         
        </>
    );

}
export default Menu;
    