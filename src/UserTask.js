
// import React, { useState, useEffect } from 'react';
// import { Table } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './UserTask.css';

// function UserTask() {
  

//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8080/taskApi/tasks')
//       .then(response => response.json())
//       .then(data => setTasks(data))
//       .catch(error => console.error('Error fetching tasks:', error));
//   }, []);

//   const handleFileChange = (taskId, event) => {
//     const file = event.target.files[0];
//     setTasks(prevTasks =>
//       prevTasks.map(task =>
//         task.taskId === taskId ? { ...task, file: file } : task
//       )
//     );
//   };

//   const handleStatusChange = (taskId, event) => {
//     const status = event.target.value;
//     setTasks(prevTasks =>
//       prevTasks.map(task =>
//         task.taskId === taskId ? { ...task, status: status } : task
//       )
//     );
//   };

//   const handleUpload = (taskId) => {
//     const updatedTask = tasks.find((task) => task.taskId === taskId);

//     axios.put("http://localhost:8080/taskApi/task/update", updatedTask)
//       .then((response) => {
//         const responseData = response.data;
//         alert('Uploaded successfully:', response.data);
//       })
//       .catch((error) => {
//         console.error(`Error updating Task ID ${taskId}:`, error);
//       });
//   };



//   const [userDetails, setUserDetails] = useState(null);
//   const userId = 1; // Replace with the actual user ID you want to fetch

//   useEffect(() => {
//     // Fetch user details when the component mounts
//     axios.get(`http://localhost:8080/api/users/${userId}`)
//       .then(response => {
//         setUserDetails(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user details:', error);
//       });
//   }, [userId]); 










//   return (
//     <>
//       <div className="header4">

//         <label><h1>My Online Tutor</h1></label>



//  {userDetails ? (
//           <div className="user-details">
//             <div className="profile-details12">
//               <p><strong>User ID:</strong> {userDetails.id}</p>
//               <p><strong>User Name:</strong> {userDetails.firstName}</p>
//             </div>
//           </div>
//         ) : (
//           <p></p>
//         )}

//       </div>
//       <nav className="sidebar4">
//       <ul>
       
//        <li><Link to='/UserDashboard'><label>Home</label></Link></li>
//        <li><Link to='/UserLiveclasses'><label>Live Classes</label></Link></li>
//        <li><Link to='/FileList'><label>Study Materials</label></Link></li>
//        <li><Link to='/UserTask'><label>Tasks</label></Link></li>
//         {/* <li><Link to='/Courses'><label>My Courses</label></Link></li> */}
//        <li><Link to='/Discussion'><label> My Discussion</label></Link></li>
//        <li><Link to='/UserSetting'><label>Settings</label></Link></li>
//        <li><Link to='/'><label>Logout</label></Link></li>
//      </ul>
//       </nav>
//       <div className="main-content4">
//         <h1>Tasks</h1>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Task ID</th>
//               <th>User ID</th>
//               <th>Task Name</th>
//               <th>Start Date</th>
//               <th>End Date</th>
//               <th>File</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map(task => (
//               <tr key={task.taskId}>
//                 <td>{task.taskId}</td>
//                 <td>{task.userId}</td>
//                 <td>{task.taskName}</td>
//                 <td>{task.startDate}</td>
//                 <td>{task.endDate}</td>
//                 <td>
//                   <input
//                     type='file'
//                     onChange={(e) => handleFileChange(task.taskId, e)}
//                   />
//                 </td>
//                 <td>
//                   <select value={task.status || ''} onChange={(e) => handleStatusChange(task.taskId, e)}>
//                     <option>-status-</option>
//                     <option>completed</option>
//                     <option>not-completed</option>
//                   </select>
//                 </td>
//                 <td>
//                   <input
//                     type='button'
//                     value="Upload"
//                     className='upload'
//                     onClick={() => handleUpload(task.taskId)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//       <div className="footer4">
//         <p>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default UserTask;























// import React, { useState, useEffect } from 'react';
// import { Table } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import './UserTask.css';

// function UserTask() {
  

//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8080/taskApi/tasks')
//       .then(response => response.json())
//       .then(data => setTasks(data))
//       .catch(error => console.error('Error fetching tasks:', error));
//   }, []);

//   const handleStatusChange = (taskId, event) => {
//     const status = event.target.value;
//     setTasks(prevTasks =>
//       prevTasks.map(task =>
//         task.taskId === taskId ? { ...task, status: status } : task
//       )
//     );
//   };

//   const handleUpload = (taskId) => {
//     const updatedTask = tasks.find((task) => task.taskId === taskId);

//     axios.put("http://localhost:8080/taskApi/task/update", updatedTask)
//       .then((response) => {
//         const responseData = response.data;
//         alert('Uploaded successfully:', response.data);
//       })
//       .catch((error) => {
//         console.error(`Error updating Task ID ${taskId}:`, error);
//       });
//   };

//   const [userDetails, setUserDetails] = useState(null);
//   const userId = 1; // Replace with the actual user ID you want to fetch

//   useEffect(() => {
//     // Fetch user details when the component mounts
//     axios.get(`http://localhost:8080/api/users/${userId}`)
//       .then(response => {
//         setUserDetails(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user details:', error);
//       });
//   }, [userId]); 

//   return (
//     <>
//       <div className="header4">
//         <label><h1>My Online Tutor</h1></label>
//         {userDetails ? (
//           <div className="user-details">
//             <div className="profile-details12">
//               <p><strong>User ID:</strong> {userDetails.id}</p>
//               <p><strong>User Name:</strong> {userDetails.firstName}</p>
//             </div>
//           </div>
//         ) : (
//           <p></p>
//         )}
//       </div>
     
//       <nav className="sidebar8" style={{ backgroundColor: 'white' }}>
//         <ul>
//         <h2  >UserDashboard </h2>
//           <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
//           <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
//           <li><Link to='/FileList' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
//           <li><Link to='/UserTask' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
//           <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
//           <li><Link to='/UserSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
//           <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
//         </ul>
//       </nav>
//       <div className="main-content4">
//         <h1>Tasks</h1>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Task ID</th>
//               <th>User ID</th>
//               <th>Task Name</th>
//               <th>Start Date</th>
//               <th>End Date</th>
//               <th>File Link</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map(task => (
//               <tr key={task.taskId}>
//                 <td>{task.taskId}</td>
//                 <td>{task.userId}</td>
//                 <td>{task.taskName}</td>
//                 <td>{task.startDate}</td>
//                 <td>{task.endDate}</td>
//                 <td>
//                   <input
//                     type='text'
//                     value={task.file || ''}
//                     onChange={(e) => {
//                       const updatedFile = e.target.value;
//                       setTasks(prevTasks =>
//                         prevTasks.map(t =>
//                           t.taskId === task.taskId ? { ...t, file: updatedFile } : t
//                         )
//                       );
//                     }}
//                   />
//                 </td>
//                 <td>
//                   <select value={task.status || ''} onChange={(e) => handleStatusChange(task.taskId, e)}>
//                     <option>-status-</option>
//                     <option>completed</option>
//                     <option>not-completed</option>
//                   </select>
//                 </td>
//                 <td>
//                   <input
//                     type='button'
//                     value="Upload"
//                     className='upload'
//                     onClick={() => handleUpload(task.taskId)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//       <div className="footer4">
//         <p>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default UserTask;











 




import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './UserTask.css';

function UserTask({ currentUser }) {
  const [tasks, setTasks] = useState([]);
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
      // Fetch tasks by user ID
      axios.get(`http://3.7.14.21:8080/taskApi/user/${currentUser.id}`)
        .then(response => {
          setTasks(response.data);
        })
        .catch(error => console.error('Error fetching tasks:', error));

      // Fetch user details
      axios.get(`http://3.7.14.21:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
        .then(response => {
          setUserDetails(response.data[0]);
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [currentUser]);

  const handleStatusChange = (taskId, event) => {
    const status = event.target.value;
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.taskId === taskId ? { ...task, status: status } : task
      )
    );
  };

  const handleUpload = (taskId) => {
    const updatedTask = tasks.find((task) => task.taskId === taskId);

    axios.put("http://3.7.14.21:8080/taskApi/task/update", updatedTask)
      .then((response) => {
        const responseData = response.data;
        alert('Uploaded successfully:', response.data);
      })
      .catch((error) => {
        console.error(`Error updating Task ID ${taskId}:`, error);
      });
  };

  return (
    <>
      <div className="header4">
        <label><h1>My Online Tutor</h1></label>
        {userDetails ? (
          <div className="user-details">
            <div className="profile-details12">
              <p><strong>User ID:</strong> {userDetails.id}</p>
              <p><strong>User Name:</strong> {userDetails.firstName}</p>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
     
      <nav className="sidebar8" style={{ backgroundColor: 'white' }}>
        <ul>
          <h2>UserDashboard </h2>
          <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
          <li><Link to='/FileList' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
          <li><Link to='/UserTask' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
          <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
          <li><Link to='/UserSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>
      <div className="currentdate">
            <h3> {currentTime}</h3>
          </div>
      <div className="main-content4">
        
        <h1>Tasks</h1>
        {Array.isArray(tasks) && tasks.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Task ID</th>
                <th>User ID</th>
                <th>Task Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>File Link</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.taskId}>
                  <td>{task.taskId}</td>
                  <td>{task.userId}</td>
                  <td>{task.taskName}</td>
                  <td>{task.startDate}</td>
                  <td>{task.endDate}</td>
                  <td>
                    <input
                      type='text'
                      value={task.file || ''}
                      onChange={(e) => {
                        const updatedFile = e.target.value;
                        setTasks(prevTasks =>
                          prevTasks.map(t =>
                            t.taskId === task.taskId ? { ...t, file: updatedFile } : t
                          )
                        );
                      }}
                    />
                  </td>
                  <td>
                    <select value={task.status || ''} onChange={(e) => handleStatusChange(task.taskId, e)}>
                      <option>-status-</option>
                      <option>completed</option>
                      <option>not-completed</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type='button'
                      value="Upload"
                      className='upload'
                      onClick={() => handleUpload(task.taskId)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>No tasks found</p>
        )}
      </div>
      <div className="footer4">
        <p>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default UserTask;
