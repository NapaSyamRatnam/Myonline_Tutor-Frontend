


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UserDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog,  faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import {} from '@fortawesome/free-solid-svg-icons';

function UserDashboard({ currentUser, handleLogout }) {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentUser) {
      axios.get(`http://3.7.14.21:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
        .then(response => {
          setUserDetails(response.data[0]); // Assuming the API returns a single user
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [currentUser]);

  return (
    <>
      <div className="header1">
        <label><h1>My Online Tutor</h1></label>

          <div className="small-container">
            <h3> {currentTime}</h3>
          </div>
        
      </div>
      <div>
      
      </div>
      <div>
        <h1>User Dashboard </h1> 
        
        
        <div>
      
    </div>
         <div className="main-content8">
  

         <div className="back">

<section className='home-section2'>
  <Link to="/UserAcademic" className="course-link">
    <div className="course-item course-item66">
      <img
        src="https://img.freepik.com/free-photo/kids-getting-back-school-together_23-2149507650.jpg?w=900&t=st=1704865629~exp=1704866229~hmac=bf48f531d643d12a0a78e7649c08158b6f50f18913eb2ae8f59899328b19a6ff"
        alt=""
        className="course-image11"
      />
      <h2>Academic courses</h2>
    </div>
  </Link>

  <Link to="/UserTechnical" className="course-link">
    <div className="course-item course-item66 ">
      <img
        src="https://img.freepik.com/premium-photo/happy-young-student-with-laptop-looking-his-classmate-sitting-front-him-during-discussion-consultation-lesson_274679-9699.jpg?w=900"
        alt=""
        className="course-image11"
      />
      <h2>Technical courses</h2>
    </div>
  </Link>

  <Link to="/UserProfessional" className="course-link">
    <div className="course-item course-item66 ">
      <img
        src="https://img.freepik.com/free-photo/tailors-working_1098-15502.jpg?w=900&t=st=1704866085~exp=1704866685~hmac=2a579c0ddc8fa17d927942a0142f6fabeb54dc1872fabdc5e56739fdd9f42be2"
        alt=""
        className="course-image11"
      />
      <h2>Professional/skilled</h2>
    </div>
  </Link>
</section>
</div>


        </div>
      
      </div>







      <div className="footer1">
        <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default UserDashboard;



