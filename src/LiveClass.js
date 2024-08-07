
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import './TutorDashboard.css';

function LiveClass() {
  const { courseType } = useParams();
  const [formData, setFormData] = useState({
    userId: '',
    tutorId: '',
    liveLink: '',
    courseName: '',
    time: '',
  });
  const [error, setError] = useState({
    tutorId: '',
    liveLink: '',
    courseName: '',
    time: '',
  });
  const [submittedData, setSubmittedData] = useState([]);
  const [tutorData, setTutorData] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');

  useEffect(() => {
    fetchData();
    fetchTutorData(); // Fetch tutor data
  }, []);

  const fetchData = async () => {
    if (tutorData && tutorData.courses) {
      try {
        const response = await axios.get(`http://192.168.138.130:8080/api/users/by-course/${tutorData.courses.join(',')}`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
  };

  useEffect(() => {
    if (tutorData && tutorData.courses) {
      fetchData();
    }
  }, [tutorData]);

  const fetchTutorData = async () => {
    const tutorId = localStorage.getItem('tutorId');
    if (tutorId) {
      try {
        const response = await axios.get(`http://192.168.138.130:8080/api-v1/${tutorId}`);
        setTutorData(response.data);
      } catch (error) {
        console.error('Error fetching tutor details:', error);
      }
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    let errorMessage = '';

    switch (id) {
      case 'tutorId':
      case 'liveLink':
        // Validation for tutorId and liveLink remains the same
        break;
      case 'courseName':
        if (!value.trim()) {
          errorMessage = 'This field is required';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          errorMessage = 'Special characters and numbers are not allowed';
        }
        break;
      case 'time':
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
          errorMessage = 'Please select today\'s date or a future date';
        }
        break;
      default:
        break;
    }

    setFormData({
      ...formData,
      [id]: value,
    });

    setError({
      ...error,
      [id]: errorMessage,
    });
  };

  const handleUserSelect = (e) => {
    const { value } = e.target;
    setSelectedUserId(value);
  };

  const handleSubmit = async () => {
    let hasError = false;
    const errorObj = {};

    Object.keys(formData).forEach(key => {
      if (key !== 'userId' && !formData[key].trim()) {
        errorObj[key] = 'This field is required';
        hasError = true;
      }
    });

    setError(errorObj);

    if (hasError) {
      return;
    }

    try {
      if (selectedUserId === "all") {
        const responses = await Promise.all(
          users.map(async (user) => {
            const formDataForUser = { ...formData, userId: user.id };
            return await axios.post('http://192.168.138.130:8080/api/messages/post', formDataForUser);
          })
        );
        setSubmittedData([...submittedData, ...responses.map(response => response.data)]);
      } else {
        formData.userId = selectedUserId;
        const response = await axios.post('http://192.168.138.130:8080/api/messages/post', formData);
        setSubmittedData([...submittedData, response.data]);
      }

      setFormData({
        userId: '',
        tutorId: '',
        liveLink: '',
        courseName: '',
        time: '',
      });

    } catch (error) {
      console.error('Error while submitting data', error);
    }
  };

  return (
    <>
      <div className="header1">
        <label><h1>My Online Tutor</h1></label>
        <div className="Tutor">
          {tutorData && (
            <>
              <div style={{ fontSize: "20px" }}>Tutor ID: {tutorData.id}</div>
              <div style={{ fontSize: "20px" }}>Tutor Name: {tutorData.firstName} {tutorData.lastName}</div><br></br>
              <p style={{ color: 'white', fontSize: '25px' }}>{new Date().toLocaleString()}</p>
            </>
          )}
        </div>
      </div>
      <nav className="sidebarT">
        <ul>
          <li><Link to='/TutorDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to='/Liveclass'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
          <li><Link to='/UserList'><FontAwesomeIcon icon={faUsers} /> UserList</Link></li>
          <li><Link to='/Task'><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
          <li><Link to='/StudyMaterials'><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
          <li><Link to='/MyDiscussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
          <li><Link to='/Attendance'><FontAwesomeIcon icon={faUserCheck} /> Attendance</Link></li>
          <li><Link to='/TutorSetting'><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>
      <div className="main-content">
        <h1>LiveClass</h1>
        <div className="row col-12 d-flex">
          <div className="col-3">
            <label style={{ fontSize: "25px" }}> User </label>
            <select
              id="userId"
              className={`inputReg form-control`}
              value={selectedUserId}
              onChange={handleUserSelect}
            >
              <option value="">Select User</option>
              <option value="all">All Users</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>{user.firstName}</option>
              ))}
            </select>
            <br />
          </div>
          <div className="col-3">
            <label style={{ fontSize: "25px" }}> Tutor Id </label>
            <input
              type="number"
              id="tutorId"
              className={`inputReg form-control ${error.tutorId ? 'is-invalid' : ''}`}
              placeholder="Enter Tutor Id"
              value={formData.tutorId}
              onChange={handleChange}
            />
            {error.tutorId && <div className="invalid-feedback" style={{ color: 'red' }}>{error.tutorId}</div>}
            <br />
          </div>
          <div className="col-3">
            <label style={{ fontSize: "25px" }}> Live Link </label>
            <input
              type="text"
              id="liveLink"
              className={`inputReg form-control ${error.liveLink ? 'is-invalid' : ''}`}
              placeholder="Enter Live Link"
              value={formData.liveLink}
              onChange={handleChange}
            />
            {error.liveLink && <div className="invalid-feedback" style={{ color: 'red' }}>{error.liveLink}</div>}
            <br />
          </div>
          <div className="col-3">
            <label style={{ fontSize: "25px" }}> Course Name </label>
            <input
              type="text"
              id="courseName"
              className={`inputReg form-control ${error.courseName ? 'is-invalid' : ''}`}
              placeholder="Enter Course Name"
              value={formData.courseName}
              onChange={handleChange}
            />
            {error.courseName && <div className="invalid-feedback" style={{ color: 'red' }}>{error.courseName}</div>}
            <br />
          </div>
          <div className="col-3">
            <label style={{ fontSize: "25px" }}>Time</label>
            <input
              type="datetime-local"
              id="time"
              className={`inputReg form-control ${error.time ? 'is-invalid' : ''}`}
              value={formData.time}
              onChange={handleChange}
            />
            {error.time && <div className="invalid-feedback" style={{ color: 'red' }}>{error.time}</div>}
            <br />
          </div>
          <button
            className="btn btn-primary buttonClass"
            style={{ width: '113px', marginLeft: '300px' }}
            onClick={handleSubmit}
          >
            Send
          </button>
          {submittedData.length > 0 && (
            <div>
              <h3>Submitted Data:</h3>
              <table className="submitted-data-table">
                <thead>
                  <tr>
                    <th>User Id</th>
                    <th>Tutor Id</th>
                    <th>Live Link</th>
                    <th>Course Name</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {submittedData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.userId}</td>
                      <td>{data.tutorId}</td>
                      <td>{data.liveLink}</td>
                      <td>{data.courseName}</td>
                      <td>{data.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <div className="footer1">
        <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default LiveClass;
