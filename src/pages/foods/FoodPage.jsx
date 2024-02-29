import React from "react";
import "./foodPage.css";
import Navbar from "../../components/navbar/Navbar";
import Food from "../../components/food/Food";
import { foodImages } from '../../files/food';
import Footer from "../../components/footer/Footer";

const FoodPage = () => {
  return (
    <div>
      <Navbar />
      <div className="food-main">
        <Food foodImages={foodImages}/>
      </div>
      <div className="fcontainer">
        <Footer />
      </div>
    </div>
  );
};

export default FoodPage;
