import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Adminnotifications.css';
import AdminDashboard from './AdminDashboard';

function Adminnotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://3.7.14.21:8080/api/admin/announcements');
        if (response.status === 200) {
          // Limiting notifications to 4 items
          setNotifications(response.data.slice(0, 4));
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
      <div className="admin-content" style={{ marginTop: '-28%', marginLeft: "50%" }}>
        <div className="notifications-page">
          <h2> Latest Notifications</h2>
          <div className="notification-container-admin">
          {notifications.reduce((rows, notification, index) => {
  if (index % 2 === 0) {
    rows.push([]);
  }
  rows[rows.length - 1].push(notification);
  return rows;
}, []).map((row, rowIndex) => (
  <div key={rowIndex} className="notification-row">
    {row.map(notification => (
      <div key={notification.id} className="notification-admin" style={{width: "auto"}}>
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

export default Adminnotifications;
