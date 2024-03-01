import React from "react";
import { NavLink } from "react-router-dom";
import "./gallery.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import foodImage from "../../photos/food.jpeg";
import mix from "../../photos/mix.jpg";
import music from "../../photos/music.jpg";

const establishmentImageUrl = "https://kyalami-menu.s3.eu-west-1.amazonaws.com/kyalami-pictures/Gallery/establishment1.jpeg";
// const foodImageUrl = "https://kyalami-menu.s3.eu-west-1.amazonaws.com/kyalami-pictures/Gallery/food.jpeg";
// const mixImageUrl = "https://kyalami-menu.s3.eu-west-1.amazonaws.com/kyalami-pictures/Gallery/mix.jpg";
// const musicImageUrl = "https://kyalami-menu.s3.eu-west-1.amazonaws.com/kyalami-pictures/Gallery/music.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <Navbar />
      <div className="space"></div>
      <div className="gallery-card">
        <h2 className="big-text">
          Explore our vibrant gallery showcasing delectable dishes, <br /> lively gig
          moments, and the beverages
        </h2>
        <p className="small-text">
          immerse in flavors, tunes, and spirits that define <br /> our
          establishment experience
        </p>
      </div>
      <div className="top-imag-conta">
        <div className="image-container">
          <div className="image-wrapper">
            <NavLink to="/food">
              <img src={foodImage} alt="Food" />
              <div className="image-text">Our food</div>
            </NavLink>
          </div>
          <div className="image-wrapper">
            <NavLink to="/food">
              <img src={mix} alt="Mix" />
              <div className="image-text">Mix of spirits</div>
            </NavLink>
          </div>
          <div className="image-wrapper">
            <NavLink to="/food">
              <img src={music} alt="Music" />
              <div className="image-text">Live performances</div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="big-image-container">
        <NavLink to="/food">
          <img src={establishmentImageUrl} alt="Establishment" />
          <div className="big-image-text">Our establishment.</div>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
