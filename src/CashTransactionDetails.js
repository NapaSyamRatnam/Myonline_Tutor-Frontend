


// import React, { useState } from 'react';
// import axios from 'axios';

// function CashTransactionDetails() {
//   const [acknowledgmentNumber, setAcknowledgmentNumber] = useState('');
//   const [cashTransaction, setCashTransaction] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleInputChange = (event) => {
//     setAcknowledgmentNumber(event.target.value);
//   };

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:8082/cash/get/${acknowledgmentNumber}`);
//       if (response.data) {
//         setCashTransaction(response.data);
//         setError('');
//       } else {
//         setError('No data found for the provided acknowledgment number.');
//       }
//     } catch (error) {
//       console.error('Error fetching cash transaction:', error);
//       setError('Error fetching cash transaction. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (acknowledgmentNumber.trim() !== '') {
//       fetchData();
//     } else {
//       setError('Please enter an acknowledgment number.');
//     }
//   };

//   const handlePrint = () => {
//     const printContent = getCashTransactionPrintContent();
//     const printWindow = window.open('', '_blank');
//     printWindow.document.open();
//     printWindow.document.write(printContent);
//     printWindow.document.close();
//     printWindow.print();
//   };

//   const getCashTransactionPrintContent = () => {
//     if (!cashTransaction) return '';

//     return `
//       <html>
//         <head>
//           <title>Cash Transaction Details</title>
//           <style>
//             body { font-family: Arial, sans-serif; }
//             .transaction-details { margin-bottom: 20px; }
//             .header { text-align: center; margin-bottom: 20px; }
//             .header img { max-width: 200px; height: auto; }
//             h1, p { margin: 0; }
//             .transaction-details { margin-bottom: 20px; }
//           </style>
//         </head>
//         <body>
//           <div class="header">
//           <h5></h5>
//             <img src="https://example.com/logo.png" alt="Logo">
//             <h5></h5>
//             <h5></h5>
//             <h1>My Online Tutor Reciept</h1>
//           </div>
//           <div class="transaction-details">
//           <h1>Arjun Methuku</h1>
//           <h5></h5>
//             <p><strong>ID:</strong> ${cashTransaction.id}</p>
//             <h5></h5>
//             <p><strong>Acknowledgment:</strong> ${cashTransaction.acknowledgment}</p>
//             <h5></h5>
//             <p><strong>Amount:</strong> ${cashTransaction.amount}</p>
//             <h5></h5>
//             <p><strong>Currency:</strong> ${cashTransaction.currency}</p>
//             <h5></h5>
//             <p><strong>Courses:</strong> ${cashTransaction.courses ? cashTransaction.courses.join(', ') : ''}</p>
//             <h5></h5>
//             <p><strong>GST:</strong> ${cashTransaction.gst}</p>
//             <h5></h5>
//             <p><strong>Grand Total:</strong> ${cashTransaction.grandTotal}</p>
//           </div>
//         </body>
//       </html>
//     `;
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Enter Acknowledgment Number:
//           <input
//             type="text"
//             value={acknowledgmentNumber}
//             onChange={handleInputChange}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       {error && <p>{error}</p>}
//       {loading ? (
//         <p>Loading...</p>
//       ) : cashTransaction ? (
//         <div>
//           <div className="transaction-details">
//           <h5></h5>
//           <h5></h5>
//           <h5></h5>
//           <h5></h5>
//             <h2>My Online Tutor Reciept</h2>
//             <p><strong>ID:</strong> {cashTransaction.id}</p>
//             <p><strong>Acknowledgment:</strong> {cashTransaction.acknowledgment}</p>
//             <p><strong>Amount:</strong> {cashTransaction.amount}</p>
//             <p><strong>Currency:</strong> {cashTransaction.currency}</p>
//             <p><strong>Courses:</strong> {cashTransaction.courses ? cashTransaction.courses.join(', ') : ''}</p>
//             <p><strong>GST:</strong> {cashTransaction.gst}</p>
//             <p><strong>Grand Total:</strong> {cashTransaction.grandTotal}</p>
//           </div>
//           <h5></h5>
//           <h5></h5>
//           <h5></h5>
//           <h5></h5>
//           <button onClick={handlePrint}>Print</button>
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default CashTransactionDetails;












// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import axios from 'axios';

// function CashTransactionDetails() {
//   const navigate = useNavigate(); // Initialize the useNavigate hook
//   const [acknowledgmentNumber, setAcknowledgmentNumber] = useState('');
//   const [cashTransaction, setCashTransaction] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleInputChange = (event) => {
//     setAcknowledgmentNumber(event.target.value);
//   };

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:8082/cash/get/${acknowledgmentNumber}`);
//       if (response.data) {
//         setCashTransaction(response.data);
//         setError('');
//       } else {
//         setError('No data found for the provided acknowledgment number.');
//       }
//     } catch (error) {
//       console.error('Error fetching cash transaction:', error);
//       setError('Error fetching cash transaction. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (acknowledgmentNumber.trim() !== '') {
//       fetchData();
//     } else {
//       setError('Please enter an acknowledgment number.');
//     }
//   };

//   const handlePrint = () => {
//     const printContent = getCashTransactionPrintContent();
//     const printWindow = window.open('', '_blank');
//     printWindow.document.open();
//     printWindow.document.write(printContent);
//     printWindow.document.close();
//     printWindow.print();
//   };

//   const getCashTransactionPrintContent = () => {
//     if (!cashTransaction) return '';

//     return `
//       <html>
//         <head>
//           <title>Cash Transaction Details</title>
//           <style>
//             body { font-family: Arial, sans-serif; }
//             .transaction-details { margin-bottom: 20px; }
//             .header { text-align: center; margin-bottom: 20px; }
//             .header img { max-width: 200px; height: auto; }
//             h1, p { margin: 0; }
//             .transaction-details { margin-bottom: 20px; }
//           </style>
//         </head>
//         <body>
//           <div class="header">
//             <h5></h5>
//             <img src="https://example.com/logo.png" alt="Logo">
//             <h5></h5>
//             <h5></h5>
//             <h1>My Online Tutor Reciept</h1>
//           </div>
//           <div class="transaction-details">
//             <h1>Arjun Methuku</h1>
//             <h5></h5>
//             <p><strong>ID:</strong> ${cashTransaction.id}</p>
//             <p><strong>Acknowledgment:</strong> ${cashTransaction.acknowledgment}</p>
//             <p><strong>Amount:</strong> ${cashTransaction.amount}</p>
//             <p><strong>Currency:</strong> ${cashTransaction.currency}</p>
//             <p><strong>Courses:</strong> ${cashTransaction.courses ? cashTransaction.courses.join(', ') : ''}</p>
//             <p><strong>GST:</strong> ${cashTransaction.gst}</p>
//             <p><strong>Grand Total:</strong> ${cashTransaction.grandTotal}</p>
//           </div>
//         </body>
//       </html>
//     `;
//   };

//   // Redirect to LoginUser component
//   const handleRedirectToLogin = () => {
//     navigate('/LoginUser');
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} style={{marginTop:'10%',height:'300px',width:'500px'}}>
//         <label>
//           Enter Acknowledgment Number:
//           <input
//             type="text"
//             value={acknowledgmentNumber}
//             onChange={handleInputChange}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       {error && <p>{error}</p>}
//       {loading ? (
//         <p>Loading...</p>
//       ) : cashTransaction ? (
//         <div>
//           <div className="transaction-details">
//             <h2>My Online Tutor Receipt</h2>
//             <p><strong>ID:</strong> {cashTransaction.id}</p>
//             <p><strong>Acknowledgment:</strong> {cashTransaction.acknowledgment}</p>
//             <p><strong>Amount:</strong> {cashTransaction.amount}</p>
//             <p><strong>Currency:</strong> {cashTransaction.currency}</p>
//             <p><strong>Courses:</strong> {cashTransaction.courses ? cashTransaction.courses.join(', ') : ''}</p>
//             <p><strong>GST:</strong> {cashTransaction.gst}</p>
//             <p><strong>Grand Total:</strong> {cashTransaction.grandTotal}</p>
//           </div>
//           <button onClick={handlePrint}>Print</button>
//           <h1></h1>
//           <button onClick={handleRedirectToLogin}>Go to Login</button> {/* Redirect button */}
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default CashTransactionDetails;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'; // Import Link
// import './CashTransactionDetails.css'; // Import CSS file for UserDetailsPage

// function CashTransactionDetails() {
//   const [cashTransaction, setCashTransaction] = useState(null);
//   const [userDetails, setUserDetails] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [currentDateTime, setCurrentDateTime] = useState('');

//   useEffect(() => {
//     fetchData();
//     fetchUserDetails();
//     getCurrentDateTime();
//   }, []);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:8080/cash/latest');
//       if (response.data) {
//         setCashTransaction(response.data);
//         setError('');
//       } else {
//         setError('No data found for the latest cash transaction.');
//       }
//     } catch (error) {
//       console.error('Error fetching latest cash transaction:', error);
//       setError('Error fetching latest cash transaction. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchUserDetails = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/users/latest');
//       if (response.data) {
//         setUserDetails(response.data);
//         setError('');
//       } else {
//         setError('No data found for the latest user.');
//       }
//     } catch (error) {
//       console.error('Error fetching latest user:', error);
//       setError('Error fetching latest user. Please try again.');
//     }
//   };

//   const getCurrentDateTime = () => {
//     const now = new Date();
//     setCurrentDateTime(now.toLocaleString());
//   };

//   const handlePrint = () => {
//     const printContent = getCashTransactionPrintContent();
//     const printWindow = window.open('', '_blank');
//     printWindow.document.open();
//     printWindow.document.write(printContent);
//     printWindow.document.close();
//     printWindow.print();
//   };

//   const getCashTransactionPrintContent = () => {
//     if (!cashTransaction || !userDetails) return '';

//     return `
//       <html>
//         <head>
//           <title>Cash Transaction Details</title>
//           <style>
//             .user-details-page { font-family: Arial, sans-serif; }
//             .user-details-header { text-align: center; margin-bottom: 20px; }
//             .user-details-header img { max-width: 200px; height: auto; }
//             .user-details-content { margin-bottom: 20px; }
//             .user-details-content h1, p { margin: 0; }
//             .login-button { background-color: green; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; }
//           </style>
//         </head>
//         <body>
//           <div class="user-details-header">
//             <h5>${currentDateTime}</h5>
//             <img src="https://example.com/logo.png" alt="Logo">
//             <h5></h5>
//             <h5></h5>
//             <h1>My Online Tutor Receipt</h1>
//           </div>
//           <div class="user-details-content">
            
//             <div>
//              <p><strong>Name:</strong> <strong>${userDetails.firstName} ${userDetails.lastName}</strong></p>
//              <p></p>
//               <p><strong>ID:</strong> ${cashTransaction.id}</p>
//               <p></p>
//               <p><strong>Acknowledgment:</strong> ${cashTransaction.acknowledgment}</p>
//               <p></p>
//               <p><strong>Amount:</strong> ${cashTransaction.amount}</p>
//               <p></p>
//               <p><strong>Currency:</strong> ${cashTransaction.currency}</p>
//               <p></p>
//               <p><strong>Courses:</strong> ${cashTransaction.courses ? cashTransaction.courses.join(', ') : ''}</p>
//               <p></p>
//               <p><strong>GST:</strong> ${cashTransaction.gst}</p>
//               <p></p>
//               <p><strong>Grand Total:</strong> ${cashTransaction.grandTotal}</p>
//             </div>
//           </div>
         
//         </body>
//       </html>
//     `;
//   };

//   return (
//     <div className="tutor-css">
//       <h2>My Online Tutor Receipt</h2>
//       {error && <p>{error}</p>}
//       {loading ? (
//         <p>Loading...</p>
//       ) : cashTransaction && userDetails ? (
//         <div>
//           <h5>${currentDateTime}</h5>
//           <div className="user-details-content">
//             <div>
//               <p><strong>Name:</strong>{userDetails.firstName} {userDetails.lastName}</p>
//               <p><strong>ID:</strong> {cashTransaction.id}</p>
//               <p><strong>Acknowledgment:</strong> {cashTransaction.acknowledgment}</p>
//               <p><strong>Amount:</strong> {cashTransaction.amount}</p>
//               <p><strong>Currency:</strong> {cashTransaction.currency}</p>
//               <p><strong>Courses:</strong> {cashTransaction.courses ? cashTransaction.courses.join(', ') : ''}</p>
//               <p><strong>GST:</strong> {cashTransaction.gst}</p>
//               <p><strong>Grand Total:</strong> {cashTransaction.grandTotal}</p>
//             </div>
//           </div>
//           <h5></h5>
//           <h5></h5>
//           <h5></h5>
//           <h5></h5>
//           <button onClick={handlePrint}>Print</button>
//           <Link to="/LoginUser" className="login-button">Login</Link> {/ Login button /}
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default CashTransactionDetails;















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link
import './CashTransactionDetails.css'; // Import CSS file for UserDetailsPage

function CashTransactionDetails() {
  const [cashTransaction, setCashTransaction] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    fetchData();
    fetchUserDetails();
    getCurrentDateTime();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://3.7.14.21:8080/cash/latest');
      if (response.data) {
        setCashTransaction(response.data);
        setError('');
      } else {
        setError('No data found for the latest cash transaction.');
      }
    } catch (error) {
      console.error('Error fetching latest cash transaction:', error);
      setError('Error fetching latest cash transaction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get('http://3.7.14.21:8080/api/users/latest');
      if (response.data) {
        setUserDetails(response.data);
        setError('');
      } else {
        setError('No data found for the latest user.');
      }
    } catch (error) {
      console.error('Error fetching latest user:', error);
      setError('Error fetching latest user. Please try again.');
    }
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    setCurrentDateTime(now.toLocaleString());
  };

  const handlePrint = () => {
    const printContent = getCashTransactionPrintContent();
    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };

  const getCashTransactionPrintContent = () => {
    if (!cashTransaction || !userDetails) return '';

    return `
      <html>
        <head>
          <title>Cash Transaction Details</title>
          <style>
            .user-details-page { font-family: Arial, sans-serif; }
            .user-details-header { text-align: center; margin-bottom: 20px; }
            .user-details-header img { max-width: 200px; height: auto; }
            .user-details-content { margin-bottom: 20px; }
            .user-details-content h1, p { margin: 0; }
            .login-button { background-color: green; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="user-details-header">
            <h5>${currentDateTime}</h5>
            <img src="https://example.com/logo.png" alt="Logo">
            <h5></h5>
            <h5></h5>
            <h1>My Online Tutor Receipt</h1>
          </div>
          <div class="user-details-content">
            
            <div>
             <p><strong>Name:</strong> <strong>${userDetails.firstName} ${userDetails.lastName}</strong></p>
             <p></p>
              <p><strong>ID:</strong> ${cashTransaction.id}</p>
              <p></p>
              <p><strong>Acknowledgment:</strong> ${cashTransaction.acknowledgment}</p>
              <p></p>
              <p><strong>Amount:</strong> ${cashTransaction.amount}</p>
              <p></p>
              <p><strong>Currency:</strong> ${cashTransaction.currency}</p>
              <p></p>
              <p><strong>Courses:</strong> ${cashTransaction.courses ? cashTransaction.courses.join(', ') : ''}</p>
              <p></p>
              <p><strong>GST:</strong> ${cashTransaction.gst}</p>
              <p></p>
              <p><strong>Grand Total:</strong> ${cashTransaction.grandTotal}</p>
            </div>
          </div>
         
        </body>
      </html>
    `;
  };

  return (
    <div className="tutor-css">
      <h2>My Online Tutor Receipt</h2>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : cashTransaction && userDetails ? (
        <div>
          <h5>${currentDateTime}</h5>
          <div className="user-details-content">
            <div>
              <p><strong>Name:</strong>{userDetails.firstName} {userDetails.lastName}</p>
              <p><strong>ID:</strong> {cashTransaction.id}</p>
              <p><strong>Acknowledgment:</strong> {cashTransaction.acknowledgment}</p>
              <p><strong>Amount:</strong> {cashTransaction.amount}</p>
              <p><strong>Currency:</strong> {cashTransaction.currency}</p>
              <p><strong>Courses:</strong> {cashTransaction.courses ? cashTransaction.courses.join(', ') : ''}</p>
              <p><strong>GST:</strong> {cashTransaction.gst}</p>
              <p><strong>Grand Total:</strong> {cashTransaction.grandTotal}</p>
            </div>
          </div>
          <h5></h5>
          <h5></h5>
          <h5></h5>
          <h5></h5>
          <button onClick={handlePrint}>Print</button>
          <Link to="/LoginUser" className="login-button">Login</Link> {/* Login button */}
        </div>
      ) : null}
    </div>
  );
}

export default CashTransactionDetails;
