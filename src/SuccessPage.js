// //    // PaymentSuccessPage.js
// //    import React from 'react';
// //    import { Link } from 'react-router-dom';
// //    import './SuccessPage.css'; // Import the updated CSS file
   
// //    const SuccessPage = () => {
// //      return (
// //        <div className="success-page-container">
// //          <h2 className="page-title">Payment Successful</h2>
// //          <p className="success-message">Your payment has been successfully processed.</p>
// //          <p className="tick-mark">&#10004;</p>
// //          <p>Thank you for your purchase!</p>
   
// //          {/ Add a button for login /}
// //          <Link to="/LoginUser">
// //            <button className="login-button">Login</button>
// //          </Link>
// //        </div>
// //      );
// //    };
   
// //    export default SuccessPage;

// PaymentSuccessPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessPage.css'; // Import the updated CSS file

const SuccessPage = () => {
  return (
    <div className="success-page-container">
      <h2 className="page-title">Payment Successful</h2>
      <p className="success-message">Your payment has been successfully processed.</p>
      <p className="tick-mark">&#10004;</p>
      <p>Thank you for your purchase!</p>

      {/* Add a button for login */}
      <Link to="/LoginUser">
        <button className="login-button">Login</button>
      </Link>
    </div>
  );
};

export default SuccessPage;

   
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './SuccessPage.css'; // Import your CSS file

// const SuccessPage = () => {
//   return (
//     <div className="payment-success-page-container" style={{ marginTop: '15%' }}>
//       <h2>Payment Successful</h2>
//       <p>Your payment has been successfully processed.</p>
//       <p className="tick-mark">&#10004;</p>
//       <p>Thank you for your purchase!</p>

//       {/ Add a button for login /}
//       <Link to="/LoginUser">
//         <button className="login-button"  >Login</button>
//       </Link>
//     </div>
//   );
// };

// export default SuccessPage;
