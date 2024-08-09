// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Notification.css';

// function Notification() {
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/admin/announcements');
//         if (response.status === 200) {
//           setNotifications(response.data);
//           setLoading(false);
//         } else {
//           throw new Error('Failed to fetch notifications');
//         }
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchNotifications();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <>
//      <div className="header8">
//         <label><h1>My Online Tutor</h1></label>
//       </div>
//       <div className="main-content8">
//         <div className="notifications-page course-item8">
//           <h1>Notifications</h1>

//           <table className="notification-table">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Message</th>
//               </tr>
//             </thead>
//             <tbody>
//               {notifications.map(notification => (
//                 <tr key={notification.id} className="notification-row">
//                   <td>{notification.title}</td>
//                   <td>{notification.message}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <br>
//       </br>
//       <br></br>
//       <br>
//       </br>
//       <br></br>
//       <br></br>
//       <br>
//       </br>
//       <br></br>
//       <div className="footer1">
//         <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default Notification;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './Notification.css';
// import AdminDashboard from './AdminDashboard';

// function Notification() {
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/admin/announcements');
//         if (response.status === 200) {
//           setNotifications(response.data);
//           setLoading(false);
//         } else {
//           throw new Error('Failed to fetch notifications');
//         }
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchNotifications();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <>
//     <AdminDashboard/>
//       {/* <div className="header8">
//         <label><h1>My Online Tutor</h1></label>
//       </div> */}
//       <div className="main-content" style={{marginTop:'-48%'}}>
//         <div className="notifications-page">
//           <h1>Notifications</h1>
//           {notifications.map(notification => (
//             <div key={notification.id} className="notification-card">
//               <h2>{notification.title}</h2>
//               <p>{notification.message}</p>
//             </div>
//           ))}
//           {/* <Link to='/AdminDashboard'><button className="custom-button">Back</button></Link> */}
//         </div>
//       </div>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       {/* <div className="footer1">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div> */}
//     </>
//   );
// }

// export default Notification;






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Notification.css';
import AdminDashboard from './AdminDashboard';

function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://3.7.14.21:8080/api/admin/announcements');
        if (response.status === 200) {
          setNotifications(response.data);
          setLoading(false);
        } else {
          throw new Error('Failed to fetch notifications');
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <AdminDashboard />
      <div className="main-content" style={{ marginTop: '-48%' }}>
        <div className="notifications-page">
          <h1>Notifications</h1>
          <div className="notification-container">
          {notifications.reduce((rows, notification, index) => {
  if (index % 2 === 0) {
    rows.push([]);
  }
  rows[rows.length - 1].push(notification);
  return rows;
}, []).map((row, rowIndex) => (
  <div key={rowIndex} className="notification-row">
    {row.map(notification => (
      <div key={notification.id} className="notification-card" style={{width: "auto"}}>
        <h2>{notification.title}</h2>
        <p>{notification.message}</p>
      </div>
    ))}
  </div>
))}


          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
