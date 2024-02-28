import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import LOGO4 from '../../photos/menuimg.jpg';
import "./menu.css"

const Menu = () => {
    return (
        <>
        
            <Navbar/>
        
        
       
            <div className="menu">
                <div className="menu-div">
                     <img className='menuPic' src={LOGO4} alt=''/>

                </div>
                
                <h2 className='h2-content'>MENUS</h2>
                <p>Treat yourself to our best food that caters to every taste. Our team at Kyalami Shisanyama is dedicated to crafting the ideal 'nyama' experience for you</p>

                <h4 className="food">Our Food</h4>
                    <div className="food-div">
                        <a className='food-link' href="https://kyalami-menu.s3.eu-west-1.amazonaws.com/Food+Menu.pdf">Food Menu Sets</a>
                    </div>
                    
                <h4 className="bev">Our Beverages</h4>
                <div className="drinks-div">
                        <a className="drinks" href="https://kyalami-menu.s3.eu-west-1.amazonaws.com/Drinks+Menu+.pdf">Beverages</a>
                    </div>
            </div>

         
            <Footer/>
           
           
         
        </>
    );

}

export default Menu