

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Task.css';

function Task() {
  const [task, setTask] = useState({
    userId: '',
    taskName: '',
    startDate: '',
    endDate: '',
  });
  const [tasks, setTasks] = useState([]);
  const [validationError, setValidationError] = useState({
    userId: '',
    taskName: '',
    startDate: '',
    endDate: '',
  });
  const [tutorData, setTutorData] = useState(null);
  const [users, setUsers] = useState([]);
  const id = localStorage.getItem('tutorId');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const fetchData = async () => {
    if (tutorData && tutorData.courses) {
      try {
        const response = await axios.get(`http://3.7.14.21:8080/api/users/by-course/${tutorData.courses.join(',')}`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error while fetching users:', error);
      }
    }
  };

  useEffect(() => {
    if (tutorData && tutorData.courses) {
      fetchData();
    }
  }, [tutorData]);

  useEffect(() => {
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
    fetchTasks();
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let error = '';
    if (!value.trim()) {
      error = 'This field is required';
    }

    if (name === 'taskName' && /[^a-zA-Z\s]/.test(value)) {
      error = 'Task name should not contain special characters';
    }

    const currentDate = new Date().toISOString().split('T')[0];

    if (name === 'startDate' && value < currentDate) {
      error = 'Start date must be the current date or later';
    }

    if (name === 'endDate' && new Date(value) < new Date(task.startDate)) {
      error = 'End date must be after start date';
    }

    setValidationError(prevState => ({
      ...prevState,
      [name]: error
    }));

    if (!error) {
      setTask({
        ...task,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!task.userId.trim()) {
      setValidationError(prevState => ({
        ...prevState,
        userId: 'User ID is required'
      }));
      return;
    }

    if (!task.taskName.trim()) {
      setValidationError(prevState => ({
        ...prevState,
        taskName: 'Task Name is required'
      }));
      return;
    }

    if (!task.startDate.trim()) {
      setValidationError(prevState => ({
        ...prevState,
        startDate: 'Start Date is required'
      }));
      return;
    }

    if (!task.endDate.trim()) {
      setValidationError(prevState => ({
        ...prevState,
        endDate: 'End Date is required'
      }));
      return;
    }

    if (new Date(task.endDate) < new Date(task.startDate)) {
      setValidationError(prevState => ({
        ...prevState,
        endDate: 'End date must be after start date'
      }));
      return;
    }

    try {
      const response = await axios.post('http://3.7.14.21:8080/taskApi/task/create', task);
      alert('Task created successfully:', response.data);
      setTask({
        userId: '',
        taskName: '',
        startDate: '',
        endDate: '',
      });
      fetchTasks();
    } catch (error) {
      alert('Error creating task:', error);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://3.7.14.21:8080/taskApi/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
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
          <li><Link to='/Attendance' ><FontAwesomeIcon icon={faUserCheck} /> Attendance</Link></li>
          <li><Link to='/TutorSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
          <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
        </ul>
      </nav>
      <div className="main-content">
        <h1 className="taskH1">Task Form</h1>
        <form onSubmit={handleSubmit} className='from23'>
          <div>
            <label>User ID:</label>
            <select className="form-control" onChange={handleChange} name="userId" value={task.userId} style={{ width: "100%" }}>
              <option value="">Select User</option>
              <option value="all">All Users</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>{user.firstName}</option>
              ))}
            </select>
            {validationError.userId && <div className="error-message">{validationError.userId}</div>}
          </div>
          <div>
            <label>Task Name:</label>
            <input type="text" name="taskName" className={`taskInput ${validationError.taskName ? 'error-input' : ''}`} value={task.taskName} onChange={handleChange} />
            {validationError.taskName && <div className="error-message">{validationError.taskName}</div>}
          </div>
          <div>
            <label>Start Date:</label>
            <input type="date" name="startDate" className={`taskInput ${validationError.startDate ? 'error-input' : ''}`} value={task.startDate} onChange={handleChange} />
            {validationError.startDate && <div className="error-message">{validationError.startDate}</div>}
          </div>
          <div>
            <label>End Date:</label>
            <input type="date" name="endDate" className={`taskInput ${validationError.endDate ? 'error-input' : ''}`} value={task.endDate} onChange={handleChange} />
            {validationError.endDate && <div className="error-message">{validationError.endDate}</div>}
          </div>
          <br></br>
          <button type="submit" className='tutorButton'>Create Task</button>
        </form>
        <h2 className='taskH2'>Task List</h2>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Task Name</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.userId}</td>
                <td>{task.taskName}</td>
                <td>{task.startDate}</td>
                <td>{task.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="footer1">
        <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default Task;
