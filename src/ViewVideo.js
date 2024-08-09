
// import React, { useState, useEffect } from "react";
// import axios from 'axios';

// function ViewVideo() {
//     const [tasks, setTasks] = useState([]);
//     const [videoData, setVideoData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8060/api/video/user/1');
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

//     const handleViewFiles = async (taskId) => {
//         try {
//             const response = await axios.get(`http://localhost:8060/api/video/videos/${taskId}`, { responseType: 'blob' });
//             const video = new Blob([response.data], { type: 'video/mp4' });
//             setVideoData(video);
//         } catch (error) {
//             console.error('Error handling view files:', error);
//         }
//     };

//     const handleCloseVideo = () => {
//         setVideoData(null);
//     };

//     return (
//         <>
//             {videoData ? (
//                 <div>
//                     <button onClick={handleCloseVideo} style={{backgroundColor:"#AE445A"}}>Close Video</button>
//                     <video controls width="100%" height="auto">
//                         <source src={URL.createObjectURL(videoData)} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 </div>
//             ) : (
//                 <div>
//                     <center><h2>View video</h2></center>
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>User ID</th>
//                                 <th>Course Name</th>
//                                 <th>Topic Name</th>
//                                 <th>Tutor Id</th>
//                                 <th>View</th>
//                                 <th>tutorName</th>
//                                 <th>date</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {tasks.map(task => (
//                                 <tr key={task.id}>
//                                     <td>{task.id}</td>
//                                     <td>{task.userId}</td>
//                                     <td>{task.courseName}</td>
//                                     <td>{task.topicName}</td>
//                                     <td>{task.tutorId}</td>
//                                     <td>
//                                         { task.videoFile ? (
//                                             <button onClick={() => handleViewFiles(task.id)} style={{backgroundColor:'green'}}>View</button>
//                                         ) : (
//                                             <span>No files</span>
//                                         )}
//                                     </td>
//                                     <td>{task.tutorName}</td>
//                                     <td>{task.date}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </>
//     );
// }

// export default ViewVideo;
















import React, { useState, useEffect } from "react";
import axios from 'axios';


    function ViewVideo({ currentUser }) {

        const [tasks, setTasks] = useState([]);
        const [videoData, setVideoData] = useState(null);

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
              axios.get(`http://3.7.14.21:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
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
                if (currentUser) {
                    const response = await axios.get(`http://3.7.14.21:8080/api/video/user/${currentUser.id}`);
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
            const response = await axios.get(`http://3.7.14.21:8080/api/video/videos/${taskId}`, { responseType: 'blob' });
            const video = new Blob([response.data], { type: 'video/mp4' });
            setVideoData(video);
        } catch (error) {
            console.error('Error handling view files:', error);
        }
    };

    const handleCloseVideo = () => {
        setVideoData(null);
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
            {videoData ? (
                <div>
                    <button onClick={handleCloseVideo} style={{backgroundColor:"#AE445A"}}>Close Video</button>
                    <video controls width="100%" height="auto">
                        <source src={URL.createObjectURL(videoData)} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                <div>
                    <center><h2>View video</h2></center>
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
                                        { task.videoFile ? (
                                            <button onClick={() => handleViewFiles(task.id)} style={{backgroundColor:'green'}}>View</button>
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

export default ViewVideo;

















