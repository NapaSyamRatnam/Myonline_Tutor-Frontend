
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './HelpDeskComponent.css';
// import AdminDashboard from './AdminDashboard';

// function HelpDeskComponent() {
//   const [helpMessage, setHelpMessage] = useState('');
//   const [senderName, setSenderName] = useState('');
//   const [helpMessages, setHelpMessages] = useState([]);
//   const [error, setError] = useState('');

//   const sendHelpMessage = async () => {
//     if (!helpMessage || !senderName) {
//       setError('Please fill out both fields.');
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
//       const response = await axios.get('http://localhost:8080/api/help/Support');

//       console.log('Help messages:', response.data);
//       setHelpMessages(response.data);
//     } catch (error) {
//       console.error('Error fetching help messages:', error);
//     }
//   };

//   useEffect(() => {
//     getAllHelpMessages();
//   }, []);

//   return (
//     <>
//     <AdminDashboard/>
//       {/* <div className="header1">
//         <label><h1>My Online Tutor</h1></label>
//       </div> */}
//       <div className="help-desk-container" style={{marginTop:'-50%'}}>
//         <div className="main-content">
//           <div className="box">
//             <h2>Help Center</h2>
//             <input
//               type="text"
//               placeholder="Type your help message"
//               value={helpMessage}
//               onChange={(e) => setHelpMessage(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={senderName}
//               onChange={(e) => setSenderName(e.target.value)}
//             />
//             <button onClick={sendHelpMessage}>Send</button>
//             {error && <p className="error">{error}</p>}
           

//             {/* Display all help messages */}
//             <ul>
//               {helpMessages.map((message, index) => (
//                 <li key={index}>
//                   <strong>{message.sender}:</strong> {message.content}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* <Link to='/AdminDashboard'><button className="custom-button">Back</button></Link> */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default HelpDeskComponent;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HelpDeskComponent.css';
import AdminDashboard from './AdminDashboard';

function HelpDeskComponent() {
  const [helpMessage, setHelpMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [helpMessages, setHelpMessages] = useState([]);
  const [error, setError] = useState('');

  const sendHelpMessage = async () => {
    // Validation to check if fields contain digits or special characters
    const nameRegex = /^[^\d!@#$%^&*()_+={}\[\]|\\:;'"<>/?]*$/;
    if (!helpMessage.trim() || !senderName.trim()) {
      setError('Please fill out both fields.');
      return;
    }
    if (!nameRegex.test(senderName.trim())) {
      setError('Name field should not contain digits or special characters.');
      return;
    }
    // Add more validation rules for the helpMessage if needed

    try {
      const response = await axios.post('http://3.7.14.21:8080/api/help/help1', {
        content: helpMessage,
        sender: senderName,
      });

      setHelpMessages([...helpMessages, response.data]);

      setHelpMessage('');
      setSenderName('');
      setError('');
    } catch (error) {
      console.error('Error sending help message:', error);
    }
  };

  const getAllHelpMessages = async () => {
    try {
      const response = await axios.get('http://3.7.14.21:8080/api/help/Support');

      console.log('Help messages:', response.data);
      setHelpMessages(response.data);
    } catch (error) {
      console.error('Error fetching help messages:', error);
    }
  };

  useEffect(() => {
    getAllHelpMessages();
  }, []);

  return (
    <>
    <AdminDashboard/>
      <div className="help-desk-container" style={{marginTop:'-50%'}}>
        <div className="main-content">
          <div className="box">
            <h2>Help Center</h2>
            <input
              type="text"
              placeholder="Type your help message"
              value={helpMessage}
              onChange={(e) => setHelpMessage(e.target.value)}
            />
            <input
              type="text"
              placeholder="Your Name"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
            <button onClick={sendHelpMessage}>Send</button>
            {error && <p className="error">{error}</p>}
           
            {/* Display all help messages */}
            <ul>
              {helpMessages.map((message, index) => (
                <li key={index}>
                  <strong>{message.sender}:</strong> {message.content}
                </li>
              ))}
            </ul>
          </div>
          {/* <Link to='/AdminDashboard'><button className="custom-button">Back</button></Link> */}
        </div>
      </div>
    </>
  );
}

export default HelpDeskComponent;
