// // // // AdminDashboard.js

// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import './Queries.css';

// // // function Queries() {
// // //     const [queries, setQueries] = useState([]);

// // //     useEffect(() => {
// // //         // Fetch queries from the API
// // //         axios.get('http://localhost:8080/api/queries')
// // //             .then(response => setQueries(response.data))
// // //             .catch(error => console.error('Error fetching queries', error));
// // //     }, []);

// // //     const resolveQuery = (queryId) => {
// // //         // Send a POST request to resolve a query
// // //         axios.post(`http://localhost:8080/api/queries/resolve/${queryId}`)
// // //             .then(response => {
// // //                 // Update the local state to mark the query as resolved
// // //                 setQueries(prevQueries => prevQueries.map(query =>
// // //                     query.id === response.data.id ? response.data : query
// // //                 ));
// // //             })
// // //             .catch(error => console.error('Error resolving query', error));
// // //     };

// // //     return (
// // //         <div className="admin-dashboard">
// // //             <h1>Admin Dashboard</h1>
// // //             <div className="query-list">
// // //                 {queries.map(query => (
// // //                     <div key={query.id} className={`query-item ${query.resolved ? 'resolved' : ''}`}>
// // //                         <p>{query.userType === 'user' ? 'User' : 'Tutor'}: {query.username}</p>
// // //                         <p>{query.queryText}</p>
// // //                         {!query.resolved && (
// // //                             <button onClick={() => resolveQuery(query.id)}>Resolve</button>
// // //                         )}
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default Queries;
// // import React, { useState, useEffect } from "react";
// // import axios from 'axios';
// // import './Queries.css';

// // function Queries() {
// //   const [receivedMessages, setReceivedMessages] = useState([]);
// //   const [reply, setReply] = useState("");

// //   const handleReceiveMessage = async () => {
// //     try {
// //       const response = await axios.get('localhost:8080/api/queries/query');
// //       setReceivedMessages(response.data);
// //     } catch (error) {
// //       console.error("Error receiving messages:", error);
// //     }
// //   };

// //   const handleSendReply = async (id) => {
// //     try {
// //       const response = await axios.post('localhost:8081/api/queries/create', { id, reply });
// //       console.log("Response from server:", response.data);

// //       // After sending reply, update the messages
// //       handleReceiveMessage();
// //       // Reset the reply input field
// //       setReply("");
// //     } catch (error) {
// //       console.error("Error sending reply:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     handleReceiveMessage();
// //   }, []); // Fetch messages on component mount

// //   return (
// //     <>
// //       <div className="header">
// //         <h1>Admin Help Interface</h1>
// //       </div>

// //       <div className="main-content">
// //         <div className="received-messages2 box">
// //           <h2>Received Messages</h2>
// //           {receivedMessages.map((message) => (
// //             <div key={message.id} className="message user">
// //               <p>{message.content}</p>
// //               <div className="reply-input">
// //                 <textarea
// //                   placeholder="Type your reply here..."
// //                   value={reply}
// //                   onChange={(e) => setReply(e.target.value)}
// //                 />
// //                 <button onClick={() => handleSendReply(message.id)}>Reply</button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="footer">
// //         <p>&copy; 2024 My Online Tutor. All rights reserved.</p>
// //       </div>
// //     </>
// //   );
// // }

// // export default Queries;




// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import './Queries.css';

// function Queries() {
//   const [receivedMessages, setReceivedMessages] = useState([]);
//   const [reply, setReply] = useState("");

//   const handleReceiveMessage = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/queries/query');
//       setReceivedMessages(response.data);
//     } catch (error) {
//       alert("Error receiving messages:", error);
//     }
//   };

//   const handleSendReply = async (id) => {
//     try {
//       const response = await axios.post('http://localhost:8081/api/queries/create', { id, reply });
//       console.log("Response from server:", response.data);

//       // After sending reply, update the messages
//       handleReceiveMessage();
//       // Reset the reply input field
//       setReply("");
//     } catch (error) {
//       console.error("Error sending reply:", error);
//     }
//   };

//   useEffect(() => {
//     handleReceiveMessage();
//   }, []); // Fetch messages on component mount

//   return (
//     <>
//       <div className="header">
//         <h1>Admin Help Interface</h1>
//       </div>

//       <div className="main-content">
//         <div className="received-messages2 box">
//           <h2>Received Messages</h2>
//           {receivedMessages.map((message) => (
//             <div key={message.id} className="message user">
//               <p>{message.content}</p>
//               <div className="reply-input">
//                 <textarea
//                   placeholder="Type your reply here..."
//                   value={reply}
//                   onChange={(e) => setReply(e.target.value)}
//                 />
//                 <button onClick={() => handleSendReply(message.id)}>Reply</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="footer">
//         <p>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default Queries;





import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Queries.css';

function Queries() {
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [reply, setReply] = useState("");

  const handleReceiveMessage = async () => {
    try {
      const response = await axios.get('http://192.168.138.130:8080/api/queries/query');
      setReceivedMessages(response.data);
    } catch (error) {
      console.error("Error receiving messages:", error);
    }
  };

  const handleSendReply = async (id) => {
    try {
      const response = await axios.post('http://192.168.138.130:8081/api/queries/create', { id, reply });
      console.log("Response from server:", response.data);

      // After sending reply, update the messages
      handleReceiveMessage();
      // Reset the reply input field
      setReply("");
    } catch (error) {
      console.error("Error sending reply:", error);
    }
  };

  const handleResolveQuery = async (id) => {
    try {
      const response = await axios.post(`http://192.168.138.130:8080/api/queries/resolve/${id}`);
      console.log("Query resolved:", response.data);

      // After resolving query, update the messages
      handleReceiveMessage();
    } catch (error) {
      console.error("Error resolving query:", error);
    }
  };

  useEffect(() => {
    handleReceiveMessage();
  }, []); // Fetch messages on component mount

  return (
    <>
         <header><h2>My Online Tutor</h2></header>

      <div className="main-content">
        <div className="received-messages2 box">
          <h2>Received Messages</h2>
          {receivedMessages.map((message) => (
            <div key={message.id} className={`message user ${message.resolved ? 'resolved' : ''}`}>
              <p>{message.content}</p>
              <div className="reply-input">
                <textarea
                  placeholder="Type your reply here..."
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                />
                <button onClick={() => handleSendReply(message.id)}>Reply</button>
              </div>
              {!message.resolved && (
                <button onClick={() => handleResolveQuery(message.id)}>Resolve</button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div>
    </>
  );
}

export default Queries;
