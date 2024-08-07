

// import React from "react";
// import { Link } from "react-router-dom";
// import './Tutors.css';
// import './AdminDashboard.css';

// function Tutors() {
//   return (
//     <>
//           <div className="header1">
//     <label><h1>My Online Tutor</h1></label>
//   </div>
//         {/* <header><h2>My Online Tutor</h2></header> */}
//       <section className="management">
//         <div className="tutors-management-page">
//           <h1>Tutors Management</h1>
//           <div className="course-card">
//             <Link to="/AcadamicTutorList.js" className="course-link">
//               <button>Show Academic Course Tutors</button>
//             </Link>
//           </div>
//           <div className="course-card">
//             <Link to="/TechnicalTutorList.js" className="course-link">
//               <button>Show Technical Course Tutors</button>
//             </Link>
//           </div>
//           <div className="course-card">
//             <Link to="/ProfessionalTutorList.js" className="course-link">
//               <button>Show Professional Skills Course Tutors</button>
//             </Link>
           
//           </div>
//           <Link to='/AdminDashboard'><button className="custom-button">Back</button></Link>
//         </div>
//       </section>
//       <div className="footer1">
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
//       </div>
//     </>
//   );
// }

// export default Tutors;


import React, { useState, useEffect } from 'react';
import './Tutors.css';
import AdminDashboard from './AdminDashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Tutors() {
  const [tutors, setTutors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7); // Number of items to display per page

  useEffect(() => {
    fetchTutors();
  }, []);

  const fetchTutors = async () => {
    try {
      const response = await fetch('http://192.168.138.130:8080/api-v1/tutors');
      const data = await response.json();
      setTutors(data);
      setFilteredTutors(data); // Initially, set filteredTutors to all tutors
    } catch (error) {
      console.error('Error fetching tutors:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterTutors(event.target.value);
  };

  const filterTutors = (searchTerm) => {
    const filtered = tutors.filter(tutor =>
      tutor.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredTutors(filtered);
  };
  

  const handleDelete = async (id) => {
    try {
      // Send DELETE request to the backend API
      const response = await fetch(`http://192.168.138.130:8080/api-v1/${id}`, {
        method: 'DELETE',
      });
  
      // Check if the request was successful
      if (response.ok) {
        // Remove the deleted tutor from the local state
        const updatedTutors = tutors.filter(tutor => tutor.id !== id);
        setTutors(updatedTutors);
        setFilteredTutors(updatedTutors);
      } else {
        console.error('Error deleting tutor:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting tutor:', error);
    }
  };
  

  const handleView = (tutor) => {
    setSelectedTutor(tutor);
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setSelectedTutor(null); // Clear selected tutor
    setIsCartOpen(false);
  };

  const indexOfLastTutor = currentPage * itemsPerPage;
  const indexOfFirstTutor = indexOfLastTutor - itemsPerPage;
  const currentTutors = filteredTutors.slice(indexOfFirstTutor, indexOfLastTutor);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
          <AdminDashboard/>
    <div style={{marginTop: "-50%", width: "60%", marginLeft: "30%"}}>

     <div style={{display: "flex"}}>
    <div style={{marginLeft: "%"}}>
      <h1 style={{marginLeft: "60%", marginRight: "-100%"}}>Tutors List</h1>
      </div>
      <div  style={{marginLeft: "48%", marginTop: "2%"}}> 
      <input
        type="text"
        placeholder="Enter Course Name"
        value={searchTerm}
        onChange={handleSearchChange}
     />
      </div>
      </div>
      <table className={isCartOpen ? 'blur' : ''}>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th> Tutor ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentTutors.map((tutor, index) => (
            <tr key={tutor.id}>
              <td>{indexOfFirstTutor + index + 1}</td> 
              <td>{tutor.id}</td>
              <td>{tutor.firstName} {tutor.lastName}</td>
              <td>{tutor.email}</td>
              <td>{tutor.courses.join(', ')}</td>

              <td>
                <button onClick={() => handleView(tutor)} style={{backgroundColor:'green'}}>View</button>
                <button onClick={() => handleDelete(tutor.id)} style={{backgroundColor: "red", marginLeft: "7%"}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isCartOpen && selectedTutor && (
        <div className="view-cart-overlay" onClick={handleCloseCart}></div>
      )}
      {isCartOpen && selectedTutor && (
        <div className="view-cart" style={{width: "30%"}}>
          <div className="view-cart-content">
            <h2>Tutor Details</h2>
            <p>Tutor ID: <span>{selectedTutor.id}</span></p>
            <p>Name: <span>{selectedTutor.firstName} {selectedTutor.lastName}</span></p>
            <p>Email: <span>{selectedTutor.email}</span></p>
            <p>Course:<span> {selectedTutor.courses.join(', ')}</span></p>
            <p>Mobile:<span>{selectedTutor.mobilenumber}</span></p>
            <p>Qualification:<span>{selectedTutor.qualification},{selectedTutor.higherQualification}</span></p>
            <p>Mobile:<span>{selectedTutor.address}</span></p>
            <button onClick={handleCloseCart}>Close</button>
          </div>
        </div>
      )}
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginLeft: "61.6%" }}>
    <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
  <FontAwesomeIcon icon={faArrowLeft} /> 
  
</button>
<button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastTutor >= filteredTutors.length}>
  
  <FontAwesomeIcon icon={faArrowRight} />
</button>

</div>

    </>
  );
}

export default Tutors;
