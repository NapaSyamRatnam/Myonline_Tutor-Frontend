import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UserViewAttendence.css';

function ViewReports() {
  const [taskId, setTaskId] = useState('');
  const [userId, setUserId] = useState('');
  const [attendanceData, setAttendanceData] = useState(null);
  const [fetchData, setFetchData] = useState(false);

  const handleTaskIdChange = (e) => {
    setTaskId(e.target.value);
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleGetByTaskId = () => {
    setFetchData(true);
  };

  const handleGetByUserId = () => {
    setFetchData(true);
  };

  const handleGetAllTasks = () => {
    setFetchData(true);
  };

  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        let response;

        // if (taskId !== '' && userId !== '') {
        //   response = await axios.get(`http://localhost:8081/taskApi/task/${taskId}/user/${userId}`);
        // }
         if (taskId !== '') {
          response = await axios.get(`http://192.168.138.130:8080/taskApi/task/${taskId}`);
        } else if (userId !== '') {
          response = await axios.get(`http://192.168.138.130:8080/taskApi/user/${userId}`);
        } else {
          response = await axios.get('http://192.168.138.130:8080/taskApi/tasks');
        }

        setAttendanceData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setFetchData(false);
      }
    };

    if (fetchData) {
      fetchDataFromServer();
    }
  }, [fetchData, taskId, userId]);

  return (
    <>
      <div className="header1">
    <label><h1>My Online Tutor</h1></label>
  </div>
  
       {/* <header><h2>My Online Tutor</h2></header> */}
    <div className="attendance-container">
      <h1 className="title">Reports</h1>

      <div className="form-container">
        <label>
          Enter Task ID:
          <input type="number" placeholder='Enter the TaskId' value={taskId} onChange={handleTaskIdChange} />
        </label>
        <button className="btn" onClick={handleGetByTaskId}>
          Get Data by Task ID
        </button>
        <button className="btn" onClick={handleGetAllTasks}>
          Get All the Data
        </button>
        <br></br>
        <label>
          Enter User ID:
          <input type="number" placeholder='Enter the UserID' value={userId} onChange={handleUserIdChange} />
        </label>
        <button className="btn" onClick={handleGetByUserId}>
          Get Data by User ID
        </button>
        
      </div>

      {attendanceData && (
        <div className="data-container">
          {Array.isArray(attendanceData) ? (
            attendanceData.map((taskData) => (
              <div key={taskData.taskId} className="data-item">
                <p><strong>Task ID: </strong> {taskData.taskId}</p>
                <p><strong>User ID: </strong> {taskData.userId}</p>
                <p><strong>Task Name: </strong> {taskData.taskName}</p>
                <p><strong>Start Date: </strong> {taskData.startDate}</p>
                <p><strong>End Date: </strong> {taskData.endDate}</p>
                <p><strong>File: </strong> {taskData.file}</p>
                <p><strong>Status: </strong> {taskData.status}</p>
                <p><strong>Remarks: </strong> {taskData.remarks}</p>
              </div>
            ))
          ) : (
            <div className="data-item">
              <p><strong>Task ID: </strong> {attendanceData.taskId}</p>
              <p><strong>User ID: </strong> {attendanceData.userId}</p>
              <p><strong>Task Name: </strong> {attendanceData.taskName}</p>
              <p><strong>Start Date: </strong> {attendanceData.startDate}</p>
              <p><strong>End Date: </strong> {attendanceData.endDate}</p>
              <p><strong>File: </strong> {attendanceData.file}</p>
              <p><strong>Status: </strong> {attendanceData.status}</p>
              <p><strong>Remarks: </strong> {attendanceData.remarks}</p>
            </div>
          )}
        </div>
      )}
       <Link to='/AdminDashboard'><button className="custom-button">Back</button></Link>
    </div>
    {/* <div className="footer1">
        <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div> */}
  </>
  );
}

export default ViewReports;
