// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CourseForm = () => {
//   const [courseName, setCourseName] = useState('');
//   const [tutorFirstName, setTutorFirstName] = useState('');
//   const [tutorLastName, setTutorLastName] = useState('');
//   const [tutorId, setTutorId] = useState('');
//   const [tutors, setTutors] = useState([]);

//   useEffect(() => {
//     // Fetch tutor data from backend
//     fetchTutors();
//   }, []);

//   const fetchTutors = async () => {
//     try {
//       const response = await axios.get('localhost:8080/api-v1/tutors');
//       setTutors(response.data);
//     } catch (error) {
//       console.error('Error fetching tutors:', error);
//     }
//   };

//   const handleTutorChange = (event) => {
//     const tutor = tutors.find((tutor) => tutor.id === event.target.value);
//     if (tutor) {
//       setTutorId(tutor.id);
//       setTutorFirstName(tutor.firstName);
//       setTutorLastName(tutor.lastName);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission, e.g., send data to backend
//     console.log('Submitted:', { courseName, tutorFirstName, tutorLastName, tutorId });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Course Name:
//         <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
//       </label>
//       <label>
//         Select Tutor:
//         <select value={tutorId} onChange={handleTutorChange}>
//           <option value="">Select Tutor</option>
//           {tutors.map((tutor) => (
//             <option key={tutor.id} value={tutor.id}>{`${tutor.firstName} ${tutor.lastName}`}</option>
//           ))}
//         </select>
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default CourseForm;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CourseForm = () => {
//   const [courseName, setCourseName] = useState('');
//   const [tutorFirstName, setTutorFirstName] = useState('');
//   const [tutorLastName, setTutorLastName] = useState('');
//   const [tutorId, setTutorId] = useState('');
//   const [tutors, setTutors] = useState([]);

//   useEffect(() => {
//     // Fetch tutor data from backend
//     fetchTutors();
//   }, []);

//   const fetchTutors = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api-v1/tutors');
//       setTutors(response.data);
//     } catch (error) {
//       console.error('Error fetching tutors:', error);
//     }
//   };

//   const handleTutorChange = (event) => {
//     const tutor = tutors.find((tutor) => tutor.id === event.target.value);
//     if (tutor) {
//       setTutorId(tutor.id);
//       setTutorFirstName(tutor.firstName);
//       setTutorLastName(tutor.lastName);
//     }
//   };

//   const handleCourseChange = (event) => {
//     setCourseName(event.target.value);
//     // Reset tutor details when course is changed
//     setTutorId('');
//     setTutorFirstName('');
//     setTutorLastName('');
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission, e.g., send data to backend
//     console.log('Submitted:', { courseName, tutorFirstName, tutorLastName, tutorId });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Course Name:
//         <input type="text" value={courseName} onChange={handleCourseChange} />
//       </label>
//       <label>
//         Select Tutor:
//         <select value={tutorId} onChange={handleTutorChange}>
//           <option value="">Select Tutor</option>
//           {tutors.map((tutor) => (
//             <option key={tutor.id} value={tutor.id}>{`${tutor.firstName} ${tutor.lastName}`}</option>
//           ))}
//         </select>
//       </label>
//       {/* Display tutor details */}
//       {tutorId && (
//         <div>
//           <h2>Tutor Details</h2>
//           <p>First Name: {tutorFirstName}</p>
//           <p>Last Name: {tutorLastName}</p>
//         </div>
//       )}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default CourseForm;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseForm = () => {
  const [courseName, setCourseName] = useState('');
  const [selectedTutor, setSelectedTutor] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [tutors, setTutors] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch tutor and user data from backend
    fetchTutors();
    fetchUsers();
  }, []);

  const fetchTutors = async () => {
    try {
      const response = await axios.get('http://3.7.14.21:8080/api-v1/tutors');
      setTutors(response.data);
    } catch (error) {
      console.error('Error fetching tutors:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://3.7.14.21:8080/api/users/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleTutorChange = (event) => {
    setSelectedTutor(event.target.value);
  };

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleAssign = async (event) => {
    event.preventDefault();
    // Send assignment data to backend
    try {
      await axios.post('http://3.7.14.21:8080/api-v1/assign', {
        tutorId: selectedTutor,
        userId: selectedUser,
        courseName: courseName
      });
      console.log('Assigned tutor and user successfully.');
    } catch (error) {
      console.error('Error assigning tutor and user:', error);
    }
  };

  const findTutorName = (id) => {
    const tutor = tutors.find((tutor) => tutor.id === id);
    return tutor ? `${tutor.firstName} ${tutor.lastName}` : 'Unknown Tutor';
  };

  const findUserName = (id) => {
    const user = users.find((user) => user.id === id);
    return user ? `${user.firstName} ${user.lastName}` : 'Unknown User';
  };

  return (
    <form onSubmit={handleAssign}>
      <label>
        Course Name:
        <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
      </label>
      <label>
        Select Tutor:
        <select value={selectedTutor} onChange={handleTutorChange}>
          <option value="">Select Tutor</option>
          {tutors.map((tutor) => (
            <option key={tutor.id} value={tutor.id}>{`${tutor.firstName} ${tutor.lastName}`}</option>
          ))}
        </select>
      </label>
      <label>
        Select User:
        <select value={selectedUser} onChange={handleUserChange}>
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>{`${user.firstName} ${user.lastName}`}</option>
          ))}
        </select>
      </label>
      <button type="submit">Assign</button>
      {/* Display tutor and user details */}
      {selectedTutor && selectedUser && (
        <div>
          <h2>Assignment Details</h2>
          <table>
            <thead>
              <tr>
                <th>Tutor Details</th>
                <th>User Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{findTutorName(selectedTutor)}</td>
                <td>{findUserName(selectedUser)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </form>
  );
};

export default CourseForm;
