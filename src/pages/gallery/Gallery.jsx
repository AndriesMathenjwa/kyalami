import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import "./gallery.css";
import Navbar from "../../components/navbar/Navbar";
import foodImage from "../../photos/food.jpeg";
import mix from "../../photos/mix.jpg";
import music from "../../photos/music.jpg";
import establishment from "../../photos/establishment1.jpeg";
import Footer from "../../components/footer/Footer";

const Gallery = () => {
  return (
    <div className="gallery">
      <Navbar />
      <div className="gallery-content">
        <div className="gallery-card">
          <h2>
            Explore our vibrant gallery showcasing delectable dishes, <br />{" "}
            lively gig moments, and the beverages
          </h2>
          <p>
            immerse in flavors, tunes, and spirits that define <br /> our
            establishment experience
          </p>
        </div>
        <div className="upper-images-container">
          <NavLink to="/food" className="image-container">
            <img src={foodImage} alt="Image1" className="upper-images" />
            <div className="image-text">Our food</div>
          </NavLink>
          <NavLink to="/food" className="image-container">
            <img src={mix} alt="Image2" className="upper-images" />
            <div className="image-text">Mix of spirits</div>
          </NavLink>
          <NavLink to="/food" className="image-container">
            <img src={music} alt="Image3" className="upper-images" />
            <div className="image-text">Musical Vibes</div>
          </NavLink>
        </div>
        <div className="lower-image-container">
          <NavLink to="/food" className="image-container">
            <img src={establishment} alt="Image4" className="lower-image" />
            <div className="image-text">Our Establishment</div>
          </NavLink>
        </div>
        <div className="fcontainer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
