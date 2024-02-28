import React from 'react'
import "./food.css"
import Navbar from '../navbar/Navbar'

const Food = () => {
  return (
    <div>
        <Navbar/>
        <div className="food-heading">
            <h1>Every bite, a taste of joy.</h1>
        </div>
    </div>
  )
}

export default Food