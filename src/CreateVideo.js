
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faBook, faTasks, faComments, faCog, faSignOutAlt, faUsers, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function CreateVideo() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [tutorData, setTutorData] = useState(null);
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        userId: '',
        courseName: '',
        topicName: '',
        tutorId: '',
        video: null,
        tutorName: '',
        date: new Date().toISOString().split('T')[0]
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (tutorData && tutorData.courses) {
            fetchData();
        }
    }, [tutorData]);

    const fetchData = () => {
        axios.get(`http://192.168.138.130:8080/api/users/by-course/${tutorData.courses.join(',')}`)
            .then(response => {
                setUsers(response.data); // Update users state with fetched data
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    };

    useEffect(() => {
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

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('tutorId');
        window.location.href = '/'; // Redirect to login page
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        let error = '';

        if (id === 'userId' || id === 'tutorId') {
            if (!value.trim()) {
                error = 'This field is required';
            }
        } else if (id === 'courseName' || id === 'topicName' || id === 'tutorName') {
            if (!value.trim()) {
                error = 'This field is required';
            } else if (/\d/.test(value) || /[^a-zA-Z\s]/.test(value)) {
                error = 'This field should not contain numbers or special characters';
            }
        } else if (id === 'date') {
            const selectedDate = new Date(value);
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison
            if (selectedDate < today) {
                error = 'Please select today\'s date or a future date';
            }
        }

        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));

        setErrors(prevState => ({
            ...prevState,
            [id]: error
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
        const newErrors = {};

        // Validation
        if (!formData.userId.trim()) {
            newErrors.userId = 'User ID is required';
            hasError = true;
        }

        if (!formData.courseName.trim()) {
            newErrors.courseName = 'Course Name is required';
            hasError = true;
        }

        if (!formData.topicName.trim()) {
            newErrors.topicName = 'Topic Name is required';
            hasError = true;
        } else if (/\d/.test(formData.topicName)) {
            newErrors.topicName = 'Topic Name should not contain numbers';
            hasError = true;
        }

        if (!formData.tutorId.trim()) {
            newErrors.tutorId = 'Tutor ID is required';
            hasError = true;
        }

        if (!formData.video) {
            newErrors.video = 'Please select a video file';
            hasError = true;
        }

        if (!formData.tutorName.trim()) {
            newErrors.tutorName = 'Tutor Name is required';
            hasError = true;
        } else if (/\d/.test(formData.tutorName)) {
            newErrors.tutorName = 'Tutor Name should not contain numbers';
            hasError = true;
        }

        const selectedDate = new Date(formData.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison
        if (selectedDate < today) {
            newErrors.date = 'Please select today\'s date or a future date';
            hasError = true;
        }

        if (hasError) {
            setErrors(newErrors);
        } else {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });

            try {
                const response = await axios.post(`http://192.168.138.130:8080/api/video/addVideo`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                console.log(response.data);
                toast.success("Video uploaded successfully!", {
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
                <div className="card-video">
                    <div className="card-body"> <br />
                        <h2 className="card-title" style={{ marginLeft: "37%", fontSize: "2.3rem" }}>Upload Video</h2>
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: "flex" }}>
                                <div className="form-group">
                                    <label htmlFor="userId" className="form-label">User ID:</label><br />
                                    <select className="form-control" id="userId" onChange={handleChange} style={{ width: "150%" }}>
                                        <option value="">Select User</option>
                                        <option value="all">All Users</option> 
                                        {users.map(user => (
                                            <option key={user.id} value={user.id}>{user.firstName}</option>
                                        ))}
                                    </select>
                                    {errors.userId && <p style={{ color: "red" }}>{errors.userId}</p>}
                                </div>
                                <div className="form-group" style={{ marginLeft: "20%" }}>
                                    <label htmlFor="courseName" className="form-label">Course Name:</label><br></br>
                                    <input type="text" className="form-control" id="courseName" placeholder="Course Name" onChange={handleChange} style={{ width: "150%" }} />
                                    {errors.courseName && <p style={{ color: 'red' }}>{errors.courseName}</p>}
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div className="form-group">
                                    <label htmlFor="topicName" className="form-label">Topic Name:</label><br></br>
                                    <input type="text" className="form-control" id="topicName" placeholder="Topic Name" onChange={handleChange} style={{ width: "150%" }} />
                                    {errors.topicName && <p style={{ color: 'red' }}>{errors.topicName}</p>}
                                </div>
                                <div className="form-group" style={{ marginLeft: "20%" }}>
                                    <label htmlFor="tutorId" className="form-label">Tutor Id:</label><br></br>
                                    <input type="number" className="form-control" id="tutorId" placeholder="Tutor Id" onChange={handleChange} style={{ width: "150%" }} />
                                    {errors.tutorId && <p style={{ color: 'red' }}>{errors.tutorId}</p>}
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div className="form-group">
                                    <label htmlFor="video" className="form-label">Video:</label><br></br>
                                    <input type="file" className="form-control" id="video" onChange={handleFileChange} style={{ width: "163%", marginTop: "-3%" }} />
                                    {errors.video && <p style={{ color: 'red' }}>{errors.video}</p>}
                                </div>
                                <div className="form-group" style={{ marginLeft: "20%" }}>
                                    <label htmlFor="tutorName" className="form-label">Tutor Name:</label><br></br>
                                    <input type="text" className="form-control" id="tutorName" placeholder="Tutor Name" onChange={handleChange} style={{ width: "150%" }} />
                                    {errors.tutorName && <p style={{ color: 'red' }}>{errors.tutorName}</p>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="date" className="form-label">Date:</label><br />
                                <input type="date" className="form-control" id="date" onChange={handleChange} style={{ width: "120%" }} />
                                {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: "30%", marginLeft: "30%" }}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateVideo;
