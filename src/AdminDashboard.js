import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus, faChalkboardTeacher, faBullhorn, faUser, faCog, faLifeRing, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const AdminDashboard = () => {
  const [adminDetails, setAdminDetails] = useState(null);
  const [tutorsCount, setTutorsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());


  
  useEffect(() => {
    // Retrieve admin data from session storage
    const storedAdminData = sessionStorage.getItem('adminData');
    if (storedAdminData) {
      setAdminDetails(JSON.parse(storedAdminData));
    }
    // Fetch admin details when component mounts
    fetchAdminDetails();

    // Update current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  const handleAddTutor = () => {
        // Handle Add Tutor action
      };
    
      const handleAddCourse = () => {
        // Handle Add Course action
      };
    
      const handleAnnouncement = () => {
        // Handle Announcement action
      };
    
      const handleUserManagement = () => {
        // Handle User Management action
      };
    
      const handleViewCourse = () => {
        // Handle View Course action
      };
    
      const handleTutors = () => {
        // Handle Tutors action
      };
    
      const handleReports = () => {
        // Handle Reports action
      };
    
      const handleNotifications = () => {
        // Handle Notifications action
      };
    
      const handleUserViewAttendence = () => {
        // Handle User View Attendance action
      };
  const fetchTutorsCount = () => {
    // Make a fetch request to your backend to get tutors count
    // Replace 'YOUR_TUTORS_COUNT_ENDPOINT' with your actual endpoint
    fetch('http://192.168.138.130:8080/api-v1/tutors/count')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch tutors count');
        }
        return response.json();
      })
      .then(data => setTutorsCount(data.count))
      .catch(error => console.error('Error fetching tutors count:', error));
  };

  const fetchUsersCount = () => {
    // Make a fetch request to your backend to get users count
    // Replace 'YOUR_USERS_COUNT_ENDPOINT' with your actual endpoint
    fetch('http://192.168.138.130:8080/api/users/users/count')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users count');
        }
        return response.json();
      })
      .then(data => {
        console.log('Users count data:', data);
        setUsersCount(data.count);
      })
      .catch(error => console.error('Error fetching users count:', error));
  };

  const fetchAdminDetails = () => {
    const adminId = localStorage.getItem('adminId');
    if (adminId) {
      // Fetch admin details using admin ID
      fetch(`http://192.168.138.130:8080/api/admin/profile/${adminId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch admin details');
          }
          return response.json();
        })
        .then(data => {
          setAdminDetails(data);
        })
        .catch(error => console.error('Error fetching admin details:', error));
    }
  };

  const handleLogout = () => {
    // Handle Logout action
    sessionStorage.removeItem('adminData');
    window.location.href = '/LoginAdmin';
  };

  const adminId = localStorage.getItem('adminId');

  return (
    <>
      <div className="admin-dashboard" style={{width: "100%", height: "auto"}}>
        <header className="ah" style={{height: "7vh"}}>
          <h2>My Online Tutor</h2>
          <p style={{color:"white",marginLeft:'600px', marginTop: "4%"}}>{currentTime.toLocaleString()}</p> 
          <div style={{marginTop: '-10%', marginLeft: "7%" }}>
          <Link to="/LoginAdmin">
            <button type="button" onClick={handleLogout} style={{ marginLeft: '850px', marginBottom: '30px',backgroundColor:'red'}}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              Logout
            </button>
          </Link>
          <Link to="Settings">
          <FontAwesomeIcon icon={faUser} style={{color: "white", marginLeft: "0%", width: "10%"}}/>
          </Link>
          {adminDetails && (
              <span style={{ color: "white", marginLeft: "10px",fontWeight: "bolder" }}>Admin: {adminDetails.name}</span>
            )}
          </div>
          
          {/* {adminDetails && (
            <div className="admin-details">
              <p>Admin: {adminDetails.email}</p>
            </div>
          )} */}
        </header>
        {/* <div className="dashboard-image-container">
          <div className="image-overlay">
            <h3 style={{ fontSize: '40px' }}>Welcome to My Online Tutor</h3>
            <img src="https://media.istockphoto.com/id/1223044329/photo/confident-man-teacher-wearing-headset-speaking-holding-online-lesson.jpg?s=612x612&w=0&k=20&c=xKYLqKd6obXrUazZg5PDCycrwPiFXHVEJzqi0lxh78Q=" alt="Dashboard" />
          </div>
        </div> */}
        <section className='allsections'>
        <div className="feature">
             <div className="manage-section" style={{display: "grid", color: 'whitesmoke'}}>
             <Link to='/AdminLandingPage'><button ><FontAwesomeIcon icon={faHome} /> Dashboard </button></Link>
              <Link to='/AddNewTutor'><button onClick={handleAddTutor}><FontAwesomeIcon icon={faUserPlus} /> Add New Tutor</button></Link>
               {/* <Link to='/Tutors.js'><button onClick={handleTutors}><FontAwesomeIcon icon={faUser} /> Tutors</button></Link> */}
               <Link to='/TutorList'><button><FontAwesomeIcon icon={faUser} /> Assigned Tutors  </button></Link>
               <Link to='/AddNewCourse.js'><button onClick={handleAddCourse}><FontAwesomeIcon icon={faUserPlus} /> Add Course</button></Link>
               <Link to='/ViewCourses.js'><button onClick={handleViewCourse}><FontAwesomeIcon icon={faUser} /> View Courses</button></Link>
               {/* <Link to='/Certificate'><button><FontAwesomeIcon icon={faUser} /> Certificate</button></Link> */}
               <Link to='/Announcement.js'><button onClick={handleAnnouncement}><FontAwesomeIcon icon={faUserPlus} /> Announcement</button></Link>
               <Link to='/Notification'><button onClick={handleNotifications}><FontAwesomeIcon icon={faUser} /> Notifications</button></Link>
               {/* <Link to='/UserManagement.js'><button onClick={handleUserManagement}><FontAwesomeIcon icon={faUserPlus} /> Users</button></Link> */}
               <Link to='/PaymentDetails'><button><FontAwesomeIcon icon={faUser} /> Payment Details</button></Link>
               {/* <Link to='/UserViewAttendence.js'><button onClick={handleUserViewAttendence}><FontAwesomeIcon icon={faUser} /> Attendance</button></Link> */}
              {/* <Link to="/Settings.js"><button><FontAwesomeIcon icon={faCog} /> Profile</button></Link> */}
              <Link to='/AddNewAdmin'><button><FontAwesomeIcon icon={faUserPlus} />Add New Admin</button></Link>
               <Link to='/TestResult'><button onClick={handleReports}><FontAwesomeIcon icon={faCog} /> Reports</button></Link>
              <Link to='/HelpDeskComponent.js'><button><FontAwesomeIcon icon={faLifeRing} /> Help&Support</button></Link>
             </div>
             </div>  

        </section>
      </div>
    </>
  );
};

export default AdminDashboard;