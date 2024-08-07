

// import React, { useState, useEffect } from "react";
// import axios from 'axios';

// function ViewFile() {
//     const [tasks, setTasks] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8061/api/file/getAll');
//                 setTasks(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();

//         return () => {
//             // Cleanup logic if needed
//         };
//     }, []);

//     // Function to handle viewing document file
//     const handleViewDocument = (documentUrl) => {
//         window.open(documentUrl, '_blank');
//     };

//     const handleViewFiles = async (task) => {
//         console.log(task.id);
//         try {
//             if (task.documentFile) {
//                 const response = await axios.get(`http://localhost:8061/api/file/files/${task.id}`, { responseType: 'blob' });
//                 const file = new Blob([response.data], { type: 'application/pdf' });
//                 const fileURL = URL.createObjectURL(file);
//                 window.open(fileURL, '_blank');
//             } else {
//                 console.error('No document file found for this task');
//             }
//         } catch (error) {
//             console.error('Error handling view files:', error);
//         }
//     };

//     return (
//         <>
//         <div>
//             <center><h2>View File</h2></center>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>User ID</th>
//                         <th>Course Name</th>
//                         <th>Topic Name</th>
//                         <th>Tutor Id</th>
//                         <th>File</th>
//                         <th>tutorName</th>
//                         <th>date</th>
//                         <th>View</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tasks.map(task => (
//                         <tr key={task.id}>
//                             <td>{task.id}</td>
//                             <td>{task.userId}</td>
//                             <td>{task.courseName}</td>
//                             <td>{task.topicName}</td>
//                             <td>{task.tutorId}</td>
//                             <td>
//                                 { task.documentFile ? (
//                                     <button onClick={() => handleViewFiles(task)}>View</button>
//                                 ) : (
//                                     <span>No files</span>
//                                 )}
//                             </td>
//                             <td>{task.tutorName}</td>
//                             <td>{task.date}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//         </>
//     );
// }

// export default ViewFile;







import React, { useState, useEffect } from "react";
import axios from 'axios';

function ViewFile({ currentUser }) {
    const [tasks, setTasks] = useState([]);
    const [fileData, setFileData] = useState(null);
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (currentUser && currentUser.id) {
                    const response = await axios.get(`http://192.168.138.130:8080/api/file/user/${currentUser.id}`);
                    setTasks(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        return () => {
            // Cleanup logic if needed
        };
    }, [currentUser]);

    const handleViewFiles = async (taskId) => {
        try {
            const response = await axios.get(`http://192.168.138.130:8080/api/file/files/${taskId}`, { responseType: 'blob' });
            const file = new Blob([response.data], { type: 'application/pdf' });
            setFileData(file);
        } catch (error) {
            console.error('Error handling view files:', error);
        }
    };

    const handleCloseFile = () => {
        setFileData(null);
    };

    return (
        <>
            <div className="header2">
                <label>
                    <h1>My Online Tutor</h1>
                </label>

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

            <div className="currentdate">
                <h3> {currentTime}</h3>
            </div>

            {fileData ? (
                <div>
                    <button onClick={handleCloseFile} style={{ backgroundColor: "#AE445A" }}>Close File</button>
                    <embed src={URL.createObjectURL(fileData)} type="application/pdf" width="100%" height="600px" />
                </div>
            ) : (
                <div>
                    <center><h2>View File</h2></center>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User ID</th>
                                <th>Course Name</th>
                                <th>Topic Name</th>
                                <th>Tutor Id</th>
                                <th>View</th>
                                <th>TutorName</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map(task => (
                                <tr key={task.id}>
                                    <td>{task.id}</td>
                                    <td>{task.userId}</td>
                                    <td>{task.courseName}</td>
                                    <td>{task.topicName}</td>
                                    <td>{task.tutorId}</td>
                                    <td>
                                        {task.documentFile ? (
                                            <button onClick={() => handleViewFiles(task.id)} style={{ backgroundColor: 'green' }}>View</button>
                                        ) : (
                                            <span>No files</span>
                                        )}
                                    </td>
                                    <td>{task.tutorName}</td>
                                    <td>{task.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

export default ViewFile;
