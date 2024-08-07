import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import './TutorDashboard.css';
import { Link } from 'react-router-dom';

function CreateReport() {
  const [userId, setUserId] = useState('');
  const [remarks, setRemarks] = useState('');
  const [taskData, setTaskData] = useState({});
  const [tutorData, setTutorData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval
  }, []);

  useEffect(() => {
    // Fetch tutor details from localStorage
    const tutorId = localStorage.getItem('tutorId');
    if (tutorId) {
      axios.get(`http://192.168.138.130:8080/api-v1/${tutorId}`)
        .then(response => {
          setTutorData(response.data);
        })
        .catch(error => {
          console.error('Error fetching tutor details:', error);
        });
    }
  }, []);

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleRemarksChange = (e) => {
    setRemarks(e.target.value);
  };

  const handleGetTask = async () => {
    try {
      const response = await axios.get(`http://192.168.138.130:8080/taskApi/user/${userId}`);
      setTaskData(response.data);
    } catch (error) {
      alert('Error fetching task data:', error);
    }
  };

  const handleUpdateRemarks = async () => {
    try {
      // Create a new object with the existing data and only update the remarks field
      const updatedTask = {
        ...taskData,
        remarks: remarks,
      };

      await axios.put(`http://localhost:8080/taskApi/task/update`, updatedTask);

      // Optionally, you can fetch the updated data after posting
      handleGetTask();
      alert('Remarks updated successfully!');
    } catch (error) {
      console.error('Error updating remarks:', error);
    }
  };

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
          <li><Link to='/TutorSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>
      <div className='create-report'>
        <h1>Task Details</h1>
        <div className='input-section'>
          <label><strong>
            Enter User ID:
            <input type="number" placeholder='Enter User Id' value={userId} onChange={handleUserIdChange} />
            <button onClick={handleGetTask}>Get Details</button>
            </strong>  </label>
        </div>
        {taskData && (
          <div className='task-details'>
            <h1>Create Report</h1>
            <p><strong>Task ID : </strong> {taskData.taskId}</p>
            <p><strong>User ID : </strong> {taskData.userId}</p>
            <p><strong>Task Name : </strong> {taskData.taskName}</p>
            <p><strong>Start Date : </strong> {taskData.startDate}</p>
            <p><strong>End Date : </strong> {taskData.endDate}</p>
            <td><a href={taskData.file} target="_blank" rel="noopener noreferrer">{taskData.file}</a></td>
            <p><strong>Status : </strong> {taskData.status}</p>
            <p><strong>Remarks :</strong>
            <textarea placeholder='Enter the Remarks' value={remarks} onChange={handleRemarksChange} /></p>
            <br></br>
            <button onClick={handleUpdateRemarks}>Update Remarks</button>
          </div>
        )}
      </div>
      <div className="footer1">
        <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default CreateReport;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
// import './TutorDashboard.css';
// // import './CreateReport.css';
// import { Link } from 'react-router-dom';

// function CreateReport() {
//   const [userId, setUserId] = useState('');
//   const [remarks, setRemarks] = useState('');
//   const [taskData, setTaskData] = useState({});
//   const [tutorData, setTutorData] = useState(null);
//   const id = 1;
//   const [currentTime, setCurrentTime] = useState(new Date());


//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId); // Added missing closing bracket here
//   }, []);

//   const handleUserIdChange = (e) => {
//     setUserId(e.target.value);
//   };

//   const handleRemarksChange = (e) => {
//     setRemarks(e.target.value);
//   };

//   const handleGetTask = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/taskApi/user/${userId}`);
//       setTaskData(response.data);
//     } catch (error) {
//       alert('Error fetching task data:', error);
//     }
//   };

//   const handleUpdateRemarks = async () => {
//     try {
//       // Create a new object with the existing data and only update the remarks field
//       const updatedTask = {
//         ...taskData,
//         remarks: remarks,
//       };

//       await axios.put(`http://localhost:8080/taskApi/task/update`, updatedTask);

//       // Optionally, you can fetch the updated data after posting
//       handleGetTask();
//       alert('Remarks updated successfully!');
//     } catch (error) {
//       console.error('Error updating remarks:', error);
//     }
//   };

//   useEffect(() => {
//     // Fetch user details when the component mounts
//     axios.get(`http://localhost:8080/api-v1/${id}`)
//       .then(response => {
//         setTutorData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user details:', error);
//       });
//   }, [id]);

//   useEffect(() => {
//     // You can add any initial setup logic here if needed
//   }, []);
 
//   return (
//     <>
//     <div className="header1">
//     <label><h1>My Online Tutor</h1></label>
//     <div className="Tutor">
//           {tutorData && (
//             <>
//                <div style={{fontSize:"20px"}}>Tutor ID: {tutorData.id}</div>
//               <div style={{fontSize:"20px"}}>Tutor Name: {tutorData.firstName} {tutorData.lastName}</div><br></br>
//               <p style={{ color:'white',fontSize:'25px'}}>{currentTime.toLocaleString()}</p> 
//             </>
//           )}
//         </div>
//   </div>
//   <nav className="sidebarT">
//     <ul>
//          <li><Link to='/TutorDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
//           <li><Link to='/Liveclass'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
//           <li><Link to='/UserList' ><FontAwesomeIcon icon={faUsers} /> UserList</Link></li>
//           <li><Link to='/Task' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
//           <li><Link to='/StudyMaterials' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
//           <li><Link to='/MyDiscussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
//           <li><Link to='/TutorSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
//           <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
//     </ul>
//   </nav>
//     <div className='create-report'>
//       <h1>Task Details</h1>
//       <div className='input-section'>
//         <label><strong>
//           Enter User ID:
//           <input type="number" placeholder='Enter User Id' value={userId} onChange={handleUserIdChange} />
//           <button onClick={handleGetTask}>Get Details</button>
//           </strong>  </label>
//         </div>
//         {/* {/ <button onClick={handleGetTask}>Get Details</button> /} */}
//       {taskData && (
//         <div className='task-details'>
//           <h1>Create Report</h1>
//           <p><strong>Task ID : </strong> {taskData.taskId}</p>
//           <p><strong>User ID : </strong> {taskData.userId}</p>
//           <p><strong>Task Name : </strong> {taskData.taskName}</p>
//           <p><strong>Start Date : </strong> {taskData.startDate}</p>
//           <p><strong>End Date : </strong> {taskData.endDate}</p>
//           {/* <p><strong>File : </strong> {taskData.file}</p> */}

//           <td><a href={taskData.file} target="_blank" rel="noopener noreferrer">{taskData.file}</a></td>
//           <p><strong>Status : </strong> {taskData.status}</p>
//           <p><strong>Remarks :</strong>
//           <textarea placeholder='Enter the Remarks' value={remarks} onChange={handleRemarksChange} /></p>
//           <br></br>
//           <button onClick={handleUpdateRemarks}>Update Remarks</button>
//         </div>
//       )}
//     </div>
//     <div className="footer1">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default CreateReport;
