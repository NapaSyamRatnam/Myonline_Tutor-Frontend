

// import React from 'react';
// import { Link } from 'react-router-dom';
// // import './Homepage.css';
// // import './New.css';
// // import './wts.css';
// import './Landingpage.css';



// const Landingpage = () => {
  
//   return (
//     <div className="app" id='landingpage'>
//       <header>
//         <nav>
       
//           <div className="logo">My Online Tutor</div>
          
//         <div className='auth-buttons' style={{display: "flex"}}>
//           {/* <div>
//            <Link to='/UserRegistration'> <button >Sign Up</button></Link>
//            </div> */}
//            <div>
//             <Link to='/SignIn'><button style={{marginLeft:'3px'}}>Sign In</button></Link>
//             </div>
//             </div>
//         </nav>
//       </header>
//       <main>
//         {/* <section className="background-section">
//           <div className="background-card">
//             <div className="card-description">
//               <h1>My Online Tutor</h1>
//               <p>Unlock Your Potential with Expert Tutors</p>
//               <p>Join Live and Interactive Online Classes with the Best Tutors</p>
//             </div>
//             <div className="card-image">
//               <img
//                 src="https://img.freepik.com/free-photo/young-girl-paying-attention-online-class_23-2148779819.jpg?w=900&t=st=1705843000~exp=1705843600~hmac=8209cbb40bbd09ab8d1741d170df3132551d9e26891897fa1333af477adfb807"
//                 alt=""
//               />
//             </div>
//           </div>
//         </section> */}

//           <br/>
//           <div style={{display: "flex"}}>
//           <div className="card-image">
//               <img
//                 src="https://img.freepik.com/free-photo/young-girl-paying-attention-online-class_23-2148779819.jpg?w=900&t=st=1705843000~exp=1705843600~hmac=8209cbb40bbd09ab8d1741d170df3132551d9e26891897fa1333af477adfb807"
//                 alt=""
//               />
//             </div>
//           <div className="card-description"> <br/> <br/> <br/>
//               <span style={{fontSize: "3.6rem", color: "#0d47a1", fontWeight: "bolder", marginLeft: "20%"}}>Welcome To</span> <br/>
//               <span style={{fontSize: "3.4rem", color: "#0d47a1", fontWeight: "bolder", marginLeft: "40%"}}>My Online Tutor</span> <br/> <br/> <br/>
//               <h2 style={{marginLeft: "22%", fontSize: "2rem"}}>"Learn Smart, Succeed Big"</h2> <br/>

//               <p>Unlock Your Potential with Expert Tutors</p>
//               <Link to='/UserRegistration'><button style={{marginLeft: "40%"}}>Join Now</button></Link>

//             </div>
            
//           </div>



//         <hr />

//         <h2 style={{fontSize: "2.7rem", marginLeft: "30%"}}>Our Top Featured Courses</h2> <br/>
//         <section className="home-section" style={{marginLeft: "7%"}}>
//           <Link to="/Academic" className="course-link">
//             <div className="course-item">
//               <img
//                 src="https://img.freepik.com/free-photo/kids-getting-back-school-together_23-2149507650.jpg?w=900&t=st=1704865629~exp=1704866229~hmac=bf48f531d643d12a0a78e7649c08158b6f50f18913eb2ae8f59899328b19a6ff"
//                 alt=""
//                 className="course-image"
//               />
//               <h2>Academic Courses</h2>
//             </div>
//           </Link>

//           <Link to="/Technical" className="course-link" style={{marginLeft: "5%"}}>
//             <div className="course-item">
//               <img
//                 src="https://img.freepik.com/premium-photo/happy-young-student-with-laptop-looking-his-classmate-sitting-front-him-during-discussion-consultation-lesson_274679-9699.jpg?w=900"
//                 alt=""
//                 className="course-image"
//               />
//               <h2>Technical Courses</h2>
//             </div>
//           </Link>

//           <Link to="/Professional" className="course-link" style={{marginLeft: "5%"}}>
//             <div className="course-item">
//               <img
//                 src="https://img.freepik.com/free-photo/tailors-working_1098-15502.jpg?w=900&t=st=1704866085~exp=1704866685~hmac=2a579c0ddc8fa17d927942a0142f6fabeb54dc1872fabdc5e56739fdd9f42be2"
//                 alt=""
//                 className="course-image"
//               />
//               <h2>Professional/Skilled</h2>
//             </div>
//           </Link>
//         </section>

//         <hr />

    


//       <section className="content-section" >
//           <div style={{display: "flex"}}> <br/> 
//           <div className="about-us" style={{marginTop: "5%"}}> 
//             <h2 style={{fontSize: "3rem", marginLeft: "-40%"}}>About Us</h2>
//             <p style={{width: "60%"}}>
//               My Online Tutor is dedicated to providing high-quality online
//               education. We aim to empower students through interactive learning
//               experiences led by expert tutors. Join us and unlock your academic
//               and professional potential.
//             </p>
//           </div>
//           <div>
//               <img src='https://media.istockphoto.com/id/1309784531/photo/smiling-young-indian-tutor-teaching-foreign-language-remotely.jpg?s=612x612&w=0&k=20&c=dlU9S6pSMQ-YkEHiTSIfeh7qgUiEnJ8nEn7Ef8azf8o=' alt='' 
//               style={{width: "180%", height: "50vh", marginLeft: "-120%", borderRadius: "2rem", border: "1rem solid"}}/>
//           </div>
//           </div>
//         </section>
//       </main>

//       <section className='content-section' style={{marginTop: "-2%"}}>
//       <h2 style={{fontSize: "3rem", marginLeft: "4%", color: "#0d47a1"}}>Why Choose Us</h2> <br/> <br/> <br/>
//       <div className="why-choose-us" style={{display: "flex", marginLeft: "2%"}}>
//             <div className="choose-us-item">
//               <img src='https://img.freepik.com/free-photo/teacher-smart-instructor-grey-suit-classroom-with-computer-whiteboard-explaining-math_140725-163363.jpg?t=st=1710154871~exp=1710158471~hmac=ef27d036a2ad8daa21c0101f7c9034348970fd9612f4e000e8a8d1b7379cbd81&w=1060' alt='' style={{width: "60%", height: "30vh", borderRadius: "2rem"}}/>
//               <h3 style={{fontSize: "2rem", color: "#0d47a1"}}>Experienced Tutors</h3>
//               <p style={{width: "50%", marginLeft: "25%"}}>Learn from experienced and qualified tutors in your chosen field.</p>
//             </div>

//             <div className="choose-us-item" style={{marginLeft: "-5%"}}>
//             <img src='https://img.freepik.com/free-photo/vocabulary-lessons-happy-female-teacher-using-flashcards-teach-letters-alphabet-preschool-little-kids-virtual-class_662251-2459.jpg?t=st=1710155005~exp=1710158605~hmac=6fdcc7328eba6b53d996d67d3872666bea0bc1bef0ea136ed9794ef9f692671c&w=1060' alt='' style={{width: "60%", height: "30vh", borderRadius: "2rem"}}/>

//               <h3 style={{fontSize: "2rem", color: "#0d47a1"}}>Interactive Classes</h3>
//               <p style={{width: "50%", marginLeft: "25%"}}>Engage in live and interactive online classes for effective learning.</p>
//             </div>

//             {/* <div className="choose-us-item">
//             <img src='https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' style={{width: "30%", height: "30vh"}}/>

//               <h3>Wide Range of Courses</h3>
//               <p>Explore academic, technical, and professional courses tailored for you.</p>
//             </div> */}

//             <div className="choose-us-item" style={{marginLeft: "-6%"}}>
//             <img src='https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' style={{width: "60%", height: "30vh", borderRadius: "2rem"}}/>

//               <h3 style={{fontSize: "2rem", color: "#0d47a1"}}>Flexible Learning</h3>
//               <p style={{width: "50%", marginLeft: "25%"}}>Study at your own pace with our flexible learning schedules.</p>
//             </div>
//           </div>
          

//       </section>

//       {/* <div className="contact-us">
//             <h2>Contact Us</h2>
//             <p>
//               Email: info@myonlinetutor.com <br />
//               Phone: +1 123-456-7890 <br />
//               Address: 123 Main Street, Cityville, Country 
//             </p>
//           </div> */}
//       <footer>
//         <div style={{display: "flex"}}>
//         {/* <div>
//           <h2>My Online Tutor</h2>
//           <p style={{color:'white'}}>Facebook</p>
//           <p>Twitter</p>
//           <p>Instagram</p>
//         </div> */}
//         <div className="social-links" style={{marginLeft: "40%"}}>
//         <p style={{color: "white"}}>
//               Email: info@myonlinetutor.com <br />
//               Phone: +1 123-456-7890 <br />
//               Address: 123 Main Street, Cityville, Country 
//             </p>
//         </div>
//         </div>
//         <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>

//       </footer>
//     </div>
//   );
// };

// export default Landingpage;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Landingpage.css';

const Landingpage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="app" id='landingpage'>
      <header>
        <nav>
                   
          <div className="logo">My Online Tutor</div>
  
          <div className='auth-buttons' style={{display: "flex"}}>

            <div>
              <Link to='/SignIn'><button style={{marginLeft:'3px'}}>Sign In</button></Link>
            </div>
          </div>
        </nav>
        <p style={{ color:'white',marginLeft:'1000px',fontSize:'25px'}}>{currentTime.toLocaleString()}</p> 
      </header>
      <main>
        <br/>
        <div style={{display: "flex"}}>
          
          <div className="card-image">
          {/* <p style={{marginLeft:'800px'}}>{currentTime.toLocaleString()}</p>  */}
            <img
              src="https://img.freepik.com/free-photo/young-girl-paying-attention-online-class_23-2148779819.jpg?w=900&t=st=1705843000~exp=1705843600~hmac=8209cbb40bbd09ab8d1741d170df3132551d9e26891897fa1333af477adfb807"
              alt=""
            />
            
          </div>
          <div className="card-description"> <br/> <br/> <br/>
            <span style={{fontSize: "3.6rem", color: "#0d47a1", fontWeight: "bolder", marginLeft: "20%"}}>Welcome To</span> <br/>
            <span style={{fontSize: "3.4rem", color: "#0d47a1", fontWeight: "bolder", marginLeft: "40%"}}>My Online Tutor</span> <br/> <br/> <br/>
            <h2 style={{marginLeft: "22%", fontSize: "2rem"}}>"Learn Smart, Succeed Big"</h2> <br/>

            <p>Unlock Your Potential with Expert Tutors</p>
            <Link to='/UserRegistration'><button style={{marginLeft: "40%"}}>Join Now</button></Link>
          </div>
        </div>

        <hr />

        <h2 style={{fontSize: "2.7rem", marginLeft: "30%"}}>Our Top Featured Courses</h2> <br/>
        <section className="home-section" style={{marginLeft: "7%"}}>
          <Link to="/Academic" className="course-link">
            <div className="course-item">
              <img
                src="https://img.freepik.com/free-photo/kids-getting-back-school-together_23-2149507650.jpg?w=900&t=st=1704865629~exp=1704866229~hmac=bf48f531d643d12a0a78e7649c08158b6f50f18913eb2ae8f59899328b19a6ff"
                alt=""
                className="course-image"
              />
              <h2>Academic Courses</h2>
            </div>
          </Link>

          <Link to="/Technical" className="course-link" style={{marginLeft: "5%"}}>
            <div className="course-item">
              <img
                src="https://img.freepik.com/premium-photo/happy-young-student-with-laptop-looking-his-classmate-sitting-front-him-during-discussion-consultation-lesson_274679-9699.jpg?w=900"
                alt=""
                className="course-image"
              />
              <h2>Technical Courses</h2>
            </div>
          </Link>

          <Link to="/Professional" className="course-link" style={{marginLeft: "5%"}}>
            <div className="course-item">
              <img
                src="https://img.freepik.com/free-photo/tailors-working_1098-15502.jpg?w=900&t=st=1704866085~exp=1704866685~hmac=2a579c0ddc8fa17d927942a0142f6fabeb54dc1872fabdc5e56739fdd9f42be2"
                alt=""
                className="course-image"
              />
              <h2>Professional/Skilled</h2>
            </div>
          </Link>
        </section>

        <hr />

        <section className="content-section" >
          <div style={{display: "flex"}}> <br/> 
            <div className="about-us" style={{marginTop: "5%"}}> 
              <h2 style={{fontSize: "3rem", marginLeft: "-40%"}}>About Us</h2>
              <p style={{width: "60%"}}>
                My Online Tutor is dedicated to providing high-quality online
                education. We aim to empower students through interactive learning
                experiences led by expert tutors. Join us and unlock your academic
                and professional potential.
              </p>
            </div>
            <div>
              <img src='https://media.istockphoto.com/id/1309784531/photo/smiling-young-indian-tutor-teaching-foreign-language-remotely.jpg?s=612x612&w=0&k=20&c=dlU9S6pSMQ-YkEHiTSIfeh7qgUiEnJ8nEn7Ef8azf8o=' alt='' 
              style={{width: "180%", height: "50vh", marginLeft: "-120%", borderRadius: "2rem", border: "1rem solid"}}/>
            </div>
          </div>
        </section>
      </main>

      <section className='content-section' style={{marginTop: "-2%"}}>
        <h2 style={{fontSize: "3rem", marginLeft: "4%", color: "#0d47a1"}}>Why Choose Us</h2> <br/> <br/> <br/>
        <div className="why-choose-us" style={{display: "flex", marginLeft: "2%"}}>
          <div className="choose-us-item">
            <img src='https://img.freepik.com/free-photo/teacher-smart-instructor-grey-suit-classroom-with-computer-whiteboard-explaining-math_140725-163363.jpg?t=st=1710154871~exp=1710158471~hmac=ef27d036a2ad8daa21c0101f7c9034348970fd9612f4e000e8a8d1b7379cbd81&w=1060' alt='' style={{width: "60%", height: "30vh", borderRadius: "2rem"}}/>
            <h3 style={{fontSize: "2rem", color: "#0d47a1"}}>Experienced Tutors</h3>
            <p style={{width: "50%", marginLeft: "25%"}}>Learn from experienced and qualified tutors in your chosen field.</p>
          </div>

          <div className="choose-us-item" style={{marginLeft: "-5%"}}>
            <img src='https://img.freepik.com/free-photo/vocabulary-lessons-happy-female-teacher-using-flashcards-teach-letters-alphabet-preschool-little-kids-virtual-class_662251-2459.jpg?t=st=1710155005~exp=1710158605~hmac=6fdcc7328eba6b53d996d67d3872666bea0bc1bef0ea136ed9794ef9f692671c&w=1060' alt='' style={{width: "60%", height: "30vh", borderRadius: "2rem"}}/>
            <h3 style={{fontSize: "2rem", color: "#0d47a1"}}>Interactive Classes</h3>
            <p style={{width: "50%", marginLeft: "25%"}}>Engage in live and interactive online classes for effective learning.</p>
          </div>

          <div className="choose-us-item" style={{marginLeft: "-6%"}}>
            <img src='https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' style={{width: "60%", height: "30vh", borderRadius: "2rem"}}/>
            <h3 style={{fontSize: "2rem", color: "#0d47a1"}}>Flexible Learning</h3>
            <p style={{width: "50%", marginLeft: "25%"}}>Study at your own pace with our flexible learning schedules.</p>
          </div>
        </div>
      </section>

      <footer>
        <div style={{display: "flex"}}>
          <div className="social-links" style={{marginLeft: "40%"}}>
            <p style={{color: "white"}}>
              Email: info@myonlinetutor.com <br />
              Phone: +1 123-456-7890 <br />
              Address: 123 Main Street, Cityville, Country 
            </p>
          </div>
        </div>
        <p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landingpage;
