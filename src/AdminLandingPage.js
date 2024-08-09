import React, { useState, useEffect } from "react";
import AdminDashboard from "./AdminDashboard";
import "./AdminLandingPage.css";
import { Link } from "react-router-dom";
import PieChartPage from "./PieChartPage";
import Adminnotifications from "./Adminnotifications";

export default function AdminLandingPage(){
    const [userCount, setUserCount] = useState(0);
    const [tutorCount, setTutotrCount] = useState(0);

  useEffect(() => {
    fetch("http://3.7.14.21:8080/api/users/users/count")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user count");
        }
        return response.json();
      })
      .then((data) => {
        setUserCount(data);
      })
      .catch((error) => {
        console.error("Error fetching user count:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://3.7.14.21:8080/api-v1/tutors/count")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user count");
        }
        return response.json();
      })
      .then((data) => {
        setTutotrCount(data);
      })
      .catch((error) => {
        console.error("Error fetching user count:", error);
      });
  }, []);
    
    return(
        <>
        <div>
            <AdminDashboard/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
            <Link to="UserManagement"><div class="card-admin" style={{marginLeft: "25%", marginTop: "-71%"}}>
            <p class="time-text"><span style={{color: "whitesmoke"}}>Users</span><span class="time-sub-text"></span></p>
            <div style={{display: "flex"}}>
            <div>
            <p class="day-text" style={{color: "whitesmoke"}}>All Users</p>
            </div>
            <div >
                <p style={{color: 'white', marginLeft: "45%", marginRight: "-65%", marginTop: "2%"}}>Users Count: {userCount}</p>
            </div>
            </div>
            </div></Link>

            <Link to="Tutors"><div className="card-admin" style={{marginLeft: "47%", marginTop: "-10%"}}>
            <p class="time-text"><span style={{color: "whitesmoke"}}>Tutors</span><span class="time-sub-text"></span></p>
            <div style={{display: "flex"}}>
            <div>
            <p class="day-text" style={{color: "whitesmoke"}}>All Tutors</p>
            </div>
            <div >
                <p style={{color: 'white', marginLeft: "45%", marginRight: "-65%", marginTop: "2%"}}>Tutors Count: {tutorCount}</p>
            </div>
            </div>
            </div></Link>

            <Link to="AdminCourses"><div className="card-admin" style={{marginLeft: "70%", marginTop: "-10%"}}>
            <p class="time-text"><span style={{color: "whitesmoke"}}>Courses</span><span class="time-sub-text"></span></p>
            <p class="day-text" style={{color: "whitesmoke"}}>All Courses</p>
            </div></Link>
        </div>
        <div style={{marginTop: "-32%", marginLeft: "25%"}}>
        <PieChartPage/>
        </div>
        <div>
            <Adminnotifications/>
        </div>
        </>
    )
}