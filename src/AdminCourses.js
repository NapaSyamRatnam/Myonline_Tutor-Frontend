import React from "react";
import { Link } from "react-router-dom";
import './Landingpage.css';
import AdminDashboard from "./AdminDashboard";

export default function AdminCourses(){
    return(
        <>
        <AdminDashboard/>
        <div className="app" id='landingpage' style={{width: "40%", marginTop: "-49%"}}>
        <section className="home-section" style={{marginLeft: "70%"}}>
          <Link to="/Academic" className="course-link">
            <div className="course-item" style={{height: "30vh"}}>
              <img
                src="https://img.freepik.com/free-photo/kids-getting-back-school-together_23-2149507650.jpg?w=900&t=st=1704865629~exp=1704866229~hmac=bf48f531d643d12a0a78e7649c08158b6f50f18913eb2ae8f59899328b19a6ff"
                alt=""
                className="course-image"
              />
              <h2>Academic Courses</h2>
            </div>
          </Link>

          <Link to="/Technical" className="course-link" style={{marginLeft: "45%"}}>
            <div className="course-item" style={{height: "30vh"}}>
              <img
                src="https://img.freepik.com/premium-photo/happy-young-student-with-laptop-looking-his-classmate-sitting-front-him-during-discussion-consultation-lesson_274679-9699.jpg?w=900"
                alt=""
                className="course-image"
              />
              <h2>Technical Courses</h2>
            </div>
          </Link>

        <br/> 
          <Link to="/Professional" className="course-link" style={{marginLeft: "-295%", marginTop: "178%"}}>
            <div className="course-item" style={{height: "30vh"}}>
              <img
                src="https://img.freepik.com/free-photo/tailors-working_1098-15502.jpg?w=900&t=st=1704866085~exp=1704866685~hmac=2a579c0ddc8fa17d927942a0142f6fabeb54dc1872fabdc5e56739fdd9f42be2"
                alt=""
                className="course-image"
              />
              <h2>Professional/Skilled</h2>
            </div>
          </Link>
        </section>
        </div>
        </>
    )
}