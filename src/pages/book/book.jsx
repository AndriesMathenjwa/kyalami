import React, { useState } from 'react';
import './book.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Swal from 'sweetalert2';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
    section: ''
  });

  const Reservebox = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        title: "Invalid Email",
        text: "Please enter a valid email address",
        icon: "error",
        customClass: {
          popup: 'custom-popup',
          confirmButton: 'btn-white',
          cancelButton: 'btn-white',
        },
        buttonsStyling: false,
      });
      return;
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      Swal.fire({
        title: "Invalid Phone Number",
        text: "Please enter a valid 10-digit phone number",
        icon: "error",
        customClass: {
          popup: 'custom-popup',
          confirmButton: 'btn-white',
          cancelButton: 'btn-white',
        },
        buttonsStyling: false,
      });
      return;
    }
    // Validate required fields
    const requiredFields = ['name', 'surname', 'email', 'phone', 'guests', 'date', 'time', 'section'];
    const missingFields = requiredFields.filter(field => !formData[field]);
  
    if (missingFields.length > 0) {
      Swal.fire({
        title: "Missing Information",
        text: `Please fill in all required fields: ${missingFields.join(', ')}`,
        icon: "error",
        customClass: {
          popup: 'custom-popup',
          confirmButton: 'btn-white',
          cancelButton: 'btn-white',
        },
        buttonsStyling: false,
      });
      return;
    }
  
    Swal.fire({
      title: "Confirm reservation",
      text: `Are you sure you want to reserve in the ${formData.section} section on ${formData.date} at ${formData.time}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33", // Orange background
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reserve it!",
      cancelButtonText: "No",
      customClass: {
        popup: 'custom-popup',
        confirmButton: 'btn-white',
        cancelButton: 'btn-white',
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Reservation confirmed",
          text: "Table reserved",
          icon: "success",
          confirmButtonColor: "#ffffff", 
          confirmButtonClass: 'btn-orange',
          buttonsStyling: false,
          customClass: {
            popup: 'custom-popup',
            confirmButton: 'btn-white',
            cancelButton: 'btn-white',
          },
          buttonsStyling: false,
        });
      }
    });
  };
  
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleReserveClick = () => {
    if (formData.section) {
      setShowConfirmation(true);
    } else {
      // If no section is selected, show an alert
      alert('Please select a section before confirming the reservation.');
    }
  };

  // Update the formData state when form fields change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleConfirmation = (confirmed) => {
    setShowConfirmation(false);
    if (confirmed) {
      // Handle reservation confirmation logic here
      Reservebox();
    } else {
      // Handle cancellation logic here
      console.log('Reservation cancelled.');
    }
  };


  return (
    <div className="book">
      <Navbar />
      {/* <div className="spaceB"></div> */}
      <div className='heading' style={{ marginTop: '50px', textAlign: 'center' }}>
        <hr />
        <h1>Book/Reserve a table</h1>
        <hr />
      </div>
      <form className="center-form" action="">
        <label className='form_head' htmlFor="">Let's serve you Better!... Welcome.</label><br /><br />
        <input
          className='surnameF'
          type="text"
          name="name"
          placeholder='Name'
          style={{ borderBottom: '1px solid #000', marginTop: '2%' }}
          onChange={handleInputChange}
          required
        /> <br /><br />
        <input
          type="text"
          name="surname"
          placeholder='Surname'
          style={{ borderBottom: '1px solid #000',bordertop: 'none' }}
          onChange={handleInputChange}
          required
        /> <br /><br />
        <input
          type="email"
          name="email"
          placeholder='Email'
          style={{ borderBottom: '1px solid #000' }}
          onChange={handleInputChange}
          required
        /><br /><br />
        <input
          type="text"
          name="phone"
          placeholder='Phone'
          style={{ borderBottom: '1px solid #000' }}
          onChange={handleInputChange}
          required
        /><br /><br />
        <input
          type="number"
          name="guests"
          placeholder='Number of guests'
          style={{ borderBottom: '1px solid #000' }}
          onChange={handleInputChange}
          required
        /><br /><br />
        <hr className='eq'/>
        <input
          className='date'
          type="date"
          name="date"
          style={{ borderBottom: '1px solid #000' }}
          onChange={handleInputChange}
          required
        />
        <input
          className='time'
          type="time"
          name="time"
          style={{ borderBottom: '1px solid #000' }}
          onChange={handleInputChange}
          required
        /><br /><br />
        <label htmlFor="">Please choose section</label>
        <select
          name="section"
          id=""
          placeholder="Please select"
          onChange={handleInputChange}
          required
        >
          <option value="">please select</option>
          <option value="VVIP UPSTAIRS">VVIP UPSTAIRS</option>
          <option value="VIP CABANAS">VIP CABANAS</option>
          <option value="CABANA 1">CABANA 1</option>
          <option value="CABANA 2">CABANA 2</option>
        </select><br /><br />
        <input
          type="text"
          name="specialRequests"
          placeholder='Special Requests'
          style={{ borderBottom: '1px solid #000', marginBottom:'10%' }}
          onChange={handleInputChange}
        /><br /><br />
      </form>
      <button className='book-btn' type='submit' onClick={Reservebox}>Reserve</button>
      <Footer />
    </div>
  );
}

export default Book;