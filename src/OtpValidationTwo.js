



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import "./OtpValidationTwo.css"

// const OtpValidationOTwo = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [message, setMessage] = useState('');
//   const [submitClicked, setSubmitClicked] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/admin/send-reset-email', { email }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.status === 200) {
//         setMessage('Email sent successfully. Check your email for one time password.');
//         setSubmitClicked(true);
//       } else {
//         setMessage('Failed to send email. Please try again later.');
//         setSubmitClicked(false); // Set submitClicked back to false
//       }
//     } catch (error) {
//       setMessage('Email does not exist.');
//       setSubmitClicked(false); // Set submitClicked back to false
//     }
//   };

//   const handleVerifyOtp = async () => {
//     try {
//       const response = await axios.post('http://localhost:8080/api/admin/verify-otp', { email, otp }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.status === 200) {
//         setMessage('OTP verified successfully. You can now reset your password.');
//         setOtpVerified(true);
//       } else {
//         setMessage('Invalid OTP. Please try again.');
//         setOtpVerified(false); 
//       }
//     } catch (error) {
//       setMessage('An error occurred while verifying OTP.');
//       setOtpVerified(false); 
//     }
//   };

//   const updatePassword = async () => {
//     try {
//       if (password !== confirmPassword) {
//         setError('Passwords do not match');
//         setMessage(''); // Clear any previous success messages
//         return; // Exit function if passwords don't match
//       }
  
//       const response = await axios.post('http://localhost:8080/api/admin/reset-password', {
//         email,
//         newPassword: password,
//         confirmPassword
//       });
      
//       if (response.status === 200) {
//         setError(''); // Clear any previous error messages
//         setMessage('Password updated successfully');
//       } else {
//         setError('Failed to update password');
//         setMessage(''); // Clear any previous success messages
//       }
//     } catch (error) {
//       console.error('Failed to update password:', error);
//       setError('Failed to update password. Please try again.');
//       setMessage(''); // Clear any previous success messages
//     }
//   };
  
  
  

//   return (
//     <div className='section-forgot'>
//       <div className="color"></div>
//       <div className="color"></div>
//       <div className="color"></div>
//       <div className="box-forgot">
        
//         <div className="container-forgot">
//           <div className="form-forgot">
//             <form onSubmit={handleSubmit} style={{ marginRight: "60%" }}>
//               <div className="inputBox">
//                 <label style={{ fontSize: "1.2rem", color: "black"}}>
//                   Email: 
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={handleEmailChange}
//                     placeholder='enter registered email'
//                     required
//                     style={{ width: "250%", height: "4vh", marginTop: "15%"}}
//                   />
//                 </label>
//                 <div onClick={handleSubmit}>
//                   <input 
//                     className='btn btn-primary'
//                     type="submit" value="SendOtp" style={{ marginTop: "15%",marginLeft: "65%" }} />
//                 </div>
//               </div>
//             </form>
//             {submitClicked && (
//               <div>
//                 <label className="inputBox" style={{color: "black"}}>
//                   Enter OTP:
//                   <input type="text" value={otp} onChange={handleOtpChange} required />
//                 </label>
//                 <div onClick={handleVerifyOtp} >
//                   <input className='btn btn-primary'
//                     type="submit" value="VerifyOtp" style={{ marginTop: "2%",marginLeft: "-5%", paddingLeft: "-20px", width: "40%"}} />
//                 </div>
//               </div> 
//             )}
//             {otpVerified && (
//               <div> <br/>
//                 <label>New Password:</label>
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <label>Confirm Password:</label>
//                 <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> <br/>
//                 <button onClick={updatePassword}>Update Password</button> <br/>
//                 {error && <p className="error" style={{color: "red"}}>{error}</p>}
//                 <p style={{color: "green"}}>{message}</p>
//               </div>
              
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OtpValidationOTwo;
// OtpValidationOTwo.js
// OtpValidationOTwo.js
// OtpValidationOTwo.js
// OtpValidationOTwo.js



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import "./OtpValidationTwo.css";

// const OtpValidationOTwo = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [message, setMessage] = useState('');
//   const [submitClicked, setSubmitClicked] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [otpError, setOtpError] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setEmailError('');
//   };

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//     setOtpError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email) {
//       setEmailError('Please enter a valid email.');
//       return;
//     }
//     try {
//       const response = await axios.post('http://localhost:8080/api/admin/send-reset-email', { email }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.status === 200) {
//         setMessage(response.data.message);
//         setSubmitClicked(true);
//       } else {
//         setMessage('Failed to send email. Please try again later.');
//         setSubmitClicked(false);
//       }
//     } catch (error) {
//       setMessage('Email does not exist.');
//       setSubmitClicked(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     try {
//       const response = await axios.post('http://localhost:8080/api/admin/verify-otp', { email, otp }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.status === 200) {
//         setMessage(response.data.message);
//         setOtpVerified(true);
//       } else {
//         setOtpError('Invalid OTP. Please try again.');
//         setOtpVerified(false);
//       }
//     } catch (error) {
//       setMessage('An error occurred while verifying OTP.');
//       setOtpVerified(false);
//     }
//   };

//   const updatePassword = async () => {
//     try {
//       if (password !== confirmPassword) {
//         setError('Passwords do not match');
//         setMessage(''); // Clear any previous success messages
//         return; // Exit function if passwords don't match
//       }

//       const response = await axios.put('http://localhost:8080/api/admin/reset-password', {
//         email,
//         newPassword: password,
//         confirmPassword
//       });

//       if (response.status === 200) {
//         setError(''); // Clear any previous error messages
//         setMessage(response.data.message);
//       } else {
//         setError('Failed to update password');
//         setMessage(''); // Clear any previous success messages
//       }
//     } catch (error) {
//       console.error('Failed to update password:', error);
//       setError('Failed to update password. Please try again.');
//       setMessage(''); // Clear any previous success messages
//     }
//   };

//   return (
//     <div className='section-forgot'>
//       <div className="color"></div>
//       <div className="color"></div>
//       <div className="color"></div>
//       <div className="box-forgot">
//         <div className="container-forgot">
//           <div className="form-forgot">
//             <form onSubmit={handleSubmit} style={{ marginRight: "60%" }}>
//               <div className="inputBox">
//                 <label style={{ fontSize: "1.2rem", color: "black"}}>
//                   Email: 
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={handleEmailChange}
//                     placeholder='enter registered email'
//                     required
//                     style={{ width: "250%", height: "4vh", marginTop: "15%"}}
//                   />
//                 </label>
//                 {emailError && <p className="error" style={{color: "red"}}>{emailError}</p>}
//                 <div onClick={handleSubmit}>
//                   <input 
//                     className='btn btn-primary'
//                     type="submit" value="SendOtp" style={{ marginTop: "15%",marginLeft: "65%" }} />
//                 </div>
//               </div>
//             </form>
//             {submitClicked && (
//               <div>
//                 <label className="inputBox" style={{color: "black"}}>
//                   Enter OTP:
//                   <input type="text" value={otp} onChange={handleOtpChange} required />
//                 </label>
//                 <div onClick={handleVerifyOtp} >
//                   <input className='btn btn-primary'
//                     type="submit" value="VerifyOtp" style={{ marginTop: "2%",marginLeft: "-5%", paddingLeft: "-20px", width: "40%"}} />
//                 </div>
//                 {otpError && <p className="error" style={{color: "red"}}>{otpError}</p>}
//               </div> 
//             )}
//             {otpVerified && (
//               <div> <br/>
//                 <label>New Password:</label>
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <label>Confirm Password:</label>
//                 <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> <br/>
//                 <button onClick={updatePassword}>Update Password</button> <br/>
//                 {error && <p className="error" style={{color: "red"}}>{error}</p>}
//                 <p style={{color: "green"}}>{message}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OtpValidationOTwo;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './OtpValidation.css';

function OtpValidationTwo() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isOtpValid, setIsOtpValid] = useState(false);
  const navigate = useNavigate();

  const sendOtp = async () => {
    // Check if the email field is empty
    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    try {
      const response = await axios.get(`http://3.7.14.21:8080/api/users/send-otp?email=${email}`);
      setMessage(response.data);
      setError('');
    } catch (error) {
      setMessage('');
      setError('Failed to send OTP. Please try again later.');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post(`http://3.7.14.21:8080/api/users/verify-otp?email=${email}&enteredOtp=${otp}`);
      setMessage(response.data);
      setError('');
      setIsOtpValid(true);
    } catch (error) {
      setMessage('');
      setError('Failed to verify OTP. Please try again.');
      setIsOtpValid(false);
    }
  };

  const updatePassword = async () => {
    // Check if password or confirm password fields are empty
    if (!password || !confirmPassword) {
      setError('Please enter both password and confirm password.');
      return;
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    try {
      const response = await axios.put('http://3.7.14.21:8080/api/admin/adminupdatePassword', {
        email,
        password,
        confirmPassword,
      });
  
      setMessage(response.data);
      setError('');
      navigate('/LoginAdmin');
    } catch (error) {
      setMessage('');
      setError('Failed to update password. Please try again.');
    }
  };
  

  return (
    <div className="otpValidationContainer" id='otpValidationContainer'>
      <h1>Password Update</h1>
      <div className="inputContainer">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="emailInput" />
        <button onClick={sendOtp} className="sendOtpButton">Send OTP</button>
      </div>
      <div className="inputContainer">
        <label>OTP:</label>
        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} className="otpInput" />
        <button onClick={verifyOtp} className="verifyOtpButton">Verify OTP</button>
      </div>
      {isOtpValid && (
        <div className="passwordContainer">
          <div>
            <label>New Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="passwordInput" />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="confirmPasswordInput"
            />
          </div>
          <button onClick={updatePassword} className="updatePasswordButton">Update Password</button>
        </div>
      )}
      <div className="messageContainer">
        <p>{message}</p>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
    </div>
  );
}

export default OtpValidationTwo;





