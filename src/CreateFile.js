
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers, faUserCheck } from '@fortawesome/free-solid-svg-icons';

function CreateFile() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [tutorData, setTutorData] = useState(null);
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        userId: '',
        courseName: '',
        topicName: '',
        tutorId: '',
        document: null,
        tutorName: '',
        date: new Date().toISOString().split('T')[0] // Set default value to today's date
    });
    const [error, setError] = useState({});

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const tutorId = localStorage.getItem('tutorId');
        if (tutorId) {
            axios.get(`http://3.7.14.21:8080/api-v1/${tutorId}`)
                .then(response => {
                    setTutorData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching tutor details:', error);
                });
        }
    }, []);

    useEffect(() => {
        if (tutorData && tutorData.courses) {
            fetchData();
        }
    }, [tutorData]);

    const fetchData = () => {
        axios.get(`http://3.7.14.21:8080/api/users/by-course/${tutorData.courses.join(',')}`)
            .then(response => {
                setUsers(response.data); // Update users state with fetched data
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    };

    const handleLogout = () => {
        localStorage.removeItem('tutorId');
        window.location.href = '/'; // Redirect to login page
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        let errorMessage = '';

        // Validate each field
        switch (id) {
            case 'userId':
            case 'tutorId':
                if (!value.trim()) {
                    errorMessage = 'This field is required';
                }
                break;
            case 'courseName':
            case 'topicName':
            case 'tutorName':
                if (!value.trim()) {
                    errorMessage = 'This field is required';
                } else if (/\d/.test(value) || /[^a-zA-Z\s]/.test(value)) {
                    errorMessage = 'Field should not contain numbers or special characters';
                }
                break;
            case 'date':
                const selectedDate = new Date(value);
                const today = new Date();
                today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison
                if (selectedDate < today) {
                    errorMessage = 'Please select today\'s date or a future date';
                }
                break;
            case 'document':
                if (!value) {
                    errorMessage = 'Please select a file';
                }
                break;
            default:
                break;
        }

        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));

        // Update error state
        setError((prevState) => ({
            ...prevState,
            [id]: errorMessage,
        }));
    };

    const handleFileChange = (e) => {
        const { id, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let hasError = false;
        const newError = {};

        if (!formData.userId.trim()) {
            newError.userId = 'User ID is required';
            hasError = true;
        }

        // Validate Course Name
        if (!formData.courseName.trim()) {
            newError.courseName = 'Course Name is required';
            hasError = true;
        }

        // Validate Topic Name
        if (!formData.topicName.trim()) {
            newError.topicName = 'Topic Name is required';
            hasError = true;
        } else if (/\d/.test(formData.topicName) || /[^a-zA-Z\s]/.test(formData.topicName)) {
            newError.topicName = 'Topic Name should not contain numbers or special characters';
            hasError = true;
        }

        // Validate Tutor ID
        if (!formData.tutorId.trim()) {
            newError.tutorId = 'Tutor ID is required';
            hasError = true;
        }

        // Validate File
     

        // Validate Tutor Name
        if (!formData.tutorName.trim()) {
            newError.tutorName = 'Tutor Name is required';
            hasError = true;
        } else if (/\d/.test(formData.tutorName) || /[^a-zA-Z\s]/.test(formData.tutorName)) {
            newError.tutorName = 'Tutor Name should not contain numbers or special characters';
            hasError = true;
        }

        // Validate Date
        const selectedDate = new Date(formData.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison
        if (selectedDate < today) {
            newError.date = 'Please select today\'s date or a future date';
            hasError = true;
        }

        if (hasError) {
            setError(newError);
        } else {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });

            try {
                const response = await axios.post(`http://3.7.14.21:8080/api/file/addFile`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                console.log(response.data);
                toast.success("File sent successfully!", {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <>
            <br />
            <div className="header1">
                <label><h1 style={{ color: 'white' }}>My Online Tutor</h1></label>
                <div className="Tutor1">
                    <div style={{fontSize:"20px"}}>Tutor ID: {tutorData ? tutorData.id : 'Loading...'}</div>
                    <div style={{fontSize:"20px"}}>Tutor Name: {tutorData ? `${tutorData.firstName} ${tutorData.lastName}` : 'Loading...'}</div><br></br>
                    <p style={{ color:'white',fontSize:'25px'}}>{currentTime.toLocaleString()}</p> 
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
                    <li style={{ marginLeft: "10%" }}><button onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</button></li>
                </ul>
            </nav>
            <div style={{ backgroundColor: "white", width: "42%", marginLeft: "30%", borderRadius: "2rem" }}>
                <ToastContainer />
                <div className="card-tutor">
                    <div className="card-body"> <br />
                        <h2 className="card-title" style={{ marginLeft: "37%", fontSize: "2.3rem" }}>Send a File</h2>
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'flex' }}>
                                <div className="form-group">
                                    <label htmlFor="userId" className="form-label">User ID:</label><br />
                                    <select className="form-control" id="userId" onChange={handleChange} style={{ width: "150%" }}>
                                        <option value="">Select User</option>
                                        <option value="all">All Users</option> 
                                        {users.map(user => (
                                            <option key={user.id} value={user.id}>{user.firstName}</option>
                                        ))}
                                    </select>
                                    {error.userId && <p style={{ color: "red" }}>{error.userId}</p>}
                                </div>
                                <div className="form-group" style={{ marginLeft: "20%" }}>
                                    <label htmlFor="courseName" className="form-label">Course Name:</label><br />
                                    <input type="text" className="form-control" id="courseName" placeholder="Course Name" onChange={handleChange} style={{ width: "150%" }} />
                                    {error.courseName && <p style={{ color: "red" }}>{error.courseName}</p>}
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div className="form-group">
                                    <label htmlFor="topicName" className="form-label">Topic Name:</label><br />
                                    <input type="text" className="form-control" id="topicName" placeholder="Topic Name" onChange={handleChange} style={{ width: "150%" }} />
                                    {error.topicName && <p style={{ color: "red" }}>{error.topicName}</p>}
                                </div>
                                <div className="form-group" style={{ marginLeft: "20%" }}>
                                    <label htmlFor="tutorId" className="form-label">Tutor Id:</label><br />
                                    <input type="number" className="form-control" id="tutorId" placeholder="Tutor Id" onChange={handleChange} style={{ width: "150%" }} />
                                    {error.tutorId && <p style={{ color: "red" }}>{error.tutorId}</p>}
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div className="form-group">
                                    <label htmlFor="document" className="form-label">File:</label><br />
                                    <input type="file" className="form-control" id="document" onChange={handleFileChange} style={{ width: "163%", marginTop: "-3%" }} />
                                    {error.document && <p style={{ color: "red" }}>{error.document}</p>}
                                </div>
                                <div className="form-group" style={{ marginLeft: "20%" }}>
                                    <label htmlFor="tutorName" className="form-label">Tutor Name:</label><br />
                                    <input type="text" className="form-control" id="tutorName" placeholder="Tutor Name" onChange={handleChange} style={{ width: "150%" }} />
                                    {error.tutorName && <p style={{ color: "red" }}>{error.tutorName}</p>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="date" className="form-label">Date:</label><br />
                                <input type="date" className="form-control" id="date" onChange={handleChange} style={{ width: "120%" }} />
                                {error.date && <p style={{ color: "red" }}>{error.date}</p>}
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: "30%", marginLeft: "30%" }}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateFile;
