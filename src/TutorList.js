import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

function TutorList() {
  const [tutorData, setTutorData] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://3.7.14.21:8080/admin/show");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setTutorData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
    <div >
    <div>
     <AdminDashboard/>
     </div>
     <div style={{marginLeft: "30%", marginTop: "-50%", width: "60%"}}>
      <table className="table" style={{color: 'black'}}>
        <thead>
          <tr >
            <th scope="col" style={{color: "black"}}>Id</th>
            <th scope="col" style={{color: "black"}}>UserName</th>
            <th scope="col" style={{color: "black"}}>Assigned Tutorname</th>
            <th scope="col" style={{color: "black"}}>Course</th>
          </tr>
        </thead>
        <tbody>
          {tutorData.map((tutor) => (
            <tr key={tutor.id}>
              <th scope="row" style={{color: "black"}}>{tutor.id}</th>
              <td>{tutor.firstName}</td>
              <td>{tutor.assignTutorname}</td>
              <td>{tutor.courses}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </>
  );
}

export default TutorList;
