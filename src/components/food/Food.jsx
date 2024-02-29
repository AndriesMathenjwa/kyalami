import React, { useState } from "react";
import "./food.css";
import Navbar from "../navbar/Navbar";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import mainpic from "../../photos/food2.jpeg";

const Food = ({ foodImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(foodImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === foodImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      <div className="food-heading">
        <h1>Every bite, a taste of joy.</h1>

        <img src={mainpic} alt="" className="top-picture" />
      </div>
      {openModal && (
        <div className="sliderWrap">
          <FaTimes className="btnClose" onClick={handleCloseModal} />
          <FaChevronLeft className="btnPrev" onClick={prevSlide} />
          <FaChevronRight className="btnNext" onClick={nextSlide} />
          <div className="fullScreenImage">
            <img src={foodImages[slideNumber].img} alt="" />
          </div>
        </div>
      )}

      <div className="galleryWrap">
        {foodImages &&
          foodImages.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Food;
