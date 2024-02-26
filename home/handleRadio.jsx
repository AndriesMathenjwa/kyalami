import React, { useState, useEffect } from 'react';

const handleRadio = () => {
var counter = 1;
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter((prevCounter) => (prevCounter % 4) + 1);
        }, 2000);

           // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
}, []);
    return (
        <div>
          <input type='radio' name='radio-btn' id={ 'radio1' +counter } checked={true} />
          <input type='radio' name='radio-btn' id='radio2'/>
          <input type='radio' name='radio-btn' id='radio3' />
          <input type='radio' name='radio-btn' id='radio4' />
           
        {/* Other JSX elements */}
      </div>
    )};

    export default handleRadio;