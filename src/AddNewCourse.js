

// import React, { useState } from "react";
// import axios from "axios";
// import './AddNewCourse.css';
// import AdminDashboard from "./AdminDashboard";
// import { toast, ToastContainer} from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// function AddNewCourse() {
//   const [courses, setCourses] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState(""); // Changed from duration to price
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleAddCourse = async () => {
//     try {
//       const response = await axios.post("http://localhost:8080/api/admin/add-course", {
//         courses,
//         description,
//         price,
//       });

//       if (response.status === 200) {
//         // Course added successfully
//         console.log("Course added successfully");
//         toast.success("Course added successfully"); // Display success toast
//         // You may want to reset the form or clear the state here
//         setCourses("");
//         setDescription("");
//         setPrice("");
//       } else {
//         toast.success("Course added successfully"); // Display success toast
//         console.log("Course added successfully");
//         window.location.reload();
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setErrorMessage("An error occurred while adding the course. Please try again later.");
//     }
//   };


//   return (
//     <>
//       <AdminDashboard/> <br/> <br/>
//       <div className="add-course-page" style={{marginTop: "-48%", marginLeft: "30%"}}>
//         <h2 style={{fontSize: "2.5rem", marginLeft: "25%"}}>Add New Course</h2> <br/>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         <form>
//           <label>Course Name:</label>
//           <input type="text" value={courses} onChange={(e) => setCourses(e.target.value)} />

//           <label>Description:</label>
//           <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

//           <label>Price:</label> {/* Changed from Duration to Price */}
//           <input
//             type="text"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="price-input"
//           />

//           <button type="button" onClick={handleAddCourse} style={{width: "30%"}}>
//             Add Course
//           </button>
//         </form>
//       </div>
//       <ToastContainer/>
//     </>
//   );
// }

// export default AddNewCourse;

import React, { useState } from "react";
import axios from "axios";
import './AddNewCourse.css';
import AdminDashboard from "./AdminDashboard";
import { toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddNewCourse() {
  const [courses, setCourses] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [courseError, setCourseError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddCourse = async () => {
    // Reset previous errors
    setCourseError("");
    setDescriptionError("");
    setPriceError("");
    setErrorMessage("");

    // Validate inputs
    let isValid = true;
    if (!courses) {
      setCourseError("Please enter course name.");
      isValid = false;
    }
    if (!description) {
      setDescriptionError("Please enter description.");
      isValid = false;
    }
    if (!price) {
      setPriceError("Please enter price.");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    try {
      const response = await axios.post("http://3.7.14.21:8080/api/admin/add-course", {
        courses,
        description,
        price,
      });

      if (response.status === 200) {
        console.log("Course added successfully");
        toast.success("Course added successfully");
        setCourses("");
        setDescription("");
        setPrice("");
      } else {
        toast.error("Failed to add course. Please try again later.");
        console.log("Failed to add course");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while adding the course. Please try again later.");
    }
  };

  return (
    <>
      <AdminDashboard/> <br/> <br/>
      <div className="add-course-page" style={{marginTop: "-48%", marginLeft: "30%"}}>
        <h2 style={{fontSize: "2.5rem", marginLeft: "25%"}}>Add New Course</h2> <br/>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form>
          <label>Course Name:</label>
          <input type="text" value={courses} onChange={(e) => setCourses(e.target.value)} />
          {courseError && <p className="error-message">{courseError}</p>}

          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          {descriptionError && <p className="error-message">{descriptionError}</p>}

          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="price-input"
          />
          {priceError && <p className="error-message">{priceError}</p>}

          <button type="button" onClick={handleAddCourse} style={{width: "30%"}}>
            Add Course
          </button>
        </form>
      </div>
      <ToastContainer/>
    </>
  );
}

export default AddNewCourse;
