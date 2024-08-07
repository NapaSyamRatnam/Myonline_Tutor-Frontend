
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import './TutorDashboard.css';

function TutorHelp() {
  const [helpMessage, setHelpMessage] = useState('');
  const [senderName, setSenderName] = useState(''); 
  const [tutorData, setTutorData] = useState(null);
  const [helpMessages, setHelpMessages] = useState([]);
  const [error, setError] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Fetch tutor details when the component mounts
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

  const sendHelpMessage = async () => {
    if (!helpMessage.trim() || !senderName.trim() || !isNaN(senderName) || !validateName(senderName)) { // Check if senderName is a number or contains special characters
      setError('Please fill in both fields with valid data before sending the message');
      return;
    }

    try {
      const response = await axios.post('http://192.168.138.130:8080/api/help/help1', {
        content: helpMessage,
        sender: senderName, 
      });

      setHelpMessages([...helpMessages, response.data]);
      setHelpMessage('');
      setSenderName('');
      setError('');
    } catch (error) {
      console.error('Error sending help message', error);
    }
  };

  const getAllHelpMessages = async () => {
    try {
      const response = await axios.get('http://192.168.138.130:8080/api/help/Support'); 
      setHelpMessages(response.data);
    } catch (error) {
      console.error('Error fetching help messages', error);
    }
  };

  useEffect(() => {
    getAllHelpMessages();
  }, []);

  const validateName = (name) => {
    const regex = /^[a-zA-Z\s]*$/; // Regular expression to allow only alphabets and spaces
    return regex.test(name);
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

      <div className="main-content">
        <div className="box">
          <h1>Help Center</h1>
          <input
            type="text"
            placeholder="Type your help message"
            required
            value={helpMessage}
            onChange={(e) => setHelpMessage(e.target.value)}
          />
          <label style={{fontSize:"20px"}}>Your Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            required
            value={senderName}
            onChange={(e) => {
              const value = e.target.value;
              if (validateName(value)) {
                setSenderName(value);
              }
            }}
          /><br></br><br></br>
          <button onClick={sendHelpMessage} style={{marginRight:"30px"}}>Send</button>
          <Link to='/TutorSetting'><button className="back-button">Back</button></Link>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <ul>
            {helpMessages.length > 0 ? (
              helpMessages.map((message) => (
                <li key={message.id}>
                  <strong>{message.sender}:</strong> {message.content}
                </li>
              ))
            ) : (
              <li>No help messages available</li>
            )}
          </ul>
        </div>
      </div>
      <div className="footer1">
        <p style={{ color: 'white' }}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default TutorHelp;
