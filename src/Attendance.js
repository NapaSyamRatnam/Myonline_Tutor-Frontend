
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChalkboard,
  faUsers,
  faTasks,
  faBook,
  faComments,
  faCog,
  faSignOutAlt,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./ProfessionalUserList.css";
import "./Attendance.css";

function Attendance() {
  const { courseType } = useParams();
  const [users, setUsers] = useState([]);
  const [tutorData, setTutorData] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
  const id = localStorage.getItem('tutorId');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    axios
      .get(`http://192.168.138.130:8080/api-v1/${id}`)
      .then((response) => {
        setTutorData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, [id]);

  useEffect(() => {
    if (tutorData && tutorData.courses) {
      axios
        .get(`http://192.168.138.130:8080/api/users/by-course/${tutorData.courses.join(',')}`)
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.error(`Error fetching ${courseType} course users:`, error);
        });
    }
  }, [tutorData]);

  const handleAttendance = (userId, status) => {
    const attendanceKey = `${userId}-${currentDate}`;
    const attendanceTaken = localStorage.getItem(attendanceKey);

    if (!attendanceTaken) {
      axios
        .get(`http://192.168.138.130:8080/api/users/${userId}`)
        .then((response) => {
          const fname = response.data.firstName;
          const lname = response.data.lastName;
          sendDataToBackend(userId, status, fname, lname);
          localStorage.setItem(attendanceKey, true);
          // Show alert message only if the status is present
          if (status === 'present') {
            alert(`${fname} ${lname} marked as Present for ${currentDate}`);
            if (status === 'absent') {
              alert(`${fname} ${lname} marked as absent for ${currentDate}`);
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    } else {
      alert(`Attendance already taken for user ${userId} on ${currentDate}`);
    }
  };

  const sendDataToBackend = (userId, status, fname, lname) => {
    const formattedDate = new Date().toISOString().split("T")[0];
    axios
      .post("http://192.168.138.130:8080/user/createAttendance", {
        userID: userId,
        status: status,
        firstName: fname,
        lastName: lname,
        date: formattedDate,
      })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        alert(response.data);
      })
      .catch((error) => {
        console.error("Error sending data to backend:", error);
      });
  };

  return (
    <>
      <div className="header1">
        <label>
          <h1>My Online Tutor</h1>
        </label>
        <div className="Tutor">
          {tutorData && (
            <>
              {" "}
              <div style={{ fontSize: "20px" }}>Tutor ID: {tutorData.id}</div>{" "}
              <div style={{ fontSize: "20px" }}>Tutor Name: {tutorData.firstName} {tutorData.lastName} </div>
              <br></br>
              <p style={{ color: "white", fontSize: "25px" }}>
                {currentTime.toLocaleString()}
              </p>{" "}
            </>
          )}
        </div>
      </div>
      <nav className="sidebarT">
        <ul>
          <li>
            <Link to="/TutorDashboard">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to="/Liveclass">
              <FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link>
          </li>
          <li>
            <Link to="/UserList">
              <FontAwesomeIcon icon={faUsers} /> UserList
            </Link>
          </li>
          <li>
            <Link to="/Task">
              <FontAwesomeIcon icon={faTasks} /> Tasks
            </Link>
          </li>
          <li>
            <Link to="/StudyMaterials">
              <FontAwesomeIcon icon={faBook} /> Study Materials
            </Link>
          </li>
          <li>
            <Link to="/MyDiscussion">
              <FontAwesomeIcon icon={faComments} /> My Discussion
            </Link>
          </li>
          <li>
            <Link to="/Attendance">
              <FontAwesomeIcon icon={faUserCheck} /> Attendance
            </Link>
          </li>
          <li>
            <Link to="/TutorSetting">
              <FontAwesomeIcon icon={faCog} /> Settings
            </Link>
          </li>    
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h2 style={{ fontSize: "2.3rem", marginLeft: "10%" }}>
          {" "}
          Attendance for {currentDate}
        </h2>
      </div>
      <div></div>
      {users.length > 0 ? (
        <div className="AcademicListdata">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Course</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.courses}</td>
                  <td>
                    <button
                      style={{ marginRight: "10px" }}
                      onClick={() => handleAttendance(user.id, "present")}
                    >
                      Present
                    </button>
                    <button onClick={() => handleAttendance(user.id, "absent")}>
                      Absent
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="ErrorMessage">
          <p>No users found for the given course type.</p>
        </div>
      )}
    </>
  );
}

export default Attendance;
