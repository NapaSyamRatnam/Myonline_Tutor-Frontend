
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './PaymentSubmit.css'; // Make sure to import the correct CSS file

const PaymentSubmit = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAmountSelection = (amount) => {
    setSelectedAmount(amount);
    setShowConfirmation(true);
  };

  const handleConfirmPayment = () => {
    // Implement your logic for processing the selected amount
    // This could involve making an API call, updating state, etc.
    console.log(`Selected amount confirmed: ₹${selectedAmount}`);
  };

  return (
    <div className="amount-selection-container">

      <h2 className="page-title">Amount Selection</h2>

      {showConfirmation ? (
        <div className="confirmation-container">
          <p className="confirmation-message">You have selected:  ₹ {selectedAmount}</p>
         <Link to='/SuccessPage'> <button className="confirm-button" onClick={handleConfirmPayment}>Confirm Payment</button></Link>
        </div>
      ) : (
        <div className="amount-options-container">
          <button className="select-button" onClick={() => handleAmountSelection(10)}>Select ₹ 10 </button>
          <button className="select-button" onClick={() => handleAmountSelection(20)}>Select ₹ 20</button>
          <button className="select-button" onClick={() => handleAmountSelection(50)}>Select ₹ 50</button>
          <button className="select-button" onClick={() => handleAmountSelection(100)}>Select ₹ 100</button>
        </div>
      )}
    </div>
  );
};

export default PaymentSubmit;
