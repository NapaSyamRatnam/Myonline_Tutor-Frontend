
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./UserList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function UserList() {
  const { courseType } = useParams();
  const [users, setUsers] = useState([]);
  const [tutorData, setTutorData] = useState(null);
  const id = localStorage.getItem('tutorId');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Fetch tutor details when the component mounts
    if (id) {
      axios.get(`http://3.7.14.21:8080/api-v1/${id}`)
        .then(response => {
          setTutorData(response.data);
        })
        .catch(error => {
          console.error('Error fetching tutor details:', error);
        });
    }
  }, [id]);

  useEffect(() => {
    if (tutorData && tutorData.courses) {
      axios.get(`http://3.7.14.21:8080/api/users/by-course/${tutorData.courses.join(',')}`)
        .then(response => {
          setUsers(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.error(`Error fetching users by course:`, error);
        });
    }
  }, [tutorData]);

  return (
    <>
      <div className="header1">
        <label><h1>My Online Tutor</h1></label>
        <div className="Tutor">
          {tutorData && (
            <>
              <div style={{ fontSize: "20px" }}>Tutor ID: {tutorData.id}</div>
              <div style={{ fontSize: "20px" }}>Tutor Name: {tutorData.firstName} {tutorData.lastName}</div><br></br>
              <p style={{ color: 'white', fontSize: '25px' }}>{currentTime.toLocaleString()}</p>
              <p>{tutorData.courses ? tutorData.courses.join(', ') : ''}</p>
            </>
          )}
        </div>
      </div>
      <div>
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
      </div>
      <div style={{ marginTop: "0%" }}>
        <div>
          <h2 style={{ marginLeft: "10%", fontSize: "2.3rem" }}>User List</h2>
        </div>
        {users.length > 0 ? (
          <div className="AcademicList">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Course</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.courses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="ErrorMessage">
            <p>No users found for the tutor's course.</p>
          </div>
        )}
        <div className="footer1">
          <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default UserList;
