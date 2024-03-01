import React from 'react'
import "./contact.css"
import Navbar from "../../components/navbar/Navbar";
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,  faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FaTiktok } from "react-icons/fa";

const Contact = () => {
    return (
        <>
   
        <Navbar/>

           
            <section className="contact">
             <div className="contact-container">
                <h2>Contact Us</h2>
                <div className="contact-wrapper">
                    <div className="contact-form">
                        <h3>Send us a message</h3>
                        <form action="" className='main-contact-form'>
                            <div className="form-group">
                            {/* style={{width:"850px" , marginLeft: "5%",marginRight:"5%" }} */}
                                <input type='text' name='name' placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type='email' name='name' placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                              <textarea name="message" placeholder="Your Message"></textarea>
                            </div>
                            <button type='submit' className='contact-btn'>Send Message</button>
                        </form>
                        <div className="contact-info">
                            <h3 className='contact-info-header'>Contact Information</h3>
                            <p> <FontAwesomeIcon icon={faPhone} /> <span>0680600221 or 0870935334</span></p>
                           
                            <p><FontAwesomeIcon icon={faEnvelope} /><a className='email' href='Kyalamishisanyama@gmail.com '>Kyalamishisanyama@gmail.com </a></p>
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
                        {/*map*/}
                        <div>
                        <iframe
  className='map'
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.9293448947533!2d28.0747581!3d-26.0031318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95717c301e56d1%3A0x56ab7d4ab0da3bac!2sKyalami%20Shisanyama!5e0!3m2!1sen!2sz!4v1709026788922!5m2!1sen!2sza"
  width={400}
  height={450}
  style={{ border: '0' }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
</div>

                    </div>
                </div>
                  
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact