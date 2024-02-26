import React from "react";
import './contact.css'
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,  faInstagram } from '@fortawesome/free-brands-svg-icons';
import Footer from '../../components/footer/Footer'
const Contact = () => {
    

    return (
        <>
        <div className="navbar"> 
        <Navbar/><br></br><br></br>
        </div>
           
            <section className="contact">
             <div className="container">
                <h2>Contact Us</h2>
                <div className="contact-wrapper">
                    <div className="contact-form">
                        <h3>Send us a message</h3>
                        <form action="">
                            <div className="form-group">
                                <input type='text' name='name' placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type='email' name='name' placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                              <textarea name="message" placeholder="Your Message"></textarea>
                            </div>
                            <button type='submit'>Send Message</button>
                        </form>
                        <div className="contact-info">
                            <h3>Contact Information</h3>
                            <p> <FontAwesomeIcon icon={faPhone} /> <span>123-456-7890</span></p>
                           
                            <p><FontAwesomeIcon icon={faEnvelope} /><a href='Kyalamishisanyama@gmail.com '>kyalami shisanyama</a></p>
                            <p> <FontAwesomeIcon icon={faMapMarker} /> <span>137, flora town park, kyalami, Johannesburg, 1684, South Africa.</span></p>
                        </div>
                        
                        <div className="map-social"> 
                           {/*map*/}
                           <h3>Follow Us:</h3>
                           <div className="social-icons">
                                <a href="https://web.facebook.com/people/Kyalami-Shisanyama/100087549597053/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                
                                <a href="https://www.instagram.com/kyalami_shisanyama/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                
                                </div>
                                
                        </div>

                    </div>
                </div>
                  
                </div>
            </section>
            <Footer />
        </>
    );
}
export default Contact;