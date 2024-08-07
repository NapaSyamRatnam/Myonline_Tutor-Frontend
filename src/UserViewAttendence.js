
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserViewAttendence.css';
import { Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';

function UserViewAttendence() {
  const [month, setMonth] = useState('');
  const [attendanceData, setAttendanceData] = useState(null);
  const [fetchData, setFetchData] = useState(false);

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleGetByMonth = () => {
    setFetchData(true);
  };

  const handleGetAllAttendance = () => {
    setFetchData(true);
  };

  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        let response;
        if (month !== '') {
          response = await axios.get(`http://192.168.138.130:8080/user/getByMonth/${month}`);
        } else {
          response = await axios.get('http://192.168.138.130:8080/user/getAllAttendance');
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
  }, [fetchData, month]);

  return (
    <>
    <AdminDashboard/>
       {/* <div className="header1">
    <label><h1>My Online Tutor</h1></label>
  </div> */}
       {/* <header><h2>My Online Tutor</h2></header> */}
    <div className="attendance-container" style={{marginTop:'-40%', marginLeft: "37%"}}>
      <h1 className="title">User Attendance Deatils</h1>

      <div className="form-container">
        <label>
          Enter Month:
          <input type="text" value={month} onChange={handleMonthChange} />
        </label>

        <button className="btn" onClick={handleGetByMonth} style={{width: "40%"}}>
          Get Data by Month
        </button>
        <button className="btn" onClick={handleGetAllAttendance} style={{width: "40%"}}>
          Get All Attendance Data
        </button>
      </div>

      {attendanceData && (
        <div className="data-container">
          {Array.isArray(attendanceData) ? (
            attendanceData.map((data) => (
              <div key={data.month} className="data-item">
                <p>Month: {data.month}</p>
                <p>Year: {data.year}</p>
                <p>No. of Working Days: {data.noOfWorkingDays}</p>
                <p>No. of Present Days: {data.noOfPresentDays}</p>
                <p>No. of Absent Days: {data.noOfAbsentDays}</p>
              </div>
            ))
          ) : (
            <div className="data-item">
              <p>Month: {attendanceData.month}</p>
              <p>Year: {attendanceData.year}</p>
              <p>No. of Working Days: {attendanceData.noOfWorkingDays}</p>
              <p>No. of Present Days: {attendanceData.noOfPresentDays}</p>
              <p>No. of Absent Days: {attendanceData.noOfAbsentDays}</p>
            </div>
          )}
        </div>
      )}
      {/* <Link to='/AdminDashboard'><button className="custom-button">Back</button></Link> */}
    </div>
    </>
  );
}

export default UserViewAttendence;