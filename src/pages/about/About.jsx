import React from "react";
import "./about.css";
import { TbTargetArrow } from "react-icons/tb";
import { PiSelectionBackground } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import AboutPic from "../../photos/About.jpeg";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="about-content">
        <h2 className="about-text">About Us</h2>
        <img src={AboutPic} alt="About Us" className="about-image" />
      </div>
      <div className="icon-container">
        <span className="icon">
          <TbTargetArrow />
        </span>
        <p className="text-heading">Mission</p>
      </div>
      <div className="card">
        <p>
          Our mission is to provide our customers with an up-market shisanyama
          experience by offering delicate service, traditional shisanyama, good
          music and up class ambiance
        </p>
      </div>

      <div>
        <span className="icon">
          <FaRegEye />
        </span>
        <p className="text-heading">Vision</p>
      </div>
      <div className="card">
        <p>
          To become the best customer centric establishment, to serve our
          customers with pride and keep on growing an everlasting with all
          patrons
        </p>
      </div>

      <div>
        <span className="icon">
          <PiSelectionBackground />
        </span>
        <p className="text-heading">Our Background</p>
      </div>
      <div className="card">
        <p>
          kyalamishisanyama is an ongrowing brand established in 2023 and prides
          its -self in providing not on unique music, traditional shisanyama &
          african cuisine but also in redefining the african day vide. we
          specialise in giving our customers a flavoured shisanyama experience..
        </p>
      </div>
      <div className="fcontainer">
        <Footer />
      </div>
    </div>
  );
};

export default About;
