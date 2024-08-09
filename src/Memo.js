
// import React, { useEffect, useState } from 'react';
// import jsPDF from 'jspdf';
// import axios from 'axios';
// import pics from './Img/image.jpg';
// import signature from './Img/signature.png';
// import Participating from './Img/participating.png';

// const Memo = () => {
//   const d = new Date();
//   const [name, setName] = useState('');
//   const [course, setCourse] = useState('');
//   const [courseData, setCourseData] = useState({ course: '', percentage: '' });
//   const current = d.toLocaleDateString();

//   useEffect(() => {
//     axios.get('http://localhost:8060/api/test/user/123') // Assuming this is the correct endpoint
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
//     pdf.addImage(Participating, 'PNG', 10, 20);
//     pdf.text('Best Regards', 120, 120);
//     pdf.text('Date : ' + current, 110, 60);
//     pdf.text('Here , by we are presenting a memo for ' + ' ' +courseData.name + '   ', 10, 80);
//     pdf.text('particitpating in a '+ courseData.course + '  course on ' + ' ' + current, 10, 90);
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

// export default Memo;




















// import React, { useEffect, useState } from 'react';
// import jsPDF from 'jspdf';
// import axios from 'axios';
// import pics from './Img/image.jpg';
// import signature from './Img/signature.png';
// import Participating from './Img/participating.png';

// function Memo({ currentUser }) {
//   const d = new Date();
//   const [name, setName] = useState('');
//   const [course, setCourse] = useState('');
//   const [courseData, setCourseData] = useState({ course: '', percentage: '' });
//   const current = d.toLocaleDateString();
//   const [userDetails, setUserDetails] = useState(null);







//   // useEffect(() => {
//   //   axios.get('http://localhost:8060/api/test/user/123') // Assuming this is the correct endpoint
//   //     .then(response => {
//   //       setCourseData(response.data);
//   //     })
//   //     .catch(error => {
//   //       console.error('Error fetching course data:', error);
//   //     });
//   // }, []);



//   useEffect(() => {
//     if (currentUser) {
//       axios.get(`http://localhost:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
//         .then(response => {
//           setUserDetails(response.data[0]); // Assuming the API returns a single user
//         })
//         .catch(error => {
//           console.error('Error fetching user details:', error);
//         });
//     }
//   }, [currentUser]);

//   useEffect(() => {
//     if (currentUser && currentUser.id) {
//       axios.get(`http://localhost:8062/api/test/user/${currentUser.id}`)
//         .then(response => {
//           setCourseData(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching course data:', error);
//         });
//     }
//   }, [currentUser]);




//   const handleDownloadCertificate = () => {
//     const pdf = new jsPDF({
//       orientation: 'landscape',
//       unit: 'mm',
//       format: 'a5'
//     });

//     pdf.addImage(pics, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
//     pdf.addImage(signature, 'PNG', 70, 110);
//     pdf.addImage(Participating, 'PNG', 10, 20);
//     pdf.text('Best Regards', 120, 120);
//     pdf.text('Date : ' + current, 110, 60);
//     pdf.text('Here , by we are presenting a memo for ' + ' ' +courseData.name + '   ', 10, 80);
//     pdf.text('particitpating in a '+ courseData.course + '  course on ' + ' ' + current, 10, 90);
//     pdf.text('in MY ONLINE TUTOR.', 10, 100);
//     pdf.save('Certificate.pdf');
//   }

//   return (
//     <div>




// {userDetails ? (
//         <div className="user-details">
//           <div className="profile-details12">
//             <p><strong>User ID:</strong> {userDetails.id}</p>
//             <p><strong>User Name:</strong> {userDetails.firstName}</p>
//           </div>
//         </div>
//       ) : (
//         <p>Loading user details...</p>
//       )}

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

// export default Memo;





















import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import axios from 'axios';
import pics from './Img/image.jpg';
import signature from './Img/signature.png';
import Participating from './Img/participating.png';

function Memo({ currentUser }) {
  const d = new Date();
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [courseData, setCourseData] = useState({ course: '', percentage: '' });
  const current = d.toLocaleDateString();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (currentUser) {
      axios.get(`http://3.7.14.21:8080/api/users/by-email-and-password?email=${currentUser.email}&password=${currentUser.password}`)
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
      axios.get(`http://3.7.14.21:8068/api/test/user/${currentUser.id}`)
        .then(response => {
          setCourseData(response.data);
        })
        .catch(error => {
          console.error('Error fetching course data:', error);
          alert("text is already completed");
          
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
        pdf.addImage(Participating, 'PNG', 10, 20);
        pdf.text('Best Regards', 120, 120);
        pdf.text('Date : ' + current, 110, 60);
        pdf.text('Here , by we are presenting a memo for ' + ' ' +courseData.name + '   ', 10, 80);
        pdf.text('particitpating in a '+ courseData.course + '  course on ' + ' ' + current, 10, 90);
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

export default Memo;
