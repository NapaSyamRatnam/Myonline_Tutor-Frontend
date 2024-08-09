


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "./Get.css"

// function Get() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:8080/api/pays/latest');
//       setData(response.data);
//       setError('');
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError('Error fetching data. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='tutor-css'>
//       {error && <p>{error}</p>}
//       {loading ? (
//         <p>Loading...</p>
//       ) : data ? (
//         <div>
//           <p><strong>Selected Courses:</strong> {data.selectedCourses ? data.selectedCourses.join(', ') : ''}</p>
//           <p><strong>Selected Amount:</strong> {data.selectedAmount}</p>
//           <p><strong>Currency:</strong> {data.currency}</p>
//           <p><strong>Card Number:</strong> {data.cardNumber}</p>
//           <p><strong>Card Holder:</strong> {data.cardHolder}</p>
//           <p><strong>Expiry Date:</strong> {data.expiryDate}</p>
//           <p><strong>CVV:</strong> {data.cvv}</p>
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default Get;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import "./Get.css"

function Get() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://3.7.14.21:8080/api/pays/latest');
      setData(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const redirectToDashboard = () => {
    navigate('/UserDashboard'); // Redirect to UserDashboard component
  };

  return (
    <div className='tutor-css'>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <div>
          <p><strong>Selected Courses:</strong> {data.selectedCourses ? data.selectedCourses.join(', ') : ''}</p>
          <p><strong>Selected Amount:</strong> {data.selectedAmount}</p>
          <p><strong>Currency:</strong> {data.currency}</p>
          <p><strong>Card Number:</strong> {data.cardNumber}</p>
          <p><strong>Card Holder:</strong> {data.cardHolder}</p>
          <p><strong>Expiry Date:</strong> {data.expiryDate}</p>
          <p><strong>CVV:</strong> {data.cvv}</p>
          <button onClick={redirectToDashboard}>Go to Dashboard</button> {/* Button to redirect */}
        </div>
      ) : null}
    </div>
  );
}

export default Get;



