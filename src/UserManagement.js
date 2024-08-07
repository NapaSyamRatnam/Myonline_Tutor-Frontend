

// import React from "react";
// import { Link } from "react-router-dom";
// import './UserManagement.css';
// import './AdminDashboard.css';

// function UserManagement() {
//   return (
//     <>
//          <div className="header1">
//     <label><h1>My Online Tutor</h1></label>
//   </div>
//       {/* <header><h2>My Online Tutor</h2></header> */}
//     <section className="management">
//     <div className="user-management-page">
//       <h1>User Management</h1>
//     <div className="course-card">
//       <Link to="/AcadamicUserList.js" className="course-link">
//         <button>Show Academic Course Users</button>
//       </Link>
//       </div>
//       <div className="course-card">
//       <Link to="/TechnicalUserList.js" className="course-link">
//         <button>Show Technical Course Users</button>
//       </Link>
// </div>
// <div className="course-card">
//       <Link to="/MusicUserList" className="course-link">
//         <button>Show Professional Skills Course Users</button>
//       </Link>
//       </div>
//       <Link to='/AdminDashboard'><button className="custom-button">Back</button></Link>
//     </div>
//     </section>
//     <div className="footer1">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>

//   );
// }

// export default UserManagement;
import React from "react";
import { Link } from "react-router-dom";
import './UserManagement.css';
import './AdminDashboard.css';
import AdminDashboard from "./AdminDashboard";

function UserManagement() {
  return (
    <>
      <AdminDashboard/>
      <section className="admin-management" style={{marginTop: "-48%", marginLeft: "10%", width: "50%"}}>
        <div className="user-management-page">
          <h2 style={{marginLeft: "55%", fontSize: "3rem", marginRight: "-30%"}}>User Management</h2>
          <div className="sections-container">
            <section className="section">
              <h2 style={{marginLeft: "50%", marginRight: "-40%"}}>Academic Courses</h2>
              <div className="course-card">
                <Link to="/SchoolUserList" className="course-link">
                  <button>Show School Users</button>
                </Link>
              </div>
              <div className="course-card">
                <Link to="/CollegeUserList" className="course-link">
                  <button>Show College Users</button>
                </Link>
              </div>
            </section>
            {/* Technical Section */}
            <section className="section">
              <h2 style={{marginLeft: "50%", marginRight: "-40%"}}>Technical Courses</h2>
              <div className="course-card">
                <Link to="/JavaUserList" className="course-link">
                  <button>Show Java Users</button>
                </Link>
              </div>
              <div className="course-card">
                <Link to="/SQLUserList" className="course-link">
                  <button>Show SQL Users</button>
                </Link>
              </div>
              <div className="course-card">
                <Link to="/PythonUserList" className="course-link">
                  <button>Show Python Users</button>
                </Link>
              </div>
              <div className="course-card">
                <Link to="/AWSUserList" className="course-link">
                  <button>Show AWS Users</button>
                </Link>
              </div>
            </section>
            {/* Professional Section */}
            <section className="section" style={{height: "70%"}}>
              <h2 style={{marginLeft: "50%", marginRight: "-80%"}}>Professional Courses</h2>
              <div className="course-card">
                <Link to="/MusicUserList" className="course-link">
                  <button>Show Music Users</button>
                </Link>
              </div>
              <div className="course-card">
                <Link to="/YogaUserList" className="course-link">
                  <button>Show Yoga Users</button>
                </Link>
              </div>
              <div className="course-card">
                <Link to="/CookingUserList" className="course-link">
                  <button>Show Cooking Users</button>
                </Link>
              </div>
              <div className="course-card">
                <Link to="/FitnessUserList" className="course-link">
                  <button>Show Fitness Users</button>
                </Link>
              </div>
            </section>
          </div>
          {/* <Link to='/AdminDashboard'><button className="custom-button">Back</button></Link> */}
        </div>
      </section> 
      {/* <div className="footer1" style={{width: "98%"}}>
        <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </div> */}
    </>
  );
}

export default UserManagement;
