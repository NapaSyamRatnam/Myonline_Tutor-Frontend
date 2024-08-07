



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// // import './Dashboard.css';
// import './Notification.css';
// import axios from 'axios';


// function Help() {
//   const [helpMessage, setHelpMessage] = useState('');
//   const [senderName, setSenderName] = useState(''); 
//   const [helpMessages, setHelpMessages] = useState([]);

 
//   const sendHelpMessage = async () => {
//     try {
     
//       const response = await axios.post('http://localhost:8080/api/help/help1', {
//         content: helpMessage,
//         sender: senderName, 
//       });

     
//       setHelpMessages([...helpMessages, response.data]);

      
//       setHelpMessage('');
//       setSenderName('');
//     } catch (error) {
//       console.error('Error sending help message:', error);
//     }
//   };


//   const getAllHelpMessages = async () => {
//     try {
    
//       const response = await axios.get('http://localhost:8081/api/help/Support'); 

    
//       setHelpMessages(response.data);
//     } catch (error) {
//       console.error('Error fetching help messages:', error);
//     }
//   };

 
//   useEffect(() => {
//     getAllHelpMessages();
//   }, []);





//   return (
//     <div>

// <div className="header8">
       
//         <label><h1>My Online Tutor</h1></label>
//       </div>
//       <nav className="sidebar8">
//         <ul>
//           <li><Link to='/Dashboard'><label>Home</label></Link></li>
//           <li><Link to='/UserLiveclasses'><label>Live Classes</label></Link></li>
//           <li><Link to='/FileList'><label>Study Materials</label></Link></li>
//           <li><Link to='/UserTask'><label>Tasks</label></Link></li>
//           {/* <li><Link to='/Courses'><label>My Courses</label></Link></li> */}
//           <li><Link to='/Discussion'><label> My Discussion</label></Link></li>
//           <li><Link to='/UserSetting'><label>Settings</label></Link></li>
//           <li><Link to='/'><label>Logout</label></Link></li>
//         </ul>
//       </nav>
//       <div className="main-content8">
//         <div className="box">
//       <h1>Help Center</h1>

     
//       <input
//         type="text"
//         placeholder="Type your help message"
//         value={helpMessage}
//         onChange={(e) => setHelpMessage(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={senderName}
//         onChange={(e) => setSenderName(e.target.value)}
//       />
//       <button onClick={sendHelpMessage}>Send</button>

     
//       <ul>
//         {helpMessages.map((message) => (
//           <li key={message.id}>
//             <strong></strong> {message.sender}, <strong>:</strong> {message.content}
//           </li>
//         ))}
//       </ul>
//     </div>
//     </div>
  
//         <div className="footer8">
//          <p>&copy; 2024 My Online Tutor. All rights reserved.</p>
//         </div>
//         </div>
    

//   );
// }

// export default Help;







// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// // import './Dashboard.css';
// import './Notification.css';
// import axios from 'axios';

// function Help() {
//   const [helpMessage, setHelpMessage] = useState('');
//   const [senderName, setSenderName] = useState(''); 
//   const [helpMessages, setHelpMessages] = useState([]);
//   const [error, setError] = useState('');

//   const sendHelpMessage = async () => {
//     if (!helpMessage || !senderName) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/api/help/help1', {
//         content: helpMessage,
//         sender: senderName, 
//       });

//       setHelpMessages([...helpMessages, response.data]);
//       setHelpMessage('');
//       setSenderName('');
//       setError('');
//     } catch (error) {
//       console.error('Error sending help message:', error);
//     }
//   };

//   const getAllHelpMessages = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/api/help/Support'); 
//       setHelpMessages(response.data);
//     } catch (error) {
//       console.error('Error fetching help messages:', error);
//     }
//   };

//   useEffect(() => {
//     getAllHelpMessages();
//   }, []);

//   return (
//     <div>
//       <div className="header8">
//         <label><h1>My Online Tutor</h1></label>
//       </div>
//       <nav className="sidebar8">
//         <ul>
//           <li><Link to='/Dashboard'><label>Home</label></Link></li>
//           <li><Link to='/UserLiveclasses'><label>Live Classes</label></Link></li>
//           <li><Link to='/FileList'><label>Study Materials</label></Link></li>
//           <li><Link to='/UserTask'><label>Tasks</label></Link></li>
//           <li><Link to='/Discussion'><label> My Discussion</label></Link></li>
//           <li><Link to='/UserSetting'><label>Settings</label></Link></li>
//           <li><Link to='/'><label>Logout</label></Link></li>
//         </ul>
//       </nav>
//       <div className="main-content8">
//         <div className="box">
//           <h1>Help Center</h1>
//           <input
//             type="text"
//             placeholder="Type your help message"
//             value={helpMessage}
//             onChange={(e) => setHelpMessage(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={senderName}
//             onChange={(e) => setSenderName(e.target.value)}
//           />
//           <button onClick={sendHelpMessage}>Send</button>
//           {error && <p className="error">{error}</p>}
//           <ul>
//             {helpMessages.map((message) => (
//               <li key={message.id}>
//                 <strong></strong> {message.sender}, <strong>:</strong> {message.content}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="footer8">
//         <p>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </div>
//   );
// }

// export default Help;























// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Notification.css';
// import './Help.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// function Help({ currentUser }) {
//   const [helpMessage, setHelpMessage] = useState('');
//   const [senderName, setSenderName] = useState(''); 
//   const [helpMessages, setHelpMessages] = useState([]);
//   const [error, setError] = useState('');
//   const [userDetails, setUserDetails] = useState(null);
//   const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date().toLocaleString());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);


//   useEffect(() => {
//     if (currentUser) {
//       axios.get(`http://localhost:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
//         .then(response => {
//           setUserDetails(response.data[0]); // Assuming the API returns a single user
//         })
//         .catch(error => {
//           console.error('Error fetching user details:', error);
//         });
//     }
//   }, [currentUser]);

//   const sendHelpMessage = async () => {
//     if (!helpMessage || !senderName) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/api/help/help1', {
//         content: helpMessage,
//         sender: senderName, 
//       });

//       setHelpMessages([...helpMessages, response.data]);
//       setHelpMessage('');
//       setSenderName('');
//       setError('');
//     } catch (error) {
//       console.error('Error sending help message:', error);
//     }
//   };

//   const getAllHelpMessages = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/api/help/Support'); 
//       setHelpMessages(response.data);
//     } catch (error) {
//       console.error('Error fetching help messages:', error);
//     }
//   };

//   useEffect(() => {
//     getAllHelpMessages();
//   }, []);

//   return (
//     <div>
//       <div className="header8">
//         <label><h1>My Online Tutor</h1></label>

//         {userDetails ? (
//           <div className="user-details">
//             <div className="profile-details12">
//               <p><strong>User ID:</strong> {userDetails.id}</p>
//               <p><strong>User Name:</strong> {userDetails.firstName}</p>
//             </div>
//           </div>
//         ) : (
//           <p>Loading user details...</p>
//         )}

//       </div>
//       <nav className="sidebar8" style={{ backgroundColor: 'white' }}>
//         <ul>
//           <li><Link to='/UserDashboard'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
//           <li><Link to='/UserLiveclasses'><FontAwesomeIcon icon={faChalkboard} /> Live Classes</Link></li>
//           <li><Link to='/FileList' ><FontAwesomeIcon icon={faBook} /> Study Materials</Link></li>
//           <li><Link to='/UserTask' ><FontAwesomeIcon icon={faTasks} /> Tasks</Link></li>
//           <li><Link to='/Discussion'><FontAwesomeIcon icon={faComments} /> My Discussion</Link></li>
//           <li><Link to='/UserSetting' ><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
//           <li><Link to='/'><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link></li>
//         </ul>
//       </nav>
//       <div className="currentdate">
//             <h3> {currentTime}</h3>
//           </div>
//       <div className="main-content8">
//         <div className="box">
//           <h1>Help Center</h1>
//           <input
//             type="text"
//             placeholder="Type your help message"
//             value={helpMessage}
//             onChange={(e) => setHelpMessage(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={senderName}
//             onChange={(e) => setSenderName(e.target.value)}
//           />
//           <button onClick={sendHelpMessage}>Send</button>
//           {error && <p className="error">{error}</p>}
//           <ul>
//             {helpMessages.map((message) => (
//               <li key={message.id}>
//                 <strong></strong> {message.sender}, <strong>:</strong> {message.content}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="footer8">
//         <p>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </div>
//   );
// }

// export default Help;
























import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Notification.css';
import './Help.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Help({ currentUser }) {
  const [helpMessage, setHelpMessage] = useState('');
  const [helpMessages, setHelpMessages] = useState([]);
  const [error, setError] = useState('');
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
      axios.get(`http://192.168.138.130:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
        .then(response => {
          setUserDetails(response.data[0]); // Assuming the API returns a single user
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [currentUser]);

  const sendHelpMessage = async () => {
    if (!helpMessage || !userDetails) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://192.168.138.130:8080/api/help/help1', {
        content: helpMessage,
        sender: userDetails.firstName, // Use current user's name
      });

      setHelpMessages([...helpMessages, response.data]);
      setHelpMessage('');
      setError('');
    } catch (error) {
      console.error('Error sending help message:', error);
    }
  };

  const getAllHelpMessages = async () => {
    try {
      const response = await axios.get('http://192.168.138.130:8080/api/help/Support'); 
      setHelpMessages(response.data);
    } catch (error) {
      console.error('Error fetching help messages:', error);
    }
  };

  useEffect(() => {
    getAllHelpMessages();
  }, []);

  return (
    <div>
      <div className="header8">
        <label><h1>My Online Tutor</h1></label>

        {userDetails ? (
          <div className="user-details">
            <div className="profile-details12">
              <p><strong>User ID:</strong> {userDetails.id}</p>
              <p><strong>User Name:</strong> {userDetails.firstName}</p>
            </div>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}

      </div>
      <nav className="sidebar8" style={{ backgroundColor: 'white' }}>
        <ul>
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
      <div className="main-content8">
        <div className="box">
          <h1>Help Center</h1>
          <input
            type="text"
            placeholder="Type your help message"
            value={helpMessage}
            onChange={(e) => setHelpMessage(e.target.value)}
          />
          <div className="form-group">
            <label>User Name:</label>
            <input
              type="text"
              value={userDetails ? userDetails.firstName : ''}
              className="disabled"
              disabled
            />
          </div>
          <button onClick={sendHelpMessage}>Send</button>
          {error && <p className="error">{error}</p>}
          <ul>
            {helpMessages.map((message) => (
              <li key={message.id}>
                <strong>{message.sender}:</strong> {message.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer8">
        <p>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Help;




