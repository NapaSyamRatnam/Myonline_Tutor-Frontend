
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import './TutorDashboard.css';

function MyDiscussion() {
  const [discussionsList, setDiscussionsList] = useState([]);
  const [tutorData, setTutorData] = useState(null);
  const [discussionFormData, setDiscussionFormData] = useState({
    tutorName: '',
    userName: '',
    userId: '',
    message: ''
  });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]); // Define users state

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId); // Cleanup the interval
  }, []);

  useEffect(() => {
    const tutorId = localStorage.getItem('tutorId');
    if (tutorId) {
      axios.get(`http://3.7.14.21:8080/api-v1/${tutorId}`)
        .then(response => {
          setTutorData(response.data);
        })
        .catch(error => {
          console.error('Error fetching tutor details:', error);
        });
    }
  }, []);

  useEffect(() => {
    if (tutorData && tutorData.courses) {
        fetchData();
    }
}, [tutorData]);

const fetchData = () => {
    axios.get(`http://3.7.14.21:8080/api/users/by-course/${tutorData.courses.join(',')}`)
      .then(response => {
        setUsers(response.data); // Update users state with fetched data
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = '';

    // Validation for tutorName and userName fields
    if (name === 'tutorName' || name === 'userName') {
      if (!value.trim()) {
        error = 'This field is required';
      } else if (/[^a-zA-Z\s]/.test(value)) {
        error = 'This field should not contain special characters or numbers';
      }
    }

    setDiscussionFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!discussionFormData.tutorName || !discussionFormData.userName || !discussionFormData.userId || !discussionFormData.message) {
      setErrors({ message: 'All fields are required' });
      return;
    }

    try {
      const response = await axios.post('http://3.7.14.21:8080/api/discussion/save', discussionFormData);

      if (response.status === 200) {
        alert('Discussion saved successfully');
        fetchDiscussions();
        setDiscussionFormData({
          tutorName: '',
          userName: '',
          userId: '',
          message: ''
        });
      } else {
        alert('Failed to save discussion');
      }
    } catch (error) {
      alert('Error:', error);
    }
  };

  const fetchDiscussions = async () => {
    try {
      const response = await axios.get('http://3.7.14.21:8080/api/discussion/getAll');
      if (response.status === 200) {
        setDiscussionsList(response.data);
      } else {
        alert('Failed to fetch discussions');
      }
    } catch (error) {
      alert('Error:', error);
    }
  };

  useEffect(() => {
    fetchDiscussions();
  }, []);

  return (
    <>
      <div className="header1">
        <label><h1>My Online Tutor</h1></label>
        <div className="Tutor">
          {tutorData && (
            <>
              <div style={{fontSize:"20px"}}>Tutor ID: {tutorData.id}</div>
              <div style={{fontSize:"20px"}}>Tutor Name: {tutorData.firstName} {tutorData.lastName}</div><br></br>
              <p style={{ color:'white',fontSize:'25px'}}>{currentTime.toLocaleString()}</p>
            </>
          )}
        </div>
      </div>
      <nav className="sidebarT">
        <ul>
          <li><Link to='/TutorDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to='/Liveclass'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
          <li><Link to='/UserList' ><FontAwesomeIcon icon={faUsers} /> UserList</Link></li>
          <li><Link to='/Task' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
          <li><Link to='/StudyMaterials' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
          <li><Link to='/MyDiscussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
          <li><Link to='/Attendance' ><FontAwesomeIcon icon={faUserCheck} /> Attendance</Link></li>
          <li><Link to='/TutorSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>
      <div className="main-content">
        <form onSubmit={handleSubmit}>
          <h2>MyDiscussion</h2>
          {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
          <div className="label-input-group">
            <label>Tutor Name: <span></span></label>
            <input
              type="text"
              className="inputReg form-control"
              placeholder="Enter Name"
              onChange={handleChange}
              name="tutorName"
              value={discussionFormData.tutorName}
              required
            />
            {errors.tutorName && <p style={{ color: "red" }}>{errors.tutorName}</p>}
          </div>
          <div className="label-input-group">
            <label>User Name: <span></span></label>
            <input
              type="text"
              className="inputReg form-control"
              placeholder="Enter Name"
              onChange={handleChange}
              name="userName"
              value={discussionFormData.userName}
              required
            />
            {errors.userName && <p style={{ color: "red" }}>{errors.userName}</p>}
          </div>
          <div className="label-input-group">
            <label>User ID: <span></span></label>
            <select className="form-control" onChange={handleChange} name="userId" value={discussionFormData.userId} style={{ width: "100%" }} required>
              <option value="">Select User</option>
              <option value="all">All Users</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>{user.firstName}</option>
              ))}
            </select>
          </div>
          <div className="label-input-group">
            <label>Message: <span></span></label>
            <textarea
              className="inputReg form-control"
              placeholder="Enter Message"
              value={discussionFormData.message}
              onChange={handleChange}
              name="message"
              required
            />
          </div>
          <button className="btn btn-primary buttonClass" type="submit" style={{ width: '90px', marginLeft: '70px' }}>Send</button>
        </form>
        <div className="discussions-container">
          <h2>Discussions</h2>
          <table className="discussions-table">
            <thead>
              <tr>
                <th style={{color:"white"}}>Tutor Name</th>
                <th style={{color:"white"}}>User Name</th>
                <th style={{color:"white"}}>User ID</th>
                <th style={{color:"white"}}>Message</th>
              </tr>
            </thead>
            <tbody>
              {discussionsList.map((discussion, index) => (
                <tr key={index}>
                  <td>{discussion.tutorName}</td>
                  <td>{discussion.userName}</td>
                  <td>{discussion.userId}</td>
                  <td>{discussion.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="footer1">
        <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default MyDiscussion;
