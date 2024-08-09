// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function PaymentDetails() {
//   const [payments, setPayments] = useState([]);

//   useEffect(() => {
//     // Fetch payment details
//     fetchPaymentDetails();
//   }, []);

//   const fetchPaymentDetails = () => {
//     // Assuming you have an API endpoint to fetch payment details
//     axios.get("/api/payments")
//       .then(response => {
//         setPayments(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching payment details:", error);
//       });
//   };

//   return (
//     <>
//     <div className="header8">
//     <label><h1>My Online Tutor</h1></label>
//   </div>
//     <div>
//       <center><h2 style={{fontSize:"40px",backgroundColor:'white',marginTop:'10px'}}>Payment Details</h2></center>
//       <table>
//         <thead>
//           <tr>
//             <th>User ID</th>
//             <th>Username</th>
//             <th>Course Name</th>
//             <th>Payment ID</th>
//             <th>Payment Type</th>
//             <th>Transaction ID</th>
//             <th>Date</th>
//             <th>Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {payments.map(payment => (
//             <tr key={payment.paymentId}>
//               <td>{payment.userId}</td>
//               <td>{payment.username}</td>
//               <td>{payment.courseName}</td>
//               <td>{payment.paymentId}</td>
//               <td>{payment.paymentType}</td>
//               <td>{payment.transactionId}</td>
//               <td>{payment.date}</td>
//               <td>{payment.time}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </>
//   );
// }

// export default PaymentDetails;
import React, { useState, useEffect } from 'react';

const PaymentDetails = () => {
    const [payments, setPayments] = useState([]);

    // Function to fetch payment data from the backend
    const fetchPaymentData = async () => {
        try {
            const response = await fetch('http://3.7.14.21:8080/api/payments/calling');
            if (!response.ok) {
                throw new Error('Failed to fetch payment data');
            }
            const data = await response.json();
            setPayments(data);
        } catch (error) {
            console.error('Error fetching payment data:', error);
        }
    };

    useEffect(() => {
        fetchPaymentData();
    }, []);

    return (
      <>
      <div className="header1">
    <label><h1>My Online Tutor</h1></label>
    </div>
        <div>
            <h2>Payment Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Card Number</th>
                        <th>Expiry</th>
                        <th>CVV</th>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map(payment => (
                        <tr key={payment.id}>
                            <td>{payment.cardNumber}</td>
                            <td>{payment.expiry}</td>
                            <td>{payment.cvv}</td>
                            <td>{payment.name}</td>
                            <td>{payment.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default PaymentDetails;
