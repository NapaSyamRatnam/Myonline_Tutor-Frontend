import React, { useState } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function PayOne() {
  const location = useLocation();
  const { selectedCourses, selectedAmount } = location.state;

  const [cardDetails, setCardDetails] = useState({
    currency: '',
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!cardDetails.currency.trim()) {
      errors.currency = 'Currency is required';
    }

    if (!/^\d{16}$/.test(cardDetails.cardNumber.trim())) {
      errors.cardNumber = 'Card number must be 16 digits';
    }

    if (!/^[a-zA-Z\s]+$/.test(cardDetails.cardHolder.trim())) {
      errors.cardHolder = 'Card holder name can only contain letters and spaces';
    }

    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear() % 100;
    const [expiryMonth, expiryYear] = cardDetails.expiryDate.split('/');
    if (!expiryMonth || !expiryYear || parseInt(expiryMonth) < 1 || parseInt(expiryMonth) > 12 || parseInt(expiryYear) < currentYear || (parseInt(expiryYear) === currentYear && parseInt(expiryMonth) < currentMonth)) {
      errors.expiryDate = 'Expiry date must be a valid future date in MM/YY format';
    }

    if (!/^\d{3}$/.test(cardDetails.cvv.trim())) {
      errors.cvv = 'CVV must be 3 digits';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://192.168.138.130:8080/api/pays/payregistration', {
          currency: cardDetails.currency,
          cardNumber: cardDetails.cardNumber,
          cardHolder: cardDetails.cardHolder,
          expiryDate: cardDetails.expiryDate,
          cvv: cardDetails.cvv,
          selectedCourses: selectedCourses, // Convert selectedCourses array to string
          selectedAmount: selectedAmount
        });
        console.log('Payment processed successfully:', response.data);
        window.alert('Payment successful!');
        window.location.href = '/Get'; // Redirect to Courses.js page after successful payment
      } catch (error) {
        console.error('Error processing payment:', error);
        window.alert('Failed to process payment. Please try again.');
      }
    } else {
      console.log("Form validation failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  return (
    <div className="tutor-css">
      <h1>Payment Details</h1>
      <div>
        <h3>Selected Courses:</h3>
        <ul>
          {selectedCourses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Selected Amount:</h3>
        <p>{selectedAmount}</p>
      </div>
      <div>
        <h3>Enter Card Details:</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Currency:</label>
            <input type="text" name="currency" value={cardDetails.currency} onChange={handleChange} />
            {formErrors.currency && <span style={{ color: 'red' }}>{formErrors.currency}</span>}
          </div>
          <div>
            <label>Card Number:</label>
            <input type="text" name="cardNumber" value={cardDetails.cardNumber} onChange={handleChange} />
            {formErrors.cardNumber && <span style={{ color: 'red' }}>{formErrors.cardNumber}</span>}
          </div>
          <div>
            <label>Card Holder:</label>
            <input type="text" name="cardHolder" value={cardDetails.cardHolder} onChange={handleChange} />
            {formErrors.cardHolder && <span style={{ color: 'red' }}>{formErrors.cardHolder}</span>}
          </div>
          <div>
            <label>Expiry Date:</label>
            <input type="text" name="expiryDate" value={cardDetails.expiryDate} onChange={handleChange} placeholder="MM/YY" />
            {formErrors.expiryDate && <span style={{ color: 'red' }}>{formErrors.expiryDate}</span>}
          </div>
          <div>
            <label>CVV:</label>
            <input type="text" name="cvv" value={cardDetails.cvv} onChange={handleChange} />
            {formErrors.cvv && <span style={{ color: 'red' }}>{formErrors.cvv}</span>}
          </div>
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    </div>
  );
}

export default PayOne;