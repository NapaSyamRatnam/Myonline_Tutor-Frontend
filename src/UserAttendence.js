// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./ProfessionalUserList.css";

// function UserAttendence() {
//   const [attendance, setAttendance] = useState([]);
//   const userId = 1; // Set the user ID for which you want to fetch attendance data

//   useEffect(() => {
//     axios.get(`http://localhost:8080/user/user/${userId}`)
//       .then(response => {
//         setAttendance(response.data);
//         // alert(response.data)
//       })
//       .catch(error => {
//         console.error('Error fetching attendance data:', error);
//       });
//   }, [userId]);

//   return (
//     <div>
//       <h2>Attendance Records</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendance.map(record => (
//             <tr key={record.id}>
//               <td>{record.date}</td>
//               <td>{record.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default UserAttendence;





import React, { useEffect, useState } from "react";
import axios from "axios";

function UserAttendance({ currentUser }) {
  const [attendance, setAttendance] = useState([]);
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
      axios
        .get(
          `http://192.168.138.130:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`
        )
        .then((response) => {
          setUserDetails(response.data[0]); // Assuming the API returns a single user
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      axios
        .get(`http://192.168.138.130:8080/user/user/${currentUser.id}`)
        .then((response) => {
          setAttendance(response.data);
        })
        .catch((error) => {
          console.error("Error fetching attendance data:", error);
        });
    }
  }, [currentUser]);

  return (
    <div>
      <div className="header2">
        <label>
          <h1>My Online Tutor</h1>
        </label>

        {userDetails ? (
          <div className="user-details">
            <div className="profile-details12">
              <p>
                <strong>User ID:</strong> {userDetails.id}
              </p>
              <p>
                <strong>User Name:</strong> {userDetails.firstName}
              </p>
            </div>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
      </div>

      <div className="currentdate">
        <h3> {currentTime}</h3>
      </div>

      <div>
        <h2>Attendance Records</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((record) => (
              <tr key={record.id}>
                <td>{record.date}</td>
                <td>{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserAttendance;
