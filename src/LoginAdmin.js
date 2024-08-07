
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import './LoginUser.css';

// function LoginAdmin() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState('');

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
//       const response = await axios.post('http://localhost:8080/api/admin/loginadmin', formData);
  
//       console.log(response.data);
  
//       if (response && response.status === 200) {
//         const adminId = response.data;
//         if (adminId) {
//           localStorage.setItem('adminId', adminId);
  
//           alert('Login successful!');
//           navigate('/AdminLandingPage');
//         } else {
//           setError('Login failed! Invalid email or password');
//         }
//       } else {
//         setError('Login failed! Server responded with error');
//       }
//     } catch (error) {
//       setError('Login failed! Please try again later.');
//       console.error('Login error:', error);
//     }
//   };
  
//   return ( 
//     <div className="login-user-container">
//       <div className="login-card">
//         <h2> Admin Login</h2>
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
//           <Link to="/OtpValidationTwo" className="forgot">Forgot password</Link>
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//         </form>
//       </div>
//     </div>
//   );
// }
 
// export default LoginAdmin;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import './LoginUser.css';

// function LoginAdmin() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState('');

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
//       const response = await axios.post('http://localhost:8080/api/admin/loginadmin', formData);
  
//       console.log(response.data);
  
//       if (response && response.status === 200) {
//         const adminId = response.data;
//         if (adminId) {
//           localStorage.setItem('adminId', adminId);
  
//           alert('Login successful!');
//           navigate('/AdminLandingPage');
//         } else {
//           setError('Login failed! Invalid email or password');
//         }
//       } else {
//         setError('Login failed! Server responded with error');
//       }
//     } catch (error) {
//       setError('Login failed! Please try again later.');
//       console.error('Login error:', error);
//     }
//   };
  
//   return ( 
//     <div className="login-user-container">
//       <div className="login-card">
//         <h2> Admin Login</h2>
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
//           {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
//           <button type="submit" className="login-btn">Login</button>
//           <Link to="/OtpValidationTwo" className="forgot">Forgot password</Link>
//         </form>
//       </div>
//     </div>
//   );
// }
 
// export default LoginAdmin;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './LoginUser.css';

function LoginAdmin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

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
      const response = await axios.post('http://192.168.138.130:8080/api/admin/loginadmin', formData);
  
      console.log(response.data);
  
      if (response && response.status === 200) {
        const adminId = response.data;
        if (adminId) {
          localStorage.setItem('adminId', adminId);
  
          alert('Login successful!');
          navigate('/AdminLandingPage');
        } else {
          setError('Login failed! Invalid email or password');
        }
      } else {
        setError('Login failed! Server responded with error');
      }
    } catch (error) {
      setError('Login failed! Please try again later.');
      console.error('Login error:', error);
    }
  };
  
  return ( 
    <div className="login-user-container">
      <div className="login-card">
        <h2> Admin Login</h2>
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
          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
          <button type="submit" className="login-btn">Login</button>
          <Link to="/OtpValidationTwo" className="forgot">Forgot password</Link>
        </form>
      </div>
    </div>
  );
}
 
export default LoginAdmin;
