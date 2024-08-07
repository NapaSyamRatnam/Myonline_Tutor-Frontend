// // EmployeeRegistration.js
// import axios from 'axios';
// import React, { useState } from 'react';
// import './UserRegistration.css';
// import { useNavigate } from 'react-router-dom';
// import Dropdown from './Dropdown'; // Make sure to import the correct path for your Dropdown component
// import { Link } from "react-router-dom";


// function UserRegistration() {
//   const navigate = useNavigate();
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [gender, setGender] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [selectedMainOption, setSelectedMainOption] = useState('');
//   const [selectedSubOption, setSelectedSubOption] = useState('');
//   const [address, setAddress] = useState(''); // Added Address state
//   const [formErrors, setFormErrors] = useState({});

//   const validateEmail = (email) => {
//     return /\S+@\S+\.com$/.test(email);
//   };
  
 

//   const validatePhoneNumber = (phoneNumber) => {
//     return /^\d{10}$/.test(phoneNumber);
//   };

//   const validateForm = () => {
//     const errors = {};

//     if (!firstName.trim()) {
//       errors.firstName = 'First name is required';
//     }

//     if (!lastName.trim()) {
//       errors.lastName = 'Last name is required';
//     }

//     if (!gender) {
//       errors.gender = 'Please select a gender';
//     }

//     if (!password.trim()) {
//       errors.password = 'Password is required';
//     }

//     if (password !== confirmPassword) {
//       errors.confirmPassword = 'Passwords do not match';
//     }

//     if (!validatePhoneNumber(phoneNumber)) {
//       errors.phoneNumber = 'Invalid phone number (should be 10 digits)';
//     }

//     if (!validateEmail(email)) {
//       errors.email = 'Invalid email address';
//     }

//     if (!selectedMainOption || !selectedSubOption) {
//       errors.courses = 'courses are required';
//     }

//     if (!address.trim()) {
//       errors.address = 'Address is required';
//     }

//     setFormErrors(errors);

//     return Object.keys(errors).length === 0;
//   };

//   async function save(event) {
//     event.preventDefault();

//     if (validateForm()) {
//       try {
//         await axios.post('http://localhost:8080/api/users/user/register', {
//           firstName,
//           lastName,
//           gender,
//           password,
//           confirmPassword,
//           phoneNumber,
//           email,
//           courses: `${selectedMainOption} - ${selectedSubOption}`,
//           address, // Added address to the data being sent
//         });
//         alert('User Registration Successful');
//         navigate('/');
//         setFirstName('');
//         setLastName('');
//         setGender('');
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//         setPhoneNumber('');
//         // setEmail('');
//         setSelectedMainOption('');
//         setSelectedSubOption('');
//         setAddress(''); // Reset address field
//       } catch (err) {
//         alert('User Registration Failed');
//       }
//     } else {
//       alert('Please fill in all required fields correctly');
//     }
//   }

//   return (
//     <div className="containeruser" id='userRegistration'>
//       <h1>User Registration</h1>
//       <form>
//         <div className="form-group">
//           <label>First Name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter First Name"
//             value={firstName}
//             onChange={(event) => setFirstName(event.target.value)}
//           />
//           {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
//         </div>

//         <div className="form-group">
//           <label>Last Name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Last Name"
//             value={lastName}
//             onChange={(event) => setLastName(event.target.value)}
//           />
//           {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
//         </div>

//         <div className="form-group">
//           <label>Gender</label>
//           <select
//             className="form-control"
//             value={gender}
//             onChange={(event) => setGender(event.target.value)}
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Others">Others</option>
//           </select>
//           {formErrors.gender && <span className="error">{formErrors.gender}</span>}
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//           {formErrors.email && <span className="error">{formErrors.email}</span>}
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//           {formErrors.password && <span className="error">{formErrors.password}</span>}
//         </div>

//         <div className="form-group">
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(event) => setConfirmPassword(event.target.value)}
//           />
//           {formErrors.confirmPassword && (
//             <span className="error">{formErrors.confirmPassword}</span>
//           )}
//         </div>

//         <div className="form-group">
//           <label>Phone Number</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Phone Number"
//             value={phoneNumber}
//             onChange={(event) => setPhoneNumber(event.target.value)}
//           />
//           {formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber}</span>}
//         </div>
// {/* 
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//           {formErrors.email && <span className="error">{formErrors.email}</span>}
//         </div> */}

//         <div className="form-group">
//           <label>courses</label>
//           <Dropdown
//             onChange={(main, sub) => {
//               setSelectedMainOption(main);
//               setSelectedSubOption(sub);
//             }}
//           />
//           {formErrors.courses && <span className="error">{formErrors.courses}</span>}
//         </div>

//         <div className="form-group">
//           <label>Address</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Address"
//             value={address}
//             onChange={(event) => setAddress(event.target.value)}
//           />
//           {formErrors.address && <span className="error">{formErrors.address}</span>}
//         </div>
//          <Link to="/Payment"><button className="form-groupn" onClick={save}>
//           Register
//         </button></Link>
//         {/* <Link to="/Payment"><button className="form-groupn" >
//           Register
//         </button></Link> */}
         
//       </form>
     
//     </div>
//   );
// }

// export default UserRegistration;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Dropdown from './Dropdown';
// import './UserRegistration.css';
// import { Link } from 'react-router-dom';

// function UserRegistration() {
//   const navigate = useNavigate();
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [gender, setGender] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [selectedMainOption, setSelectedMainOption] = useState('');
//   const [selectedSubOption, setSelectedSubOption] = useState('');
//   const [address, setAddress] = useState('');
//   const [formErrors, setFormErrors] = useState({});

//   const validateEmail = (email) => {
//     return /\S+@\S+\.\S+/.test(email);
//   };

//   const validatePhoneNumber = (phoneNumber) => {
//     return /^\d{10}$/.test(phoneNumber);
//   };

//   const validateForm = () => {
//     const errors = {};

//     if (!firstName.trim()) {
//       errors.firstName = 'First name is required';
//     }

//     if (!lastName.trim()) {
//       errors.lastName = 'Last name is required';
//     }

//     if (!gender) {
//       errors.gender = 'Gender is required';
//     }

//     if (!validateEmail(email)) {
//       errors.email = 'Invalid email address';
//     }

//     if (!password.trim()) {
//       errors.password = 'Password is required';
//     } else if (password.length < 6) {
//       errors.password = 'Password must be at least 6 characters';
//     }

//     if (password !== confirmPassword) {
//       errors.confirmPassword = 'Passwords do not match';
//     }

//     if (!validatePhoneNumber(phoneNumber)) {
//       errors.phoneNumber = 'Invalid phone number';
//     }

//     if (!selectedMainOption || !selectedSubOption) {
//       errors.courses = 'Courses selection is required';
//     }

//     if (!address.trim()) {
//       errors.address = 'Address is required';
//     }

//     setFormErrors(errors);

//     return Object.keys(errors).length === 0;
//   };

//   const save = async (event) => {
//     event.preventDefault();

//     if (validateForm()) {
//       try {
//         const selectedCourses = [];
//         if (selectedMainOption && selectedSubOption) {
//           selectedCourses.push(`${selectedMainOption} - ${selectedSubOption}`);
//         }

//         await axios.post('http://localhost:8080/api/users/user/register', {
//           firstName,
//           lastName,
//           gender,
//           password,
//           confirmPassword,
//           phoneNumber,
//           email,
//           courses: selectedCourses,
//           address,
//         });

//         alert('User Registration Successful');
//         navigate('/LoginUser');
//         setFirstName('');
//         setLastName('');
//         setGender('');
//         setPassword('');
//         setConfirmPassword('');
//         setPhoneNumber('');
//         setEmail('');
//         setSelectedMainOption('');
//         setSelectedSubOption('');
//         setAddress('');
//       } catch (err) {
//         alert('User Registration Failed');
//       }
//     } else {
//       alert('Please fill in all required fields correctly');
//     }
//   };

//   return (
//     <div className="container mt-4" id='userRegistration' style={{width: "60%", marginLeft: "20%"}}>
//       <h1 style={{ paddingTop: '30px' }}>User Registration</h1>
//       <form onSubmit={save}>
//         <div style={{display: "flex"}}>
//         <div className="form-group" style={{marginLeft: "-30%"}}>
//           <label>First Name</label> 
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter First Name" required
//             value={firstName}
//             onChange={(event) => setFirstName(event.target.value)}
//           />
//           {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
//         </div>

//         <div className="form-group" style={{marginLeft: "40%"}}>
//           <label>Last Name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Last Name" required
//             value={lastName}
//             onChange={(event) => setLastName(event.target.value)}
//           />
//           {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
//         </div>
//         </div>
//         <div style={{display: "flex"}}>
//         <div className="form-group" style={{marginLeft: "-30%"}}>
//           <label>Gender</label>
//           <select
//             className="form-control"
//             value={gender}  required
//             onChange={(event) => setGender(event.target.value)}
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Others">Others</option>
//           </select>
//           {formErrors.gender && <span className="error">{formErrors.gender}</span>}
//         </div>
//         <div className="form-group" style={{marginLeft: "40%"}}>
//           <label>Email</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter Email" required
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//           {formErrors.email && <span className="error">{formErrors.email}</span>}
//         </div>
//         </div>
//         <div style={{display: "flex"}}>
//         <div className="form-group" style={{marginLeft: "-30%"}}>
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter Password" required
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//           {formErrors.password && <span className="error">{formErrors.password}</span>}
//         </div>

//         <div className="form-group" style={{marginLeft: "40%"}}>
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Confirm Password" required
//             value={confirmPassword}
//             onChange={(event) => setConfirmPassword(event.target.value)}
//           style={{marginTop: "-7%"}}/>
//           {formErrors.confirmPassword && (
//             <span className="error">{formErrors.confirmPassword}</span>
//           )}
//         </div>
//         </div>
//         <div style={{display: "flex"}}>
//         <div className="form-group" style={{marginLeft: "-30%"}}>
//           <label>Phone Number</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Phone Number" required
//             value={phoneNumber}
//             onChange={(event) => setPhoneNumber(event.target.value)}
//           />
//           {formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber}</span>}
//         </div>
//         <div className="form-group" style={{marginLeft: "40%"}}>
//           <label>Address</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Address"  required
//             value={address}
//             onChange={(event) => setAddress(event.target.value)}
//           />
//           {formErrors.address && <span className="error">{formErrors.address}</span>}
//         </div>
//         </div>
//         <div className="form-group" style={{marginLeft: "30%"}}>
//           <Dropdown
//             onChange={(main, sub) => {
//               setSelectedMainOption(main);
//               setSelectedSubOption(sub);
//             }}
//           />
//           {formErrors.courses && <span className="error">{formErrors.courses}</span>}
//         </div>

//         <button type="submit" className="btn btn-primary" style={{width: "30%", marginLeft: "40%"}}>Register</button>
//         <p>Already Have an Account ? <Link to="LoginUser"><a href=''>SignInhere</a></Link></p> <br/>
//       </form>
//     </div>
//   );
// }

// export default UserRegistration;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Dropdown from './Dropdown';
// import './UserRegistration.css';
// import { Link } from 'react-router-dom';

// function UserRegistration() {
//   const navigate = useNavigate();
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [gender, setGender] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [selectedMainOption, setSelectedMainOption] = useState('');
//   const [selectedSubOption, setSelectedSubOption] = useState('');
//   const [selectedAmount, setSelectedAmount] = useState(0);
//   const [address, setAddress] = useState('');
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [otpVerificationStatus, setOtpVerificationStatus] = useState('');
//   const [formErrors, setFormErrors] = useState({});

//   const validateEmail = (email) => {
//     return /\S+@\S+\.\S+/.test(email);
//   };

//   const sendOTP = async () => {
//     if (validateEmail(email)) {
//       try {
       
//         await axios.get(`http://localhost:8080/api/users/send-otp?email=${email}`);
//         setOtpSent(true);
//         alert('OTP sent successfully to your email.');
//       } catch (error) {
//         alert('Failed to send OTP. Please try again.');
//       }
//     } else {
//       alert('Please enter a valid email address.');
//     }
//   };

//   const submitForm = async (event) => {
//     event.preventDefault();
    
//     if (!otpVerified) {
//       alert('Please verify OTP before submitting the form.');
//       return; 
//     }

//     try {
//       await axios.post(`http://localhost:8080/api/users/verify-otp?email=${email}&enteredOtp=${otp}`);
   
//       setOtpVerificationStatus('Correct');
//       alert('OTP verified successfully.');
//     } catch (error) {
     
//       setOtpVerificationStatus('Incorrect');
//       setOtpVerified(false); 
//       setFormErrors({ ...formErrors, otp: 'Invalid OTP. Please enter a valid OTP.' }); 
//       return; 
//     }

  
//     try {
     
//       alert('Press OK to continue with Payment');
//     } catch (error) {
//       alert('User Registration Failed');
//     }
//   };
  
//   const validatePhoneNumber = (phoneNumber) => {
//     return /^\d{10}$/.test(phoneNumber);
//   };

//   const validateForm = () => {
//     const errors = {};

//     if (!/^[A-Za-z]+$/.test(firstName.trim())) {
//       errors.firstName = 'First name can only contain letters';
//     }
    
//     if (!/^[A-Za-z]+$/.test(lastName.trim())) {
//       errors.lastName = 'Last name can only contain letters';
//     }

//     if (!gender) {
//       errors.gender = 'Gender is required';
//     }

//     if (!email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!validateEmail(email)) {
//       errors.email = 'Invalid email address';
//     }

//     if (!password.trim()) {
//       errors.password = 'Password is required';
//     } else if (password.length < 6) {
//       errors.password = 'Password must be at least 6 characters';
//     }

//     if (password !== confirmPassword) {
//       errors.confirmPassword = 'Passwords do not match';
//     }

//     if (!validatePhoneNumber(phoneNumber)) {
//       errors.phoneNumber = 'Invalid phone number';
//     }

//     if (!selectedMainOption || !selectedSubOption) {
//       errors.courses = 'Both main and sub courses selection is required';
//     }

//     if (!address.trim()) {
//       errors.address = 'Address is required';
//     }

//     setFormErrors(errors);

//     return Object.keys(errors).length === 0;
//   };

//   const save = async (event) => {
//     event.preventDefault();

//     if (validateForm() && selectedAmount > 0) {
//       try {
//         const selectedCourses = [];
//         if (selectedMainOption && selectedSubOption) {
//           selectedCourses.push(`${selectedMainOption} - ${selectedSubOption}`);
//         }

//         await axios.post('http://localhost:8080/api/users/user/register', {
//           firstName,
//           lastName,
//           gender,
//           password,
//           confirmPassword,
//           phoneNumber,
//           email,
//           courses: selectedCourses,
//           // amount: selectedAmount,
//           address,
//         });

//         alert('User Registration Successful');
//         navigate('/Pay', { state: { firstName, lastName, selectedCourses, selectedAmount } });
       
//       } catch (err) {
//         alert('User Registration Failed');
//       }
//     } else {
//       alert('Please fill in all required fields correctly');
//     }
//   };

//   return (
//     <div className="container mt-4" id='userRegistration' style={{width: "60%", marginLeft: "20%"}}>
//       <h1 style={{ paddingTop: '30px' }}>User Registration</h1>
//       <form onSubmit={save}>
//         <div style={{display: "flex"}}>
//           <div className="form-group" style={{marginLeft: "-30%"}}>
//             <label>First Name</label> 
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter First Name" required
//               value={firstName}
//               onChange={(event) => setFirstName(event.target.value)}
//             />
//             {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
//           </div>

//           <div className="form-group" style={{marginLeft: "40%"}}>
//             <label>Last Name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Last Name" required
//               value={lastName}
//               onChange={(event) => setLastName(event.target.value)}
//             />
//             {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
//           </div>
//         </div>

//         <div style={{display: "flex"}}>
//           <div className="form-group" style={{marginLeft: "-30%"}}>
//             <label>Gender</label>
//             <select
//               className="form-control"
//               value={gender}  required
//               onChange={(event) => setGender(event.target.value)}
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Others">Others</option>
//             </select>
//             {formErrors.gender && <span className="error">{formErrors.gender}</span>}
//           </div>
          
//           <div className="container mt-4" style={{marginLeft: "45%"}} >
//             <form onSubmit={submitForm}>
//               {!otpVerified && (
//                 <div className="form-group" >
//                   <label>Email</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Enter Email"
//                     value={email}
//                     onChange={(event) => setEmail(event.target.value)}
//                     required
//                     disabled={otpVerified}
//                   />
//                 </div>
//               )}
         
//               {otpSent && !otpVerified && (
//                 <div className="form-group">
//                   <label>OTP</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter OTP"
//                     value={otp}
//                     onChange={(event) => setOtp(event.target.value)}
//                     required
//                   />
//                   {formErrors.otp && <span className="error">{formErrors.otp}</span>}
//                   {otpVerificationStatus && <span>{otpVerificationStatus === 'Correct' ? 'OTP is correct' : 'OTP is incorrect'}</span>}
//                 </div>
//               )}

//               {!otpSent && (
//                 <button type="button" className="btn btn-primary" onClick={sendOTP}>
//                   Send OTP
//                 </button>
//               )}
         
//               {otpSent && !otpVerified && (
//                 <button type="submit" className="btn btn-primary" onClick={() => setOtpVerified(true)}>
//                   Verify OTP
//                 </button>
//               )}
//             </form>
//           </div>
//         </div>

//         <div style={{display: "flex"}}>
//           <div className="form-group" style={{marginLeft: "-30%"}}>
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter Password" required
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//             />
//             {formErrors.password && <span className="error">{formErrors.password}</span>}
//           </div>

//           <div className="form-group" style={{marginLeft: "40%"}}>
//             <label>Confirm Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Confirm Password" required
//               value={confirmPassword}
//               onChange={(event) => setConfirmPassword(event.target.value)}
//             style={{marginTop: "-7%"}}/>
//             {formErrors.confirmPassword && (
//               <span className="error">{formErrors.confirmPassword}</span>
//             )}
//           </div>
//         </div>

//         <div style={{display: "flex"}}>
//           <div className="form-group" style={{marginLeft: "-30%"}}>
//             <label>Phone Number</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Phone Number" required
//               value={phoneNumber}
//               onChange={(event) => setPhoneNumber(event.target.value)}
//             />
//             {formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber}</span>}
//           </div>
//           <div className="form-group" style={{marginLeft: "40%"}}>
//             <label>Address</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Address"  required
//               value={address}
//               onChange={(event) => setAddress(event.target.value)}
//             />
//             {formErrors.address && <span className="error">{formErrors.address}</span>}
//           </div>
//         </div>

//         <div className="form-group" style={{marginLeft: "30%"}}>
//           <Dropdown
//             onChange={(main, sub, amount) => {
//               setSelectedMainOption(main);
//               setSelectedSubOption(sub);
//               setSelectedAmount(amount);
//             }}
//           />
//           {formErrors.courses && <span className="error">{formErrors.courses}</span>}
//         </div>
//         <div className="form-group" style={{marginLeft: "30%"}}>
          
       
//         </div>

//         <button type="submit" className="btn btn-primary" style={{width: "30%", marginLeft: "40%"}}>Register</button>
//         <p>Already Have an Account ? <Link to="LoginUser"><a href=''>SignInhere</a></Link></p> <br/>
//       </form>
//     </div>
//   );
// }

// export default UserRegistration;
























































import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Dropdown from './Dropdown';
import './UserRegistration.css';
import { Link } from 'react-router-dom';

function UserRegistration() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedMainOption, setSelectedMainOption] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [address, setAddress] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };

  const validateForm = () => {
    const errors = {};

    if (!/^[A-Za-z]+$/.test(firstName.trim())) {
      errors.firstName = 'First name can only contain letters';
    }
    
    if (!/^[A-Za-z]+$/.test(lastName.trim())) {
      errors.lastName = 'Last name can only contain letters';
    }
    

    if (!gender) {
      errors.gender = 'Gender is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errors.email = 'Invalid email address';
    }
    

    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!validatePhoneNumber(phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number';
    }

    if (!selectedMainOption || !selectedSubOption) {
      errors.courses = 'Both main and sub courses selection is required';
    }
    

    if (!address.trim()) {
      errors.address = 'Address is required';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const save = async (event) => {
    event.preventDefault();

    if (validateForm() && selectedAmount > 0) {
      try {
        const selectedCourses = [];
        if (selectedMainOption && selectedSubOption) {
          selectedCourses.push(`${selectedMainOption} - ${selectedSubOption}`);
        }

        await axios.post('http://192.168.138.130:8080/api/users/user/register', {
          firstName,
          lastName,
          gender,
          password,
          confirmPassword,
          phoneNumber,
          email,
          courses: selectedCourses,
          amount: selectedAmount,
          address,
        });

        alert('User Registration Successful');
        navigate('/Pay', { state: { firstName, lastName, selectedCourses, selectedAmount } });
       
      } catch (err) {
        alert('User Registration Failed');
      }
    } else {
      alert('Please fill in all required fields correctly');
    }
  };

  return (
    <div className="container mt-4" id='userRegistration' style={{width: "60%", marginLeft: "20%"}}>
      <h1 style={{ paddingTop: '30px' }}>User Registration</h1>
      <form onSubmit={save}>
        <div style={{display: "flex"}}>
        <div className="form-group" style={{marginLeft: "-30%"}}>
          <label>First Name</label> 
          <input
            type="text"
            className="form-control"
            placeholder="Enter First Name" required
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
        </div>

        <div className="form-group" style={{marginLeft: "40%"}}>
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Last Name" required
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
        </div>
        </div>
        <div style={{display: "flex"}}>
        <div className="form-group" style={{marginLeft: "-30%"}}>
          <label>Gender</label>
          <select
            className="form-control"
            value={gender}  required
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          {formErrors.gender && <span className="error">{formErrors.gender}</span>}
        </div>
        <div className="form-group" style={{marginLeft: "40%"}}>
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email" required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>
        </div>
        <div style={{display: "flex"}}>
        <div className="form-group" style={{marginLeft: "-30%"}}>
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password" required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {formErrors.password && <span className="error">{formErrors.password}</span>}
        </div>

        <div className="form-group" style={{marginLeft: "40%"}}>
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password" required
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          style={{marginTop: "-7%"}}/>
          {formErrors.confirmPassword && (
            <span className="error">{formErrors.confirmPassword}</span>
          )}
        </div>
        </div>
        <div style={{display: "flex"}}>
        <div className="form-group" style={{marginLeft: "-30%"}}>
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Phone Number" required
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          {formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber}</span>}
        </div>
        <div className="form-group" style={{marginLeft: "40%"}}>
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Address"  required
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          {formErrors.address && <span className="error">{formErrors.address}</span>}
        </div>
        </div>
        <div className="form-group" style={{marginLeft: "30%"}}>
          <Dropdown
            onChange={(main, sub, amount) => {
              setSelectedMainOption(main);
              setSelectedSubOption(sub);
              setSelectedAmount(amount);
            }}
          />
          {formErrors.courses && <span className="error">{formErrors.courses}</span>}
        </div>
        

        <button type="submit" className="btn btn-primary" style={{width: "30%", marginLeft: "40%"}}>Register</button>
        <p>Already Have an Account ? <Link to="LoginUser"><a href=''>SignInhere</a></Link></p> <br/>
      </form>
    </div>
  );
}

export default UserRegistration;