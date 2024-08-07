
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { withRouter } from 'react-router-dom';
// // import Dropdown from './Dropdown'; 
// // import './AddNewTutor.css';


// // function AddNewTutor({ history }) {
// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     mobilenumber:'',
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     qualification: '',
// //     higherQualification: '',
// //     course: '',
// //     address: '',
// //     gender: '',
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [selectedMainOption, setSelectedMainOption] = useState('');
// //   const [selectedSubOption, setSelectedSubOption] = useState('');

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //     setErrors({
// //       ...errors,
// //       [e.target.name]: '', 
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const newErrors = {};

// //     // Validation logic
// //     if (!formData.firstName.trim()) {
// //       newErrors.firstName = 'First Name is required';
// //     }
// //     else if (!/^[a-zA-Z\s]+$/.test(formData.firstName.trim())) {
// //       newErrors.firstName = "Enter a valid first name";
// //     }

// //     if (!formData.lastName.trim()) {
// //       newErrors.lastName = 'Last Name is required';
// //     }
// //     else if (!/^[a-zA-Z\s]+$/.test(formData.lastName.trim())) {
// //       newErrors.lastName = "Enter a valid last name";
// //     }
// //     if (!formData.mobilenumber.trim()) {
// //       newErrors.mobilenumber = 'Enter a Mobile Number';
// //   } else {
// //       // Regular expression to match mobile numbers starting with 6, 7, 8, or 9
// //       const mobileRegex = /^[6-9]\d{9}$/;
// //       if (!mobileRegex.test(formData.mobilenumber.trim())) {
// //           newErrors.mobilenumber = 'Enter a valid Mobile Number starting with 6-9 series';
// //       }
// //   }
// //   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// //   if (!emailPattern.test(formData.email.trim())) {
// //     newErrors.email = "Enter a valid email address";
// //   }
  

// //   if (!formData.password.trim()) {
// //     newErrors.password = 'Password is required';
// // } else if (!isValidPassword(formData.password.trim())) {
// //     newErrors.password = 'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one digit, and one special character';
// // }

// // if (formData.password !== formData.confirmPassword) {
// //     newErrors.confirmPassword = 'Passwords do not match';
// // }

// //     if (!formData.course) {
// //       newErrors.course = 'Select course';
// //     }

// //     if (!formData.gender) {
// //       newErrors.gender = 'Select gender';
// //     }

// //     if (!formData.address.trim()) {
// //       newErrors.address = 'Address is required';
// //     }
// //     else if (!/^[a-zA-Z\s]+$/.test(formData.address.trim())) {
// //       newErrors.address = "Enter a valid Address name";
// //     }

// //     setErrors(newErrors);

// //     if (Object.keys(newErrors).length === 0) {
// //       try {
// //         const response = await axios.post("http://localhost:8080/api-v1/create", formData);
// //         alert('Form submitted successfully', response.data);
// //         history.push('/LoginTutor');
// //       } catch (error) {
// //         alert('Error submitting form', error);
// //       }
// //     }
// //   };

// //   const isValidPassword = (password) => {
// //     return password.length >= 8;
// //   };

// //   return (
// //     <>
// //       <div className="header1">
// //     <label><h1>My Online Tutor</h1></label>
// //   </div>
// //     <div className="add-tutor-page">
// //     {/* <header><h2>My Online Tutor</h2></header> */}
// //       <div className="register-card">
// //         <h1 className="heading">Tutor Register Page</h1>
// //         <form onSubmit={handleSubmit}>
// //           <div className="form-row">
// //             <div className="form-group">
// //               <label htmlFor="firstName" className='custom-newtutor'>First Name:</label>
// //               <input
// //                 type="text"
// //                 name="firstName"
// //                 placeholder="Enter First Name"required
// //                 value={formData.firstName}
// //                 onChange={handleChange}
// //               />{" "}
// //               {errors.firstName &&( <p className='custom-error-message'>{errors.firstName} </p>)}
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="lastName" className='custom-newtutor'>Last Name:</label>
// //               <input
// //                 type="text"
// //                 name="lastName"
// //                 placeholder="Enter Last Name" required
// //                 value={formData.lastName}
// //                 onChange={handleChange}
// //               />{" "}
// //              {errors.lastName && (<p className='custom-error-message'>{errors.lastName} </p>)}
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor='mobilenumber' className='custom-newtutor'>Mobile No:</label>
// //               <input type='text'
// //               name='mobilenumber'
// //               placeholder='Enter Mobile No' required
// //               value={formData.mobilenumber}
// //               onChange={handleChange}
// //               ></input>
// //               {errors.mobilenumber && (<p className='custom-error-message'>{errors.mobilenumber}</p>)}
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="email" className='custom-newtutor'>Email:</label>
// //               <input
// //                 type="text"
// //                 name="email"
// //                 placeholder="Enter Email" required
// //                 value={formData.email}
// //                 onChange={handleChange}
// //               />{" "}
// //                {errors.email && <p className='custom-error-message' title={errors.email}>{errors.email}</p>}
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="password" className='custom-newtutor'>Password:</label>
// //               <input
// //                 type="password"
// //                 name="password"
// //                 placeholder="Enter Password" required
// //                 value={formData.password}
// //                 onChange={handleChange}
// //               />{" "}
// //            {errors.password && ( <p className='custom-error-message' title={errors.password}>{errors.password} </p>)}
// //             </div>     
// //             <div className="form-group">
// //               <label htmlFor="confirmPassword" className='custom-newtutor'>Confirm Password:</label>
// //               <input
// //               className='custom-newtutor-input'
// //                 type="password"
// //                 name="confirmPassword"
// //                 placeholder="Re-Enter Password" required
// //                 value={formData.confirmPassword}
// //                 onChange={handleChange}
// //               />{" "}
// //               {errors.confirmPassword && (<p className='custom-error-message' title={errors.confirmPassword}>{errors.confirmPassword} </p>)}
// //             </div>
// //             <div className="form-group">
// //   <label htmlFor="qualification" className='custom-newtutor'>Qualification:</label>
// //   <select
// //     className='custom-newtutor-input'
// //     name="qualification"
// //     value={formData.qualification}
// //     onChange={handleChange}
// //   >
// //     <option value="">Select Qualification</option>
// //     <optgroup label="Degree">
// //       <option value="BZC">BZC</option>
// //       <option value="BSc">BSc</option>
// //       <option value="B.com">B.com</option>
// //       <option value="MPCs">MPCs</option>
// //       <option value="B.tech">B.tech</option>
// //     </optgroup>
// //   </select>
// // </div>

// // <div className="form-group">
// //   <label htmlFor="higherQualification" className='custom-newtutor'>Higher Qualification:</label>
// //   <select
// //     className='custom-newtutor-input'
// //     name="higherQualification"
// //     value={formData.higherQualification}
// //     onChange={handleChange}
// //   >
// //     <option value="">Select Higher Qualification</option>
// //     <optgroup label="Higher Qualification">
// //       <option value="M.Tech">M.Tech</option>
// //       <option value="MS">MS</option>
// //       <option value="PG">PG</option>
// //       <option value="B.ed">B.ed</option>
// //       <option value="DEd">DEd</option>
// //     </optgroup>
// //   </select>
// // </div>
// //    {/* <div className="form-group">
// //               <label htmlFor="course" className='custom-newtutor'>Course:</label> */}
// //               <div className="form-group">
// //               <label htmlFor="course" className='custom-newtutor'>Course:</label>
// //               <Dropdown
// //                 selectedMainOption={selectedMainOption}
// //                 selectedSubOption={selectedSubOption}
// //                 onChange={(main, sub) => {
// //                   setSelectedMainOption(main);
// //                   setSelectedSubOption(sub);
// //                   setFormData({
// //                     ...formData,
// //                     course: main // Update selected course
// //                   });
// //                 }}
// //               />
// //               {/* <Dropdown
// //             onChange={(main, sub) => {
// //               setSelectedMainOption(main);
// //               setSelectedSubOption(sub);
// //             }}
// //           /> */}
// //               {/* <select name="course"   className='custom-newtutor-input' onChange={handleChange}>
// //                 <option value="">Select Course</option>
// //                 <option value="Academic">Academic</option>
// //                 <option value="Technical">Technical</option>
// //                 <option value="Professional">Professional Skills</option>
// //               </select> */}
// //               {errors.course && <p className='custom-error-message'>{errors.course} </p>}
// //             </div> 
// //             <div className="form-group">
// //               <label htmlFor="address" className='custom-newtutor'>Address:</label>
// //               <input
// //                className='custom-newtutor-input'
// //                 type="text"
// //                 name="address"
// //                 placeholder="Enter Address" required
// //                 value={formData.address}
// //                 onChange={handleChange}
// //               />{" "}
// //             </div>
// //             {errors.address && (<p className='custom-error-message'>{errors.address} </p>)}
// //            <div className="form-group gender-group">
// //     <label className='custom-newtutor'>Gender:</label>
// //     <div className="custom-gender-category">
// //       <input type="radio" name="gender" id="male" value="Male"   className='custom-newtutor-input' onChange={handleChange} />
// //       <label htmlFor="male" className='custom-newtutor'>Male</label>

// //       <input type="radio" name="gender" id="female" value="Female"  className='custom-newtutor-input' onChange={handleChange} />
// //       <label htmlFor="female" className='custom-newtutor'>Female</label>

// //       <input type="radio" name="gender" id="other" value="Other"   className='custom-newtutor-input' onChange={handleChange} />
// //       <label htmlFor="other" className='custom-newtutor'>Other</label>
// //     </div>
// //     {errors.gender && (<p className='custom-error-message'>{errors.gender} </p>)}
// //   </div>
// // </div>
// //           <button className="custom-button" type="submit">
// //             Register
// //           </button>
        
// //         </form>
// //       </div>
// //     </div>
// //     </>
// //   );
// // }

// // export default AddNewTutor;


// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { withRouter } from 'react-router-dom';
// // import Dropdown from './Dropdown'; 
// // import { Link } from 'react-router-dom';
// // import './AddNewTutor.css';

// // function AddNewTutor({ history }) {
// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     mobilenumber:'',
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     qualification: '',
// //     higherQualification: '',
// //     courses: [], // Changed to array to match the backend model
// //     address: '',
// //     gender: '',
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [selectedMainOption, setSelectedMainOption] = useState('');
// //   const [selectedSubOption, setSelectedSubOption] = useState('');

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //     setErrors({
// //       ...errors,
// //       [e.target.name]: '', 
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const newErrors = {};

// //     // Validation logic
// //     if (!formData.firstName.trim()) {
// //       newErrors.firstName = 'First Name is required';
// //     }
// //     else if (!/^[a-zA-Z\s]+$/.test(formData.firstName.trim())) {
// //       newErrors.firstName = "Enter a valid first name";
// //     }

// //     if (!formData.lastName.trim()) {
// //       newErrors.lastName = 'Last Name is required';
// //     }
// //     else if (!/^[a-zA-Z\s]+$/.test(formData.lastName.trim())) {
// //       newErrors.lastName = "Enter a valid last name";
// //     }

// //     if (!formData.mobilenumber.trim()) {
// //       newErrors.mobilenumber = 'Enter a Mobile Number';
// //     } else {
// //       // Regular expression to match mobile numbers starting with 6, 7, 8, or 9
// //       const mobileRegex = /^[6-9]\d{9}$/;
// //       if (!mobileRegex.test(formData.mobilenumber.trim())) {
// //           newErrors.mobilenumber = 'Enter a valid Mobile Number starting with 6-9 series';
// //       }
// //     }

// //     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// //     if (!emailPattern.test(formData.email.trim())) {
// //       newErrors.email = "Enter a valid email address";
// //     }

// //     if (!formData.password.trim()) {
// //       newErrors.password = 'Password is required';
// //     } else if (!isValidPassword(formData.password.trim())) {
// //       newErrors.password = 'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one digit, and one special character';
// //     }

// //     if (formData.password !== formData.confirmPassword) {
// //       newErrors.confirmPassword = 'Passwords do not match';
// //     }

// //     if (formData.course.length === 0) {
// //       newErrors.course = 'Select at least one course';
// //     }

// //     if (!formData.gender) {
// //       newErrors.gender = 'Select gender';
// //     }

// //     if (!formData.address.trim()) {
// //       newErrors.address = 'Address is required';
// //     }
// //     else if (!/^[a-zA-Z\s]+$/.test(formData.address.trim())) {
// //       newErrors.address = "Enter a valid Address name";
// //     }

// //     setErrors(newErrors);

// //     if (Object.keys(newErrors).length === 0) {
// //       try {
// //         const response = await axios.post("http://localhost:8080/api-v1/create", formData);
// //         alert('Form submitted successfully', response.data);
// //         history.push('/LoginTutor');
// //       } catch (error) {
// //         alert('Error submitting form', error);
// //       }
// //     }
// //   };

// //   const isValidPassword = (password) => {
// //     return password.length >= 8;
// //   };

// //   return (
// //     <>
// //       <div className="header1">
// //         <label><h1>My Online Tutor</h1></label>
// //       </div>
// //       <div className="add-tutor-page">
// //         <div className="register-card">
// //           <h1 className="heading">Tutor Register Page</h1>
// //           <form onSubmit={handleSubmit}>
// //             <div className="form-row">
// //               <div className="form-group">
// //                 <label htmlFor="firstName" className='custom-newtutor'>First Name:</label>
// //                 <input
// //                   type="text"
// //                   name="firstName"
// //                   placeholder="Enter First Name"
// //                   required
// //                   value={formData.firstName}
// //                   onChange={handleChange}
// //                 />
// //                 {errors.firstName && <p className='custom-error-message'>{errors.firstName}</p>}
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="lastName" className='custom-newtutor'>Last Name:</label>
// //                 <input
// //                   type="text"
// //                   name="lastName"
// //                   placeholder="Enter Last Name"
// //                   required
// //                   value={formData.lastName}
// //                   onChange={handleChange}
// //                 />
// //                 {errors.lastName && <p className='custom-error-message'>{errors.lastName}</p>}
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor='mobilenumber' className='custom-newtutor'>Mobile No:</label>
// //                 <input
// //                   type='text'
// //                   name='mobilenumber'
// //                   placeholder='Enter Mobile No'
// //                   required
// //                   value={formData.mobilenumber}
// //                   onChange={handleChange}
// //                 />
// //                 {errors.mobilenumber && <p className='custom-error-message'>{errors.mobilenumber}</p>}
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="email" className='custom-newtutor'>Email:</label>
// //                 <input
// //                   type="text"
// //                   name="email"
// //                   placeholder="Enter Email"
// //                   required
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                 />
// //                 {errors.email && <p className='custom-error-message' title={errors.email}>{errors.email}</p>}
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="password" className='custom-newtutor'>Password:</label>
// //                 <input
// //                   type="password"
// //                   name="password"
// //                   placeholder="Enter Password"
// //                   required
// //                   value={formData.password}
// //                   onChange={handleChange}
// //                 />
// //                 {errors.password && <p className='custom-error-message' title={errors.password}>{errors.password}</p>}
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="confirmPassword" className='custom-newtutor'>Confirm Password:</label>
// //                 <input
// //                   className='custom-newtutor-input'
// //                   type="password"
// //                   name="confirmPassword"
// //                   placeholder="Re-Enter Password"
// //                   required
// //                   value={formData.confirmPassword}
// //                   onChange={handleChange}
// //                 />
// //                 {errors.confirmPassword && <p className='custom-error-message' title={errors.confirmPassword}>{errors.confirmPassword}</p>}
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="qualification" className='custom-newtutor'>Qualification:</label>
// //                 <select
// //                   className='custom-newtutor-input'
// //                   name="qualification"
// //                   value={formData.qualification}
// //                   onChange={handleChange}
// //                 >
// //                   <option value="">Select Qualification</option>
// //                   <optgroup label="Degree">
// //                     <option value="BZC">BZC</option>
// //                     <option value="BSc">BSc</option>
// //                     <option value="B.com">B.com</option>
// //                     <option value="MPCs">MPCs</option>
// //                     <option value="B.tech">B.tech</option>
// //                   </optgroup>
// //                 </select>
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="higherQualification" className='custom-newtutor'>Higher Qualification:</label>
// //                 <select
// //                   className='custom-newtutor-input'
// //                   name="higherQualification"
// //                   value={formData.higherQualification}
// //                   onChange={handleChange}
// //                 >
// //                   <option value="">Select Higher Qualification</option>
// //                   <optgroup label="Higher Qualification">
// //                     <option value="M.Tech">M.Tech</option>
// //                     <option value="MS">MS</option>
// //                     <option value="PG">PG</option>
// //                     <option value="B.ed">B.ed</option>
// //                     <option value="DEd">DEd</option>
// //                   </optgroup>
// //                 </select>
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="courses" className='custom-newtutor'>Courses:</label>
// //                 <Dropdown
// //                   selectedMainOption={selectedMainOption}
// //                   selectedSubOption={selectedSubOption}
// //                   onChange={(main, sub) => {
// //                     setSelectedMainOption(main);
// //                     setSelectedSubOption(sub);
// //                     setFormData({
// //                       ...formData,
// //                       courses: [sub] // Update selected courses as array
// //                     });
// //                   }}
// //                 />
// //                 {errors.courses && <p className='custom-error-message'>{errors.courses}</p>}
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="address" className='custom-newtutor'>Address:</label>
// //                 <input
// //                   className='custom-newtutor-input'
// //                   type="text"
// //                   name="address"
// //                   placeholder="Enter Address"
// //                   required
// //                   value={formData.address}
// //                   onChange={handleChange}
// //                 />
// //                 {errors.address && (<p className='custom-error-message'>{errors.address}</p>)}
// //               </div>
// //               <div className="form-group gender-group">
// //                 <label className='custom-newtutor'>Gender:</label>
// //                 <div className="custom-gender-category">
// //                   <input type="radio" name="gender" id="male" value="Male" className='custom-newtutor-input' onChange={handleChange} />
// //                   <label htmlFor="male" className='custom-newtutor'>Male</label>

// //                   <input type="radio" name="gender" id="female" value="Female" className='custom-newtutor-input' onChange={handleChange} />
// //                   <label htmlFor="female" className='custom-newtutor'>Female</label>

// //                   <input type="radio" name="gender" id="other" value="Other" className='custom-newtutor-input' onChange={handleChange} />
// //                   <label htmlFor="other" className='custom-newtutor'>Other</label>
// //                 </div>
// //                 {errors.gender && (<p className='custom-error-message'>{errors.gender}</p>)}
// //               </div>
// //             </div>
// //             <button className="custom-button" type="submit">Register</button>
// //         <Link to='/AdminDashboard'>    <button className='custom-button'>Back</button></Link>
// //           </form>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default AddNewTutor;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { withRouter } from 'react-router-dom';
// import Dropdown from './Dropdown'; 
// import { Link } from 'react-router-dom';
// import './AddNewTutor.css';
// import AdminDashboard from './AdminDashboard';
// import TutorDropdown from './TutorDropdown';

// function AddNewTutor({ history }) {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     mobilenumber:'',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     qualification: '',
//     higherQualification: '',
//     courses: [], // Changed to array to match the backend model
//     address: '',
//     gender: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [selectedMainOption, setSelectedMainOption] = useState('');
//   const [selectedSubOption, setSelectedSubOption] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     setErrors({
//       ...errors,
//       [e.target.name]: '', 
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newErrors = {};

//     // Validation logic
//     if (!formData.firstName.trim()) {
//       newErrors.firstName = 'First Name is required';
//     }
//     else if (!/^[a-zA-Z\s]+$/.test(formData.firstName.trim())) {
//       newErrors.firstName = "Enter a valid first name";
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = 'Last Name is required';
//     }
//     else if (!/^[a-zA-Z\s]+$/.test(formData.lastName.trim())) {
//       newErrors.lastName = "Enter a valid last name";
//     }

//     if (!formData.mobilenumber.trim()) {
//       newErrors.mobilenumber = 'Enter a Mobile Number';
//     } else {
//       // Regular expression to match mobile numbers starting with 6, 7, 8, or 9
//       const mobileRegex = /^[6-9]\d{9}$/;
//       if (!mobileRegex.test(formData.mobilenumber.trim())) {
//           newErrors.mobilenumber = 'Enter a valid Mobile Number starting with 6-9 series';
//       }
//     }

//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (!emailPattern.test(formData.email.trim())) {
//       newErrors.email = "Enter a valid email address";
//     }

//     if (!formData.password.trim()) {
//       newErrors.password = 'Password is required';
//     } else if (!isValidPassword(formData.password.trim())) {
//       newErrors.password = 'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one digit, and one special character';
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
//     if (!formData.qualification) {
//       newErrors.qualification = 'Please select qualification.';
//     }
    
//     if (!formData.higherQualification) {
//       newErrors.higherQualification = 'Please select higher qualification.';
//     }
    
//     if (formData.courses.length === 0) {
//       newErrors.courses = 'Select at least one course';
//     }

//     if (!formData.gender) {
//       newErrors.gender = 'Select gender';
//     }

//     if (!formData.address.trim()) {
//       newErrors.address = 'Address is required';
//     }
//     else if (!/^[a-zA-Z\s]+$/.test(formData.address.trim())) {
//       newErrors.address = "Enter a valid Address name";
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       try {
//         const response = await axios.post("http://localhost:8080/api-v1/create", formData);
//         alert(response.data);
//         window.location.reload();
//         // history.push('/LoginTutor');
//       } catch (error) {
//         // alert('Error submitting form', error);
//       }
//     }
//   };

//   const isValidPassword = (password) => {
//     return password.length >= 8;
//   };

//   return (
//     <>
//     <AdminDashboard/>
//       <div className="add-tutor-page" style={{marginTop: "-50%", width: "60%", marginLeft: "25%"}}>
//         <div className="register-card">
//           <h2 className="heading" style={{fontSize: "2.5rem", color: "#3498db"}}>Tutor Register Page</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="firstName" className='custom-newtutor'>First Name:</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="Enter First Name"
//                   required
//                   value={formData.firstName}
//                   onChange={handleChange}
//                 />
//                 {errors.firstName && <p className='custom-error-message'>{errors.firstName}</p>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="lastName" className='custom-newtutor'>Last Name:</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Enter Last Name"
//                   required
//                   value={formData.lastName}
//                   onChange={handleChange}
//                 />
//                 {errors.lastName && <p className='custom-error-message'>{errors.lastName}</p>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor='mobilenumber' className='custom-newtutor'>Mobile No:</label>
//                 <input
//                   type='text'
//                   name='mobilenumber'
//                   placeholder='Enter Mobile No'
//                   required
//                   value={formData.mobilenumber}
//                   onChange={handleChange}
//                 />
//                 {errors.mobilenumber && <p className='custom-error-message'>{errors.mobilenumber}</p>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email" className='custom-newtutor'>Email:</label>
//                 <input
//                   type="text"
//                   name="email"
//                   placeholder="Enter Email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 {errors.email && <p className='custom-error-message' title={errors.email}>{errors.email}</p>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password" className='custom-newtutor'>Password:</label>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Enter Password"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 {errors.password && <p className='custom-error-message' title={errors.password}>{errors.password}</p>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="confirmPassword" className='custom-newtutor'>Confirm Password:</label>
//                 <input
//                   className='custom-newtutor-input'
//                   type="password"
//                   name="confirmPassword"
//                   placeholder="Re-Enter Password"
//                   required
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                 />
//                 {errors.confirmPassword && <p className='custom-error-message' title={errors.confirmPassword}>{errors.confirmPassword}</p>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="qualification" className='custom-newtutor'>Qualification:</label>
//                 <select
//                   className='custom-newtutor-input'
//                   name="qualification"
//                   value={formData.qualification}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select Qualification</option>
//                   <optgroup label="Degree">
//                     <option value="BZC">BZC</option>
//                     <option value="BSc">BSc</option>
//                     <option value="B.com">B.com</option>
//                     <option value="MPCs">MPCs</option>
//                     <option value="B.tech">B.Tech</option>
//                   </optgroup>
//                 </select>
//                 {errors.courses && <p className='custom-error-message'>{errors.qualification}</p>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="higherQualification" className='custom-newtutor'>Higher Qualification:</label>
//                 <select
//                   className='custom-newtutor-input'
//                   name="higherQualification"
//                   value={formData.higherQualification}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select Higher Qualification</option>
//                   <optgroup label="Higher Qualification">
//                     <option value="M.Tech">M.Tech</option>
//                     <option value="MS">MS</option>
//                     <option value="PG">PG</option>
//                     <option value="B.ed">B.ed</option>
//                     <option value="DEd">DEd</option>
//                   </optgroup>
//                 </select>
//                 {errors.courses && <p className='custom-error-message'>{errors.higherQualification}</p>}
//               </div>
//               <div className="form-group" style={{marginLeft: "20%"}}>
//                 {/* <label htmlFor="courses" className='custom-newtutor'>Courses:</label> */}
//                 <TutorDropdown
//                   selectedMainOption={selectedMainOption}
//                   selectedSubOption={selectedSubOption}
//                   onChange={(main, sub) => {
//                     setSelectedMainOption(main);
//                     setSelectedSubOption(sub);
//                     setFormData({
//                       ...formData,
//                       courses: [sub] // Update selected courses as array
//                     });
//                   }}
//                 />
//                 {errors.courses && <p className='custom-error-message'>{errors.courses}</p>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="address" className='custom-newtutor'>Address:</label>
//                 <input
//                   className='custom-newtutor-input'
//                   type="text"
//                   name="address"
//                   placeholder="Enter Address"
//                   required
//                   value={formData.address}
//                   onChange={handleChange}
//                 />
//                 {errors.address && (<p className='custom-error-message'>{errors.address}</p>)}
//               </div>
//               <div className="form-group gender-group">
//                 <label className='custom-newtutor' style={{marginLeft: "80%"}}>Gender:</label> <br/>
//                 <div className="custom-gender-category" style={{display: 'flex'}}>
//                   <input type="radio" name="gender" id="male" value="Male" className='custom-newtutor-input' onChange={handleChange} style={{marginLeft: "30%"}}/>
//                   <label htmlFor="male" className='custom-newtutor' style={{marginLeft: "-10%"}}>Male</label>

//                   <input type="radio" name="gender" id="female" value="Female" className='custom-newtutor-input' onChange={handleChange} style={{marginLeft: "-7%"}}/>
//                   <label htmlFor="female" className='custom-newtutor' style={{marginLeft: "-10%"}}>Female</label>

//                   <input type="radio" name="gender" id="other" value="Other" className='custom-newtutor-input' onChange={handleChange} style={{marginLeft: "-3%"}}/>
//                   <label htmlFor="other" className='custom-newtutor' style={{marginLeft: "-10%", marginRight: "20%"}}>Other</label>
//                 </div>
//                 {errors.gender && (<p className='custom-error-message'>{errors.gender}</p>)}
//               </div>
//             </div>
//             <button className="custom-button" type="submit" style={{width: "30%", marginLeft: "30%"}}>Register</button>
//             {/* <Link to='/AdminDashboard'><button className='custom-button'>Back</button></Link> */}
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AddNewTutor;












import React, { useState } from 'react';
import axios from 'axios';
import AdminDashboard from './AdminDashboard';
import TutorDropdown from './TutorDropdown';

function AddNewTutor({ history }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobilenumber:'',
    email: '',
    password: '',
    confirmPassword: '',
    qualification: '',
    higherQualification: '',
    courses: [],
    address: '',
    gender: '',
  });

  const [errors, setErrors] = useState({});
  const [selectedMainOption, setSelectedMainOption] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '', 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validation logic...
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName.trim())) {
      newErrors.firstName = "Enter a valid first name";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.lastName.trim())) {
      newErrors.lastName = "Enter a valid last name";
    }

    if (!formData.mobilenumber.trim()) {
      newErrors.mobilenumber = 'Enter a Mobile Number';
    } else {
      const mobileRegex = /^[6-9]\d{9}$/;
      if (!mobileRegex.test(formData.mobilenumber.trim())) {
          newErrors.mobilenumber = 'Enter a valid Mobile Number starting with 6-9 series';
      }
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (!isValidPassword(formData.password.trim())) {
      newErrors.password = 'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one digit, and one special character';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.qualification) {
      newErrors.qualification = 'Please select qualification.';
    }

    if (!formData.higherQualification) {
      newErrors.higherQualification = 'Please select higher qualification.';
    }

    if (formData.courses.length === 0) {
      newErrors.courses = 'Select at least one course';
    }

    if (!formData.gender) {
      newErrors.gender = 'Select gender';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    } else if (!/^[a-zA-Z0-9\s,'-]*$/.test(formData.address.trim())) {
      newErrors.address = "Enter a valid Address";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const updatedFormData = {
          ...formData,
          courses: [`${selectedMainOption} - ${selectedSubOption}`],
        };

        const response = await axios.post("http://192.168.138.130:8080/api-v1/create", updatedFormData);
        alert(response.data);
        window.location.reload();
      } catch (error) {
        // Handle error
      }
    }
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };
  return (
    <>
      <AdminDashboard/>
      <div className="add-tutor-page-container tutor-css" style={{marginTop: "-50%", width: "60%", marginLeft: "25%"}}>
        <div className="add-tutor-card">
          <h2 className="add-tutor-heading" style={{fontSize: "2.5rem", color: "#3498db"}}>Tutor Register Page</h2>
          <form onSubmit={handleSubmit}>
            <div className="add-tutor-form-row">
              <div className="add-tutor-form-group">
                <label htmlFor="firstName" className='add-tutor-label'>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <p className='add-tutor-error'>{errors.firstName}</p>}
              </div>
              <div className="add-tutor-form-group">
                <label htmlFor="lastName" className='add-tutor-label'>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <p className='add-tutor-error'>{errors.lastName}</p>}
              </div>
              <div className="add-tutor-form-group">
                <label htmlFor='mobilenumber' className='add-tutor-label'>Mobile No:</label>
                <input
                  type='text'
                  name='mobilenumber'
                  placeholder='Enter Mobile No'
                  required
                  value={formData.mobilenumber}
                  onChange={handleChange}
                />
                {errors.mobilenumber && <p className='add-tutor-error'>{errors.mobilenumber}</p>}
              </div>
              <div className="add-tutor-form-group">
                <label htmlFor="email" className='add-tutor-label'>Email:</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className='add-tutor-error'>{errors.email}</p>}
              </div>
              <div className="add-tutor-form-group">
                <label htmlFor="password" className='add-tutor-label'>Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className='add-tutor-error'>{errors.password}</p>}
              </div>
              <div className="add-tutor-form-group">
                <label htmlFor="confirmPassword" className='add-tutor-label'>Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-Enter Password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <p className='add-tutor-error'>{errors.confirmPassword}</p>}
              </div>
              <div className="add-tutor-form-group">
                <label htmlFor="qualification" className='add-tutor-label'>Qualification:</label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                >
                  <option value="">Select Qualification</option>
                  <optgroup label="Degree">
                    <option value="BZC">BZC</option>
                    <option value="BSc">BSc</option>
                    <option value="B.com">B.com</option>
                    <option value="MPCs">MPCs</option>
                    <option value="B.tech">B.Tech</option>
                  </optgroup>
                </select>
                {errors.qualification && <p className='add-tutor-error'>{errors.qualification}</p>}
              </div>
              <div className="add-tutor-form-group">
                <label htmlFor="higherQualification" className='add-tutor-label'>Higher Qualification:</label>
                <select
                  name="higherQualification"
                  value={formData.higherQualification}
                  onChange={handleChange}
                >
                  <option value="">Select Higher Qualification</option>
                  <optgroup label="Higher Qualification">
                    <option value="M.Tech">M.Tech</option>
                    <option value="MS">MS</option>
                    <option value="PG">PG</option>
                    <option value="B.ed">B.ed</option>
                    <option value="DEd">DEd</option>
                  </optgroup>
                </select>
                {errors.higherQualification && <p className='add-tutor-error'>{errors.higherQualification}</p>}
              </div>
              <div className="add-tutor-form-group" style={{marginLeft: "20%"}}>
                <TutorDropdown
                  selectedMainOption={selectedMainOption}
                  selectedSubOption={selectedSubOption}
                  onChange={(main, sub) => {
                    setSelectedMainOption(main);
                    setSelectedSubOption(sub);
                    setFormData({
                      ...formData,
                      courses: [`${main} - ${sub}`],
                    });
                  }}
                />
                {errors.courses && <p className='add-tutor-error'>{errors.courses}</p>}
              </div>
              <div className="add-tutor-form-group">
                <label htmlFor="address" className='add-tutor-label'>Address:</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && <p className='add-tutor-error'>{errors.address}</p>}
              </div>
              <div className="add-tutor-form-group gender-group">
                <label>Gender:</label> <br/>
                <div className="add-tutor-gender-category">
                  <input type="radio" name="gender" id="male" value="Male" onChange={handleChange}/>
                  <label htmlFor="male">Male</label>

                  <input type="radio" name="gender" id="female" value="Female" onChange={handleChange}/>
                  <label htmlFor="female">Female</label>

                  <input type="radio" name="gender" id="other" value="Other" onChange={handleChange}/>
                  <label htmlFor="other">Other</label>
                </div>
                {errors.gender && (<p className='add-tutor-error'>{errors.gender}</p>)}
              </div>
            </div>
            <button className="add-tutor-button" type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNewTutor;
