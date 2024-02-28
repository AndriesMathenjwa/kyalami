import React from "react";
import "./foodPage.css";
import Navbar from "../../components/navbar/Navbar";

const FoodPage = () => {
  return (
    <div>
      <Navbar />
      <div className="food-heading">
        <h1>Every bite, a taste of joy.</h1>
      </div>
    </div>
  );
};

export default FoodPage;
