// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate} from 'react-router-dom';
// import './LoginUser.css';

// function LoginTutor() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api-v1/tutorlogin', formData);

//       console.log(response.data);

//       if (response && response.data === 'login success') {
//         alert('Login successful!', response.data);
//         // Navigate to the dashboard after successful login
//         navigate('/TutorDashboard');
//       } else {
//         alert('Login failed! Invalid email or password:', response);
//       }
//     } catch (error) {
//       alert('Login failed!', error);
//     }
//   };

//   return (
//     <div className="login-user-container">
//       <div className="login-card">
//         <h2> Tutor Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email">E-Mail:</label>
//             <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <button type="submit" className="login-btn">Login</button>

//         </form>


//       </div>
//     </div>
//   );
// }

// export default LoginTutor;







// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import './LoginUser.css';

// function LoginUser() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api-v1/logintutor', formData);

//       console.log(response.data);

//       if (response && response.status === 200) {
//         const tutorId = response.data.id;
//         if (tutorId) {
//           console.log("if tu")
//           localStorage.setItem('tutorId', response.data.tutorId);
//           localStorage.setItem('tutor', JSON.stringify(response.data))

//           alert('Login successful!');
//           navigate('/TutorDashboard');
//         } else {
//           alert('Login failed! Invalid email or password');
//         }
//       } else {
//         alert('Login failed! Server responded with error');
//       }
//     } catch (error) {
//       alert('Login failed! Please try again later.');
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div className="login-user-container">
//       <div className="login-card">
//         <h2> Tutor Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email">E-Mail:</label>
//             <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="login-btn">Login</button>
//           <Link to="/OtpValidationOne"><a className="forgot">Forgot password</a></Link>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginUser;
// // LoginUser.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import './LoginUser.css';

// function LoginTutor() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api-v1/logintutor', formData);

//       console.log(response.data);

//       if (response && response.status === 200) {
//         const tutorId = response.data.id;
//         if (tutorId) {
//           console.log("if tu")
//           localStorage.setItem('tutorId', response.data.id);
//           localStorage.setItem('tutor', JSON.stringify(response.data));

//           // Assuming you have 'firstName' and 'lastName' properties in response.data
//           localStorage.setItem('tutorName', response.data.firstName + " " + response.data.lastName);

//           alert('Login successful!');
//           navigate('/TutorDashboard');
//         } else {
//           alert('Login failed! Invalid email or password');
//         }
//       } else {
//         alert('Login failed! Server responded with error');
//       }
//     } catch (error) {
//       alert('Login failed! Please try again later.');
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div className="login-user-container">
//       <div className="login-card">
//         <h2> Tutor Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email">E-Mail:</label>
//             <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="login-btn">Login</button>
//           <Link to="/OtpValidationOne"><a className="forgot">Forgot password</a></Link>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginTutor;







import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import './LoginUser.css';

function LoginTutor() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://3.7.14.21:8080/api-v1/logintutor', formData);
  
      console.log(response.data);
  
      if (response && response.status === 200) {
        const tutorId = response.data;
        if (tutorId) {
          localStorage.setItem('tutorId', tutorId);
  
          alert('Login successful!');
          navigate('/TutorDashboard');
        } else {
          alert('Login failed! Invalid email or password');
        }
      } else {
        alert('Login failed! Server responded with error');
      }
    } catch (error) {
      alert('Login failed! Please try again later.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-user-container">
      <div className="login-card">
        <h2> Tutor Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">E-Mail:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
          <Link to="/OtpValidationOne"><a className="forgot">Forgot password</a></Link>
          
        </form>
      </div>
    </div>
  );
}

export default LoginTutor;
