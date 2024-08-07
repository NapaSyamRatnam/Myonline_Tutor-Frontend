// 

// import React, { useState } from 'react';
// import './Certificate.css';
// import { Link } from 'react-router-dom';

// const Certificate = () => {
//   const [name, setName] = useState('');
//   const [course, setCourse] = useState('');
//   const [error, setError] = useState('');

//   const handleDownloadCertificate = () => {
//     if (!name.trim()) {
//       setError('Please enter your full name.');
//     } else if (!course.trim()) {
//       setError('Please enter the course name.');
//     } else {
//       // Reset error message
//       setError('');
//       // Proceed with certificate download
//       // You can implement the PDF generation logic here
//       // For demonstration purposes, I'm logging the details to the console
//       console.log('Name:', name);
//       console.log('Course:', course);
//     }
//   };

//   return (
//     <>
//      <div className="header1">
//         <label><h1>My Online Tutor</h1></label>
//       </div>
//     <div className="certificate-container">
//       <div className="certificate-form">
//       <h1>Course Certificate</h1>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter full name"
//           className="certificate-input"
//         />
//         <input
//           type="text"
//           value={course}
//           onChange={(e) => setCourse(e.target.value)}
//           placeholder="Enter the course"
//           className="certificate-input"
//         />
//         {error && <p className="error-message">{error}</p>}
//         <button type="button" onClick={handleDownloadCertificate} className="certificate-button">
//           Download Certificate
//         </button><br></br>
//         <br></br>
//         <Link to='/AdminDashboard'>    <button className='custom-button'>Back</button></Link>
//       </div>

//     </div>
    
//     </>
//   );
// };

// export default Certificate;







// import React, { useEffect, useState } from 'react';
// import jsPDF from 'jspdf';
// import axios from 'axios';
// import pics from './Img/image.jpg';
// import signature from './Img/signature.png';
// import signatures from './Img/signatures.png';

// const Certificate = () => {
//   const d = new Date();
//   const [name, setName] = useState('');
//   const [course, setCourse] = useState('');
//   const [courseData, setCourseData] = useState({ course: '', percentage: '' });
//   const current = d.toLocaleDateString();

//   useEffect(() => {
//     axios.get('http://localhost:8062/api/test/user/123') // Assuming this is the correct endpoint
//       .then(response => {
//         setCourseData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching course data:', error);
//       });
//   }, []);

//   const handleDownloadCertificate = () => {
//     const pdf = new jsPDF({
//       orientation: 'landscape',
//       unit: 'mm',
//       format: 'a5'
//     });

//     pdf.addImage(pics, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
//     pdf.addImage(signature, 'PNG', 70, 110);
//     pdf.addImage(signatures, 'PNG', 10, 20);
//     pdf.text('Best Regards', 120, 120);
//     pdf.text('Date : ' + current, 110, 60);
//     pdf.text('This is to certify that' + ' ' +courseData.name + ' has successfully  ', 10, 80);
//     pdf.text('completed with '+courseData.percentage+' in ' + courseData.course + '  course on ' + ' ' + current, 10, 90);
//     pdf.text('in MY ONLINE TUTOR.', 10, 100);
//     pdf.save('Certificate.pdf');
//   }

//   return (
//     <div>
//       <div className="container-fluid">
//         <div className="row mt-5">
//           <div className="col-4 ps-5">
//             <input type='text' id='name' value={courseData.name} onChange={(e) => setName(e.target.value)} placeholder='Enter full name' />
//             <input type='text' id='course' value={courseData.course} readOnly onChange={(e) => setCourse(e.target.value)} />
//             <input type='text' id='percentage' value={courseData.percentage} readOnly onChange={(e) => setCourse(e.target.value)} />
//             <button
//               type="button"
//               onClick={handleDownloadCertificate}
//             >
//               <div className='card' style={{ width: "18rem", opacity: "0.5", borderRadius: "10px" }}>
//                 <img src={pics} className='img-fluid' alt='certfifcateimage' />
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Certificate;






















// import React, { useEffect, useState } from 'react';
// import jsPDF from 'jspdf';
// import axios from 'axios';
// import pics from './Img/image.jpg';
// import signature from './Img/signature.png';
// import signatures from './Img/signatures.png';


//   function Certificate({ currentUser }) {
//   const d = new Date();
//   const [name, setName] = useState('');
//   const [course, setCourse] = useState('');
//   const [courseData, setCourseData] = useState({ course: '', percentage: '' });
//   const current = d.toLocaleDateString();
//   const [userDetails, setUserDetails] = useState(null);




// useEffect(() => {
//             if (currentUser) {
//               axios.get(`http://localhost:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
//                 .then(response => {
//                   setUserDetails(response.data[0]); // Assuming the API returns a single user
//                 })
//                 .catch(error => {
//                   console.error('Error fetching user details:', error);
//                 });
//             }
//           }, [currentUser]);

          





//   useEffect(() => {
//     if (currentUser && userDetails) {
//       axios.get(`http://localhost:8062/api/test/user/${userDetails.id}`) // Assuming userDetails contains the user ID
//         .then(response => {
//           setCourseData(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching course data:', error);
//         });
//     }
//   }, [currentUser, userDetails]);
  

//   const handleDownloadCertificate = () => {
//     const pdf = new jsPDF({
//       orientation: 'landscape',
//       unit: 'mm',
//       format: 'a5'
//     });

//     pdf.addImage(pics, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
//     pdf.addImage(signature, 'PNG', 70, 110);
//     pdf.addImage(signatures, 'PNG', 10, 20);
//     pdf.text('Best Regards', 120, 120);
//     pdf.text('Date : ' + current, 110, 60);
//     pdf.text('This is to certify that' + ' ' +courseData.name + ' has successfully  ', 10, 80);
//     pdf.text('completed with '+courseData.percentage+' in ' + courseData.course + '  course on ' + ' ' + current, 10, 90);
//     pdf.text('in MY ONLINE TUTOR.', 10, 100);
//     pdf.save('Certificate.pdf');
//   }

//   return (
//     <div>

// {userDetails ? (
//           <div className="user-details">
//             <div className="profile-details12">
//               <p><strong>User ID:</strong> {userDetails.id}</p>
//               <p><strong>User Name:</strong> {userDetails.firstName}</p>
//             </div>
//           </div>
//         ) : (
//           <p>Loading user details...</p>
//         )}



//       <div className="container-fluid">
//         <div className="row mt-5">
//           <div className="col-4 ps-5">
//             <input type='text' id='name' value={courseData.name} onChange={(e) => setName(e.target.value)} placeholder='Enter full name' />
//             <input type='text' id='course' value={courseData.course} readOnly onChange={(e) => setCourse(e.target.value)} />
//             <input type='text' id='percentage' value={courseData.percentage} readOnly onChange={(e) => setCourse(e.target.value)} />
//             <button
//               type="button"
//               onClick={handleDownloadCertificate}
//             >
//               <div className='card' style={{ width: "18rem", opacity: "0.5", borderRadius: "10px" }}>
//                 <img src={pics} className='img-fluid' alt='certfifcateimage' />
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Certificate;





import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import axios from 'axios';
import pics from './Img/image.jpg';
import signature from './Img/signature.png';
import signatures from './Img/signatures.png';

function Certificate({ currentUser }) {
  const d = new Date();
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [courseData, setCourseData] = useState({ course: '', percentage: '' });
  const current = d.toLocaleDateString();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (currentUser) {
      axios.get(`http://192.168.138.130:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
        .then(response => {
          setUserDetails(response.data[0]); // Assuming the API returns a single user
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && currentUser.id) {
      axios.get(`http://192.168.138.130:8080/api/test/user/${currentUser.id}`)
        .then(response => {
          setCourseData(response.data);
        })
        .catch(error => {
          console.error('Error fetching course data:', error);
        });
    }
  }, [currentUser]);

  const handleDownloadCertificate = () => {
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a5'
    });

    pdf.addImage(pics, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
    pdf.addImage(signature, 'PNG', 70, 110);
    pdf.addImage(signatures, 'PNG', 10, 20);
    pdf.text('Best Regards', 120, 120);
    pdf.text('Date : ' + current, 110, 60);
    pdf.text('This is to certify that' + ' ' + courseData.name + ' has successfully  ', 10, 80);
    pdf.text('completed with ' + courseData.percentage + ' in ' + courseData.course + '  course on ' + ' ' + current, 10, 90);
    pdf.text('in MY ONLINE TUTOR.', 10, 100);
    pdf.save('Certificate.pdf');
  }

  return (
    <div>
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

      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-4 ps-5">
            <input type='text' id='name' value={courseData.name} onChange={(e) => setName(e.target.value)} placeholder='Enter full name' />
            <input type='text' id='course' value={courseData.course} readOnly onChange={(e) => setCourse(e.target.value)} />
            <input type='text' id='percentage' value={courseData.percentage} readOnly onChange={(e) => setCourse(e.target.value)} />
            <button
              type="button"
              onClick={handleDownloadCertificate}
            >
              <div className='card' style={{ width: "18rem", opacity: "0.5", borderRadius: "10px" }}>
                <img src={pics} className='img-fluid' alt='certfifcateimage' />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
