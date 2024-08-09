
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const PaymentHistory = ({ currentUser }) => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        const response = await axios.get(`http://3.7.14.21:8080/payments/paymentget/${currentUser.email}`);
        setPaymentHistory(response.data);
      } catch (error) {
        console.error('Error fetching payment history:', error);
      }
    };

    fetchPaymentHistory();
  }, []);

  const downloadReceiptAsPdf = (payment) => {
    const pdf = new jsPDF();
  
    const receiptContent = `
      Date: ${payment.paymentTime}
      Name: ${payment.fullName}
      Class: ${payment.className}
      Section: ${payment.section}
      Transaction Id: ${payment.transactionId}
      Amount: ${payment.amount}
      Status: ${payment.status}
    `;
  
    html2canvas(document.getElementById('receipt-content')).then((canvas) => {
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
    
    //   pdf.addImage(stock, 'JPEG', 10, 10, 60, 60); 
      
      pdf.text('SCHOOL NAME', 80, 20); 
      
      pdf.text(receiptContent, 20, 80); 
    
      pdf.save('receipt.pdf');
    });
  };

  return (
    <div id="Task-form" className="request-page-container">
      <h1>Payment History</h1>
      <table className="request-table">
        <thead>
          <tr className="table-header1">
            <th className="table-data">Date</th>
            <th className="table-data">Transaction Id</th>
            <th className="table-data">Amount</th>
            <th className="table-data">Status</th>
            <th className="table-data">Action</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((payment, index) => (
            <tr key={index}>
              <td className="table-data">{payment.paymentTime}</td>
              <td className="table-data">{payment.transactionId}</td>
              <td className="table-data">{payment.amount}</td>
              <td className="table-data">{payment.status}</td>
              <td className="table-data">
                <button onClick={() => downloadReceiptAsPdf(payment)}>Download PDF</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div id="receipt-content" style={{ display: 'none' }}>
        {paymentHistory.map((payment, index) => (
          <div key={index}>
            <p>Date: {payment.paymentTime}</p>
            <p>Name: {payment.fullName}</p>
            <p>Class: {payment.className}</p>
            <p>Section: {payment.section}</p>
            <p>Transaction Id: {payment.transactionId}</p>
            <p>Amount: {payment.amount}</p>
            <p>Status: {payment.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
