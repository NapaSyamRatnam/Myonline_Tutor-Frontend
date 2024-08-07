// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate,Link } from 'react-router-dom';
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
//       const response = await axios.post('http://localhost:8080/api/users/loginuser', formData);

//       console.log(response.data);

//       if (response && response.data === 'login success') {
//         alert('Login successful!', response.data);
//         // Navigate to the dashboard after successful login
//         navigate('/UserDashboard');
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
//         <h2> User Login</h2>
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
//           <Link to="/OtpValidation"><a className="forgot">Forgot password</a></Link>
//           <Link to="/Registration"><a className="forgot">Register now</a></Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginUser;
























// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import './LoginUser.css';

// function LoginUser({ handleLogin }) {
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
//       const response = await axios.post('http://localhost:8080/api/users/loginuser', formData);

//       if (response && response.data === 'login success') {
//         // Fetch the user details using the email and password
//         const userResponse = await axios.get(`http://localhost:8080/api/users/by-email-and-password?email=${formData.email}&password=${formData.password}`);
//         if (userResponse && userResponse.data.length > 0) {
//           // Set the current user after successful login
//           handleLogin(userResponse.data[0]);
//           alert('Login successful!');
//           // Navigate to the dashboard after successful login
//           navigate('/UserDashboard');
//         } else {
//           alert('Login failed! Invalid email or password');
//         }
//       } else {
//         alert('Login failed! Invalid email or password');
//       }
//     } catch (error) {
//       alert('Login failed!');
//     }
//   };

//   return (
//     <div className="login-user-container">
//       <div className="login-card">
//         <h2>Login</h2>
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
//           <Link to="/OtpValidation" className="forgot">Forgot password</Link>
//           <Link to="/Registration" className="forgot">Register now</Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginUser;






import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './LoginUser.css';

function LoginUser({ handleLogin }) {
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
      const response = await axios.post('http://192.168.138.130:8080/api/users/loginuser', formData);

      if (response && response.data === 'login success') {
        // Fetch the user details using the email and password
        const userResponse = await axios.get(`http://192.168.138.130:8080/api/users/by-email-and-password?email=${formData.email}&password=${formData.password}`);
        if (userResponse && userResponse.data.length > 0) {
          // Set the current user after successful login
          handleLogin(userResponse.data[0]);
          alert('Login successful!');
          // Navigate to the dashboard after successful login
          navigate('/UserDashboard');
        } else {
          alert('Login failed! Invalid email or password');
        }
      } else {
        alert('Login failed! Invalid email or password');
      }
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <div className="login-user-container">
      <div className="login-card">
        <h2>Login</h2>
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
          <Link to="/ForgotPassword" className="forgot">Forgot password</Link>
          <Link to="/UserRegistration" className="forgot">Register now</Link>
        </form>
      </div>
    </div>
  );
}

export default LoginUser;
