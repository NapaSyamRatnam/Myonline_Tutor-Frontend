
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// function Pay() {
//   const location = useLocation();
//   const { selectedCourses } = location.state;
//   const [amount, setAmount] = useState('');
//   const [currency, setCurrency] = useState('INR');
//   const [cardNumber, setCardNumber] = useState('');
//   const [cardHolder, setCardHolder] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCVV] = useState('');
//   const [error, setError] = useState('');

//   const handleAmountChange = (event) => {
//     setAmount(event.target.value);
//   };

//   const handleCurrencyChange = (event) => {
//     setCurrency(event.target.value);
//   };

//   const handleCardNumberChange = (event) => {
//     const value = event.target.value.replace(/\s/g, ''); // Remove spaces from card number
//     if (/^\d{0,15}$/.test(value)) {
//       setCardNumber(value);
//     }
//   };

//   const handleCardHolderChange = (event) => {
//     const value = event.target.value.replace(/[^a-zA-Z\s]/g, ''); // Allow only letters and spaces for card holder
//     setCardHolder(value);
//   };

//   const handleExpiryDateChange = (event) => {
//     setExpiryDate(event.target.value);
//   };

//   const handleCVVChange = (event) => {
//     const value = event.target.value.replace(/\D/g, '').slice(0, 3); // Allow only digits for CVV, max length 3
//     setCVV(value);
//   };

//   const handlePayment = async () => {
//     // Basic validation
//     if (!amount || !currency || !cardNumber || !cardHolder || !expiryDate || !cvv) {
//       setError('Please fill in all fields');
//       setTimeout(() => {
//         setError('');
//       }, 3000); // Clear error after 3 seconds
//       return;
//     }

//     // Additional validations
//     if (cardNumber.length !== 15) {
//       setError('Card number should be 15 digits');
//       setTimeout(() => {
//         setError('');
//       }, 3000);
//       return;
//     }

//     if (cvv.length !== 3) {
//       setError('CVV should be 3 digits');
//       setTimeout(() => {
//         setError('');
//       }, 3000);
//       return;
//     }

//     // Send data to backend
//     try {
//       const response = await axios.post('http://localhost:8082/cash', {
//         amount,
//         currency,
//         courses: selectedCourses,
//         cardNumber,
//         cardHolder,
//         expiryDate,
//         cvv,
//       });
//       console.log('Payment successful:', response.data);
//       setError(''); // Clear any previous errors
//       window.alert('Details Matched'); // Show pop-up
//     } catch (error) {
//       console.error('Payment failed:', error.message);
//       setError('Payment failed. Please try again.'); // Display error message
//     }
//   };

//   return (
//     <div className="pay-container">
//       <h1 className="pay-title">Payment Details</h1>
//       {error && <div className="pay-error-message" style={{ color: 'red' }}>{error}</div>}
//       <h2>Selected Courses:</h2>
//       <ul className="selected-courses-list">
//         {selectedCourses.map((course, index) => (
//           <li key={index}>{course}</li>
//         ))}
//       </ul>
//       <div className="form-group">
//         <label htmlFor="amount" className="pay-label">Amount:</label>
//         <input
//           type="text"
//           className="pay-input"
//           id="amount"
//           value={amount}
//           onChange={handleAmountChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="currency" className="pay-label">Currency:</label>
//         <select
//           className="pay-input"
//           id="currency"
//           value={currency}
//           onChange={handleCurrencyChange}
//         >
//           <option value="INR">INR</option>
      
//         </select>
//       </div>
//       <div className="form-group">
//         <label htmlFor="cardNumber" className="pay-label">Card Number:</label>
//         <input
//           type="text"
//           className="pay-input"
//           id="cardNumber"
//           value={cardNumber}
//           onChange={handleCardNumberChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="cardHolder" className="pay-label">Card Holder:</label>
//         <input
//           type="text"
//           className="pay-input"
//           id="cardHolder"
//           value={cardHolder}
//           onChange={handleCardHolderChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="expiryDate" className="pay-label">Expiry Date:</label>
//         <input
//           type="text"
//           className="pay-input"
//           id="expiryDate"
//           value={expiryDate}
//           onChange={handleExpiryDateChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="cvv" className="pay-label">CVV:</label>
//         <input
//           type="text"
//           className="pay-input"
//           id="cvv"
//           value={cvv}
//           onChange={handleCVVChange}
//         />
//       </div>
//       <button className="pay-button" onClick={handlePayment}>
//         Proceed to Payment
//       </button>
//     </div>
//   );
// }

// export default Pay;








// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Pay.css';

// function Pay() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { selectedCourses } = location.state;
//   const [amount, setAmount] = useState('');
//   const [currency, setCurrency] = useState('INR');
//   const [cardNumber, setCardNumber] = useState('');
//   const [cardHolder, setCardHolder] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCVV] = useState('');
//   const [error, setError] = useState('');

//   const handleAmountChange = (event) => {
//     setAmount(event.target.value);
//   };

//   const handleCurrencyChange = (event) => {
//     setCurrency(event.target.value);
//   };

//   const handleCardNumberChange = (event) => {
//     const value = event.target.value.replace(/\s/g, '');
//     if (/^\d{0,15}$/.test(value)) {
//       setCardNumber(value);
//     }
//   };

//   const handleCardHolderChange = (event) => {
//     const value = event.target.value.replace(/[^a-zA-Z\s]/g, '');
//     setCardHolder(value);
//   };

//   const handleExpiryDateChange = (event) => {
//     setExpiryDate(event.target.value);
//   };

//   const handleCVVChange = (event) => {
//     const value = event.target.value.replace(/\D/g, '').slice(0, 3);
//     setCVV(value);
//   };

//   const handlePayment = async () => {
//     if (!amount || !currency || !cardNumber || !cardHolder || !expiryDate || !cvv) {
//       setError('Please fill in all fields');
//       setTimeout(() => {
//         setError('');
//       }, 3000);
//       return;
//     }

//     if (cardNumber.length !== 15) {
//       setError('Card number should be 15 digits');
//       setTimeout(() => {
//         setError('');
//       }, 3000);
//       return;
//     }

//     if (cvv.length !== 3) {
//       setError('CVV should be 3 digits');
//       setTimeout(() => {
//         setError('');
//       }, 3000);
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8082/cash', {
//         amount,
//         currency,
//         courses: selectedCourses,
//         cardNumber,
//         cardHolder,
//         expiryDate,
//         cvv,
//       });
//       console.log('Payment successful:', response.data);
//       setError('');
//       window.alert(`Payment successful. Acknowledgment Number: ${response.data.acknowledgment}`);
//       navigate('/CashTransactionDetails');
//     } catch (error) {
//       console.error('Payment failed:', error.message);
//       setError('Payment failed. Please try again.');
//     }
//   };

//   return (
//     <div className="pay-container">
//       <h1 className="pay-title">Payment Details</h1>
//       {error && <div className="pay-error-message" style={{ color: 'red' }}>{error}</div>}
//       {Array.isArray(selectedCourses) && selectedCourses.length > 0 ? (
//         <div>
//           <h2>Selected Courses:</h2>
//           <ul className="selected-courses-list">
//             {selectedCourses.map((course, index) => (
//               <li key={index}>{course}</li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <div>No courses selected</div>
//       )}
//       <div className="form-group">
//         <label htmlFor="amount" className="pay-label">Amount:</label>
//         <input
//           type="text"
//           className="pay-input"
//           id="amount"
//           value={amount}
//           onChange={handleAmountChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="currency" className="pay-label">Currency:</label>
//         <select
//           className="pay-input"
//           id="currency"
//           value={currency}
//           onChange={handleCurrencyChange}
//         >
//           <option value="INR">INR</option>
//           {/* Add more currency options if needed */}
//         </select>
//       </div>
//       <div className="form-group">
//         <label htmlFor="cardNumber" className="pay-label">Card Number:</label>
//         <input
//           type="text"
//           className="pay-input"
//           id="cardNumber"
//           value={cardNumber}
//           onChange={handleCardNumberChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="cardHolder" className="pay-label">Card Holder:</label>
//         <input
//           type="text"
//           className="pay-input"
//           id="cardHolder"
//           value={cardHolder}
//           onChange={handleCardHolderChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="expiryDate" className="pay-label">Expiry Date:</label>
//         <input
//           type="text"
//           className="pay-input"
//           id="expiryDate"
//           value={expiryDate}
//           onChange={handleExpiryDateChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="cvv" className="pay-label">CVV:</label>
//         <input
//           type="text"
//           className="pay-input"
//           id="cvv"
//           value={cvv}
//           onChange={handleCVVChange}
//         />
//       </div>
//       <button className="pay-button" onClick={handlePayment}>
//         Proceed to Payment
//       </button>
//     </div>
//   );
// }

// export default Pay;




import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Pay.css'; 

function Pay() {
  const location = useLocation();
  const navigate = useNavigate();
  const { firstName, lastName, selectedCourses, selectedAmount } = location.state;

  const [amount, setAmount] = useState(selectedAmount);
  const [currency, setCurrency] = useState('INR');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const totalAmount = selectedCourses.reduce((acc, course) => acc + course.price, 0);
    setAmount(totalAmount);
  }, [selectedCourses]);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    const value = event.target.value.replace(/\s/g, '');
    if (/^\d{0,15}$/.test(value)) {
      setCardNumber(value);
    }
  };

  const handleCardHolderChange = (event) => {
    const value = event.target.value.replace(/[^a-zA-Z\s]/g, '');
    setCardHolder(value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCVVChange = (event) => {
    const value = event.target.value.replace(/\D/g, '').slice(0, 3);
    setCVV(value);
  };

  const handlePayment = async () => {
    if (!currency || !cardNumber || !cardHolder || !expiryDate || !cvv) {
      setError('Please fill in all fields');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }

    try {
      const response = await axios.post('http://192.168.138.130:8080/cash', {
        firstName, // Sending first name to backend
        lastName, // Sending last name to backend
        amount: selectedAmount,
        currency,
        courses: selectedCourses,
        cardNumber,
        cardHolder,
        expiryDate,
        cvv,
      });
      console.log('Payment successful:', response.data);
      setError('');
      window.alert(`Payment successful.`);
      navigate('/CashTransactionDetails');
    } catch (error) {
      console.error('Payment failed:', error.message);
      setError('Payment failed. Please try again.');
    }
  };

  return (
    <div className="pay-container">
     
      <h1>Hello, {firstName} {lastName}</h1>
      <h3 className="pay-title">Enter Your Payment Details</h3>
      {error && <div className="pay-error-message" style={{ color: 'red' }}>{error}</div>}
      <h5>Selected Courses:</h5>
      <ul className="selected-courses-list">
        {selectedCourses.map((course, index) => (
          <li key={index}>{course.name} - ${course.price}</li>
        ))}
      </ul>
      <div className="form-group">
        <label htmlFor="currency" className="pay-label">Currency:</label>
        <select
          className="pay-input"
          id="currency"
          value={currency}
          onChange={handleCurrencyChange}
        >
          <option value="INR">INR</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="cardNumber" className="pay-label">Card Number:</label>
        <input
          type="text"
          className="pay-input"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cardHolder" className="pay-label">Card Holder:</label>
        <input
          type="text"
          className="pay-input"
          id="cardHolder"
          value={cardHolder}
          onChange={handleCardHolderChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="expiryDate" className="pay-label">Expiry Date:</label>
        <input
          type="text"
          className="pay-input"
          id="expiryDate"
          value={expiryDate}
          onChange={handleExpiryDateChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cvv" className="pay-label">CVV:</label>
        <input
          type="text"
          className="pay-input"
          id="cvv"
          value={cvv}
          onChange={handleCVVChange}
        />
      </div>
      <button className="pay-button" onClick={handlePayment}>
        Proceed to Payment
      </button>
    </div>
  );
}

export default Pay;









