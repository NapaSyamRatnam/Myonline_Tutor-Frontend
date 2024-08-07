
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft , faArrowRight} from '@fortawesome/free-solid-svg-icons';

// function Quiz() {
//   const [showResults, setShowResults] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [customerid, setCustomerid] = useState();
//   const [coursename, setCourse] = useState("Css");
//   const [timeLeft, setTimeLeft] = useState(480); // 8 minutes in seconds
//   const [submitted, setSubmitted] = useState(false); // Track if test is submitted
//   const [percentage, setPercentage] = useState(0); 
//   const [selectedOptionId, setSelectedOptionId] = useState(null);
  

//   const questions = [ 

//     {
//             text: "1. What does CSS stand for?",
//             options: [
//               { id: 0, text: "a. Computer Style Sheets", isCorrect: false },
//               { id: 1, text: "b. Cascading Style Sheets", isCorrect: true },
//               { id: 2, text: "c. Creative Style Sheets", isCorrect: false },
//               { id: 3, text: "d. Colorful Style Sheets", isCorrect: false },
//             ],
//           },
//           {
//             text: "2. How many types of Styling are there in CSS?",
//             options: [
//               { id: 0, text: "a. inline styling", isCorrect: false },
//               { id: 1, text: "b. external styling", isCorrect: false },
//               { id: 2, text: "c. internal styling", isCorrect: false },
//               { id: 3, text: "d. inline, external, internal Styling", isCorrect: true },
//             ],
//           },
//           {
//             text: "3. Which CSS property controls the text size?",
//             options: [
//               { id: 0, text: "a. font-size", isCorrect: true },
//               { id: 1, text: "b. font-style", isCorrect: false },
//               { id: 2, text: "c. text-style", isCorrect: false },
//               { id: 3, text: "d. text-size", isCorrect: false },
//             ],
//           },
//           {
//             text: "4. Which HTML attribute is used to define inline styles?",
//             options: [
//               { id: 0, text: "a. Class", isCorrect: false },
//               { id: 1, text: "b. style", isCorrect: true },
//               { id: 2, text: "c. font", isCorrect: false },
//               { id: 3, text: "d. styles", isCorrect: false },
//             ],
//           },
//           {
//             text: "5. Which is the Correct CSS Syntax?",
//             options: [
//               { id: 0, text: "a. {body:color=black;}", isCorrect: false },
//               { id: 1, text: "b. body{color:black;}", isCorrect: true },
//               { id: 2, text: "c. {body;color=black;}", isCorrect: false },
//               { id: 3, text: "d. body:color=black;", isCorrect: false },
//             ],
//           },
//           {
//             text: "6. How do you select an element with id 'demo'?",
//             options: [
//               { id: 0, text: "a. *demo", isCorrect: false },
//               { id: 1, text: "b. demo", isCorrect: false },
//               { id: 2, text: "c. .demo", isCorrect: false},
//               { id: 3, text: "d. #demo", isCorrect: true },
//             ],
//           },
//           {
//             text: "7. How do you select the elements with class name 'test'?",
//             options: [
//               { id: 0, text: "a. .test", isCorrect: true },
//               { id: 1, text: "b. test", isCorrect: false },
//               { id: 2, text: "c. #test", isCorrect: false },
//               { id: 3, text: "d. *test", isCorrect: false },
//             ],
//           },
//           {
//             text: "8. Where is an HTML document is the correct place to refer to an external style sheet?",
//             options: [
//               { id: 0, text: "a. In the <body> section", isCorrect: false },
//               { id: 1, text: "b. At the starting of the document", isCorrect: false },
//               { id: 2, text: "c. In the <head> section", isCorrect: true },
//               { id: 3, text: "d. At the end of the document", isCorrect: false },
//             ],
//           },
//           {
//             text: "9. What does CSS stand for?",
//             options: [
//               { id: 0, text: "a. Computer Style Sheets", isCorrect: false },
//               { id: 1, text: "b. Cascading Style Sheets", isCorrect: true },
//               { id: 2, text: "c. Creative Style Sheets", isCorrect: false },
//               { id: 3, text: "d. Colorful Style Sheets", isCorrect: false },
//             ],
//           },
//           {
//             text: "10. How many types of Styling are there in CSS?",
//             options: [
//               { id: 0, text: "a. inline styling", isCorrect: false },
//               { id: 1, text: "b. external styling", isCorrect: false },
//               { id: 2, text: "c. internal styling", isCorrect: false },
//               { id: 3, text: "d. inline, external, internal Styling", isCorrect: true },
//             ],
//           },
//           {
//             text: "11. Which CSS property controls the text size?",
//             options: [
//               { id: 0, text: "a. font-size", isCorrect: true },
//               { id: 1, text: "b. font-style", isCorrect: false },
//               { id: 2, text: "c. text-style", isCorrect: false },
//               { id: 3, text: "d. text-size", isCorrect: false },
//             ],
//           },
//           {
//             text: "12. Which HTML attribute is used to define inline styles?",
//             options: [
//               { id: 0, text: "a. Class", isCorrect: false },
//               { id: 1, text: "b. style", isCorrect: true },
//               { id: 2, text: "c. font", isCorrect: false },
//               { id: 3, text: "d. styles", isCorrect: false },
//             ],
//           },
//           {
//             text: "13. Which is the Correct CSS Syntax?",
//             options: [
//               { id: 0, text: "a. {body:color=black;}", isCorrect: false },
//               { id: 1, text: "b. body{color:black;}", isCorrect: true },
//               { id: 2, text: "c. {body;color=black;}", isCorrect: false },
//               { id: 3, text: "d. body:color=black;", isCorrect: false },
//             ],
//           },
//           {
//             text: "14. How do you select an element with id 'demo'?",
//             options: [
//               { id: 0, text: "a. *demo", isCorrect: false },
//               { id: 1, text: "b. demo", isCorrect: false },
//               { id: 2, text: "c. .demo", isCorrect: false},
//               { id: 3, text: "d. #demo", isCorrect: true },
//             ],
//           },
//           {
//             text: "15. How do you select the elements with class name 'test'?",
//             options: [
//               { id: 0, text: "a. .test", isCorrect: true },
//               { id: 1, text: "b. test", isCorrect: false },
//               { id: 2, text: "c. #test", isCorrect: false },
//               { id: 3, text: "d. *test", isCorrect: false },
//             ],
//           },
//           {
//             text: "16. Where is an HTML document is the correct place to refer to an external style sheet?",
//             options: [
//               { id: 0, text: "a. In the <body> section", isCorrect: false },
//               { id: 1, text: "b. At the starting of the document", isCorrect: false },
//               { id: 2, text: "c. In the <head> section", isCorrect: true },
//               { id: 3, text: "d. At the end of the document", isCorrect: false },
//             ],
//           },
//           {
//             text: "17. What does CSS stand for?",
//             options: [
//               { id: 0, text: "a. Computer Style Sheets", isCorrect: false },
//               { id: 1, text: "b. Cascading Style Sheets", isCorrect: true },
//               { id: 2, text: "c. Creative Style Sheets", isCorrect: false },
//               { id: 3, text: "d. Colorful Style Sheets", isCorrect: false },
//             ],
//           },
//           {
//             text: "18. How many types of Styling are there in CSS?",
//             options: [
//               { id: 0, text: "a. inline styling", isCorrect: false },
//               { id: 1, text: "b. external styling", isCorrect: false },
//               { id: 2, text: "c. internal styling", isCorrect: false },
//               { id: 3, text: "d. inline, external, internal Styling", isCorrect: true },
//             ],
//           },
//           {
//             text: "19. Which CSS property controls the text size?",
//             options: [
//               { id: 0, text: "a. font-size", isCorrect: true },
//               { id: 1, text: "b. font-style", isCorrect: false },
//               { id: 2, text: "c. text-style", isCorrect: false },
//               { id: 3, text: "d. text-size", isCorrect: false },
//             ],
//           },
//           {
//             text: "20. Which HTML attribute is used to define inline styles?",
//             options: [
//               { id: 0, text: "a. Class", isCorrect: false },
//               { id: 1, text: "b. style", isCorrect: true },
//               { id: 2, text: "c. font", isCorrect: false },
//               { id: 3, text: "d. styles", isCorrect: false },
//             ],
//           },
//           {
//             text: "21. Which is the Correct CSS Syntax?",
//             options: [
//               { id: 0, text: "a. {body:color=black;}", isCorrect: false },
//               { id: 1, text: "b. body{color:black;}", isCorrect: true },
//               { id: 2, text: "c. {body;color=black;}", isCorrect: false },
//               { id: 3, text: "d. body:color=black;", isCorrect: false },
//             ],
//           },
//           {
//             text: "22. How do you select an element with id 'demo'?",
//             options: [
//               { id: 0, text: "a. *demo", isCorrect: false },
//               { id: 1, text: "b. demo", isCorrect: false },
//               { id: 2, text: "c. .demo", isCorrect: false},
//               { id: 3, text: "d. #demo", isCorrect: true },
//             ],
//           },
//           {
//             text: "23. How do you select the elements with class name 'test'?",
//             options: [
//               { id: 0, text: "a. .test", isCorrect: true },
//               { id: 1, text: "b. test", isCorrect: false },
//               { id: 2, text: "c. #test", isCorrect: false },
//               { id: 3, text: "d. *test", isCorrect: false },
//             ],
//           },
//           {
//             text: "24. Where is an HTML document is the correct place to refer to an external style sheet?",
//             options: [
//               { id: 0, text: "a. In the <body> section", isCorrect: false },
//               { id: 1, text: "b. At the starting of the document", isCorrect: false },
//               { id: 2, text: "c. In the <head> section", isCorrect: true },
//               { id: 3, text: "d. At the end of the document", isCorrect: false },
//             ],
//           },

//    ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       // Automatically submit when time runs out
//       if (!submitted) { // Check if test is not already submitted
//         submit();
//       }
//     }, timeLeft * 1000); // Convert timeLeft to milliseconds

//     return () => clearTimeout(timer); // Clean up timer on component unmount
//   }, [timeLeft, submitted]);

//   const startTimer = () => {
//     setTimeLeft(480); // Reset the timer
//   };

//   const updateTimer = () => {
//     // Update the timer every second
//     if (timeLeft > 0) {
//       setTimeLeft((prevTime) => prevTime - 1);
//     }
//   };

//   useEffect(() => {
//     const timerInterval = setInterval(updateTimer, 1000);

//     return () => clearInterval(timerInterval); // Clean up interval on component unmount
//   }, []);

//   const optionClicked = (isCorrect, optionId) => {
//     console.log("Option clicked:", isCorrect, optionId); // Log the clicked option
//     if (isCorrect) {
//       setScore(score + 1);
//     } else {
//       // if (currentQuestion + 1 < questions.length) {
//       //   setCurrentQuestion(currentQuestion + 1);
//       // } else {
//       //   setShowResults(true);
//       // }
//     }
//     if (optionId !== null) {
//       setSelectedOptionId(optionId); // Update selected option id only if an option is clicked
//       console.log("Selected option id:", optionId); // Log the selected option id
//     }
//   };



//   const retake = () => {
//     setScore(0);
//     setCurrentQuestion(0);
//     setShowResults(false);
//     startTimer(); // Restart the timer when retaking the quiz
//   };

//   const submit = () => {
//     const shouldSubmit = window.confirm("Are you sure you want to submit?");
//     if (shouldSubmit) {
//       const percentage = (score / questions.length) * 100;
//       setPercentage(percentage); // Update the state with calculated percentage

//       const data = {
//         userId: 123,
//         name:'Akhil',
//         course:'java',
//         percentage: percentage.toFixed(2)
//       };

//       axios.post('http://localhost:8062/api/test/create', data)
//         .then(response => {
//           console.log("Data successfully submitted:", response.data);
//         })
//         .catch(error => {
//           console.error("Error submitting data:", error);
//         });

//       const resultMessage = `You scored ${score} out of ${questions.length}. (${percentage.toFixed(2)}%)`;
//       document.getElementById("results").innerHTML = resultMessage;
//       setSubmitted(true);
//     }
//   };
  
//   const nextQuestion = () => {
//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedOptionId(null); // Reset selected option id when moving to the next question
//     } else {
//       setShowResults(true);
//     }
//   };

//   const prevQuestion = () => {
//     if (currentQuestion - 1 >= 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     } else {
//       alert("There is no previous question");
//     }
//   };

//     function background(e) {
//     e.target.style.background = "green";
//     }
    

//   return (
//     <>
//     <div>
//       <div className="text-center bg-body-tertiary" style={{ fontFamily: "Verdana" }}>
//         <h1 className="fw-bold">HTML Quiz</h1>
//         {showResults ? (
//           <div className="final-results">
//             <h1>Final Results</h1>
//           </div>
//         ) : (
//           <div className="question-card mt-2" style={{fontFamily:"sans-serif",marginLeft:'30px'}}>
//             <h2>
//               Question: {currentQuestion + 1} out of {questions.length}
//             </h2>
//             <div className="p-2">
//               <p style={{ paddingLeft: "900px",fontFamily:"verdana",fontWeight:"bolder" }}>Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}</p>
//             </div>
//             <div>
//             {questions[currentQuestion] && ( // Check if questions[currentQuestion] is defined
//               <>
//                 <h3 className="question-text">{questions[currentQuestion].text}</h3>
//                 <ul className="mt-2">
//                   {questions[currentQuestion].options.map((option) => (
//                     <li key={option.id} style={{ listStyleType: "none" }}>
//                     <button
//                       className="btn btn-secondary text-white mt-3 p-2"
//                       style={{ background: selectedOptionId === option.id ? 'green' : 'gray', width:'400px',backgroundColor:'gray' }}
//                       onClick={() => optionClicked(option.isCorrect, option.id)}
//                     >
//                       {option.text}
//                     </button>
//                   </li>
//                   ))}
//                 </ul>
//               </>
//             )}
//             </div>
//           </div>
//         )}
//         {!showResults && (
//           <>
//             <button className="btn btn-outline-secondary mt-3 me-5 hover-effect" type="button" style={{width:'150px',marginLeft:'30px', backgroundColor:'#0F969C',}} onClick={prevQuestion} >
//             <FontAwesomeIcon icon={faArrowLeft} /> previous
//             {/* {/ <span className="text-dark mt-1">previous</span> /} */}
//             </button>
//             <button className="btn btn-outline-secondary mt-3 ms-3 hover-effect" type="button" style={{width:'100px',backgroundColor:'#6DA5C0' }} onClick={nextQuestion}>
//             Next <FontAwesomeIcon icon={faArrowRight} /> 
//               {/* {/ <span className="text-dark mt-1">Next</span> /} */}
//               {/* {/ <img src="https://www.kindpng.com/picc/m/256-2568531_arrow-vector-png-right-arrow-icon-svg-transparent.png" className="img-fluid rounded ms-1" style={{width:"18px",height:"18px"}}/> /} */}
//             </button>
//           </>
          
//         )}
//       </div>
//       <div className="bg-body-tertiary">
//         <button className="btn btn-success text-white p-2 mt-5" style={{ marginLeft: "1000px", width:'100px',backgroundColor:'green' }} onClick={submit}>
//           Submit
//         </button>
//       </div>

//       <div className="p-2">
//         <p id="results" className="fw-bold fs-5" style={{ paddingLeft: "450px" }}></p>
//         {submitted && percentage > 40 ? (
//           <Link to="./Certificate">
//             <button className="btn btn-success text-white p-2 mt-5" style={{ marginLeft: "500px",width:'200px',backgroundColor:'green' }}>
//               Download Certificate
//             </button>
//           </Link>
//         ) : (
//           submitted && percentage <= 40 && (
//             <Link to="./Memo">
//               <button className="btn btn-success text-white p-2 mt-5" style={{ marginLeft: "500px" ,width:'200px', backgroundColor:'green' }}>
//                 Download Memo
//               </button>
//             </Link>
//           )
//         )}
//       </div>
//       </div>
//     </>
//   );
// }

// export default Quiz;
























import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft , faArrowRight} from '@fortawesome/free-solid-svg-icons';




    function Quiz({ currentUser }) {


  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [customerid, setCustomerid] = useState();
  const [coursename, setCourse] = useState("Css");
  const [timeLeft, setTimeLeft] = useState(480); // 8 minutes in seconds
  const [submitted, setSubmitted] = useState(false); // Track if test is submitted
  const [percentage, setPercentage] = useState(0); 
  const [selectedOptionId, setSelectedOptionId] = useState(null);



  const [userDetails, setUserDetails] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  

  const questions = [ 

    {
            text: "1. What does CSS stand for?",
            options: [
              { id: 0, text: "a. Computer Style Sheets", isCorrect: false },
              { id: 1, text: "b. Cascading Style Sheets", isCorrect: true },
              { id: 2, text: "c. Creative Style Sheets", isCorrect: false },
              { id: 3, text: "d. Colorful Style Sheets", isCorrect: false },
            ],
          },
          {
            text: "2. How many types of Styling are there in CSS?",
            options: [
              { id: 0, text: "a. inline styling", isCorrect: false },
              { id: 1, text: "b. external styling", isCorrect: false },
              { id: 2, text: "c. internal styling", isCorrect: false },
              { id: 3, text: "d. inline, external, internal Styling", isCorrect: true },
            ],
          },
          {
            text: "3. Which CSS property controls the text size?",
            options: [
              { id: 0, text: "a. font-size", isCorrect: true },
              { id: 1, text: "b. font-style", isCorrect: false },
              { id: 2, text: "c. text-style", isCorrect: false },
              { id: 3, text: "d. text-size", isCorrect: false },
            ],
          },
          {
            text: "4. Which HTML attribute is used to define inline styles?",
            options: [
              { id: 0, text: "a. Class", isCorrect: false },
              { id: 1, text: "b. style", isCorrect: true },
              { id: 2, text: "c. font", isCorrect: false },
              { id: 3, text: "d. styles", isCorrect: false },
            ],
          },
          {
            text: "5. Which is the Correct CSS Syntax?",
            options: [
              { id: 0, text: "a. {body:color=black;}", isCorrect: false },
              { id: 1, text: "b. body{color:black;}", isCorrect: true },
              { id: 2, text: "c. {body;color=black;}", isCorrect: false },
              { id: 3, text: "d. body:color=black;", isCorrect: false },
            ],
          },
          {
            text: "6. How do you select an element with id 'demo'?",
            options: [
              { id: 0, text: "a. *demo", isCorrect: false },
              { id: 1, text: "b. demo", isCorrect: false },
              { id: 2, text: "c. .demo", isCorrect: false},
              { id: 3, text: "d. #demo", isCorrect: true },
            ],
          },
          {
            text: "7. How do you select the elements with class name 'test'?",
            options: [
              { id: 0, text: "a. .test", isCorrect: true },
              { id: 1, text: "b. test", isCorrect: false },
              { id: 2, text: "c. #test", isCorrect: false },
              { id: 3, text: "d. *test", isCorrect: false },
            ],
          },
          {
            text: "8. Where is an HTML document is the correct place to refer to an external style sheet?",
            options: [
              { id: 0, text: "a. In the <body> section", isCorrect: false },
              { id: 1, text: "b. At the starting of the document", isCorrect: false },
              { id: 2, text: "c. In the <head> section", isCorrect: true },
              { id: 3, text: "d. At the end of the document", isCorrect: false },
            ],
          },
          {
            text: "9. What does CSS stand for?",
            options: [
              { id: 0, text: "a. Computer Style Sheets", isCorrect: false },
              { id: 1, text: "b. Cascading Style Sheets", isCorrect: true },
              { id: 2, text: "c. Creative Style Sheets", isCorrect: false },
              { id: 3, text: "d. Colorful Style Sheets", isCorrect: false },
            ],
          },
          {
            text: "10. How many types of Styling are there in CSS?",
            options: [
              { id: 0, text: "a. inline styling", isCorrect: false },
              { id: 1, text: "b. external styling", isCorrect: false },
              { id: 2, text: "c. internal styling", isCorrect: false },
              { id: 3, text: "d. inline, external, internal Styling", isCorrect: true },
            ],
          },
          {
            text: "11. Which CSS property controls the text size?",
            options: [
              { id: 0, text: "a. font-size", isCorrect: true },
              { id: 1, text: "b. font-style", isCorrect: false },
              { id: 2, text: "c. text-style", isCorrect: false },
              { id: 3, text: "d. text-size", isCorrect: false },
            ],
          },
          {
            text: "12. Which HTML attribute is used to define inline styles?",
            options: [
              { id: 0, text: "a. Class", isCorrect: false },
              { id: 1, text: "b. style", isCorrect: true },
              { id: 2, text: "c. font", isCorrect: false },
              { id: 3, text: "d. styles", isCorrect: false },
            ],
          },
          {
            text: "13. Which is the Correct CSS Syntax?",
            options: [
              { id: 0, text: "a. {body:color=black;}", isCorrect: false },
              { id: 1, text: "b. body{color:black;}", isCorrect: true },
              { id: 2, text: "c. {body;color=black;}", isCorrect: false },
              { id: 3, text: "d. body:color=black;", isCorrect: false },
            ],
          },
          {
            text: "14. How do you select an element with id 'demo'?",
            options: [
              { id: 0, text: "a. *demo", isCorrect: false },
              { id: 1, text: "b. demo", isCorrect: false },
              { id: 2, text: "c. .demo", isCorrect: false},
              { id: 3, text: "d. #demo", isCorrect: true },
            ],
          },
          {
            text: "15. How do you select the elements with class name 'test'?",
            options: [
              { id: 0, text: "a. .test", isCorrect: true },
              { id: 1, text: "b. test", isCorrect: false },
              { id: 2, text: "c. #test", isCorrect: false },
              { id: 3, text: "d. *test", isCorrect: false },
            ],
          },
          {
            text: "16. Where is an HTML document is the correct place to refer to an external style sheet?",
            options: [
              { id: 0, text: "a. In the <body> section", isCorrect: false },
              { id: 1, text: "b. At the starting of the document", isCorrect: false },
              { id: 2, text: "c. In the <head> section", isCorrect: true },
              { id: 3, text: "d. At the end of the document", isCorrect: false },
            ],
          },
          {
            text: "17. What does CSS stand for?",
            options: [
              { id: 0, text: "a. Computer Style Sheets", isCorrect: false },
              { id: 1, text: "b. Cascading Style Sheets", isCorrect: true },
              { id: 2, text: "c. Creative Style Sheets", isCorrect: false },
              { id: 3, text: "d. Colorful Style Sheets", isCorrect: false },
            ],
          },
          {
            text: "18. How many types of Styling are there in CSS?",
            options: [
              { id: 0, text: "a. inline styling", isCorrect: false },
              { id: 1, text: "b. external styling", isCorrect: false },
              { id: 2, text: "c. internal styling", isCorrect: false },
              { id: 3, text: "d. inline, external, internal Styling", isCorrect: true },
            ],
          },
          {
            text: "19. Which CSS property controls the text size?",
            options: [
              { id: 0, text: "a. font-size", isCorrect: true },
              { id: 1, text: "b. font-style", isCorrect: false },
              { id: 2, text: "c. text-style", isCorrect: false },
              { id: 3, text: "d. text-size", isCorrect: false },
            ],
          },
          {
            text: "20. Which HTML attribute is used to define inline styles?",
            options: [
              { id: 0, text: "a. Class", isCorrect: false },
              { id: 1, text: "b. style", isCorrect: true },
              { id: 2, text: "c. font", isCorrect: false },
              { id: 3, text: "d. styles", isCorrect: false },
            ],
          },
          {
            text: "21. Which is the Correct CSS Syntax?",
            options: [
              { id: 0, text: "a. {body:color=black;}", isCorrect: false },
              { id: 1, text: "b. body{color:black;}", isCorrect: true },
              { id: 2, text: "c. {body;color=black;}", isCorrect: false },
              { id: 3, text: "d. body:color=black;", isCorrect: false },
            ],
          },
          {
            text: "22. How do you select an element with id 'demo'?",
            options: [
              { id: 0, text: "a. *demo", isCorrect: false },
              { id: 1, text: "b. demo", isCorrect: false },
              { id: 2, text: "c. .demo", isCorrect: false},
              { id: 3, text: "d. #demo", isCorrect: true },
            ],
          },
          {
            text: "23. How do you select the elements with class name 'test'?",
            options: [
              { id: 0, text: "a. .test", isCorrect: true },
              { id: 1, text: "b. test", isCorrect: false },
              { id: 2, text: "c. #test", isCorrect: false },
              { id: 3, text: "d. *test", isCorrect: false },
            ],
          },
          {
            text: "24. Where is an HTML document is the correct place to refer to an external style sheet?",
            options: [
              { id: 0, text: "a. In the <body> section", isCorrect: false },
              { id: 1, text: "b. At the starting of the document", isCorrect: false },
              { id: 2, text: "c. In the <head> section", isCorrect: true },
              { id: 3, text: "d. At the end of the document", isCorrect: false },
            ],
          },

   ];




   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
    const timer = setTimeout(() => {
      // Automatically submit when time runs out
      if (!submitted) { // Check if test is not already submitted
        submit();
      }
    }, timeLeft * 1000); // Convert timeLeft to milliseconds

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, [timeLeft, submitted]);

  const startTimer = () => {
    setTimeLeft(480); // Reset the timer
  };

  const updateTimer = () => {
    // Update the timer every second
    if (timeLeft > 0) {
      setTimeLeft((prevTime) => prevTime - 1);
    }
  };

  useEffect(() => {
    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval); // Clean up interval on component unmount
  }, []);

  const optionClicked = (isCorrect, optionId) => {
    console.log("Option clicked:", isCorrect, optionId); // Log the clicked option
    if (isCorrect) {
      setScore(score + 1);
    } else {
      // if (currentQuestion + 1 < questions.length) {
      //   setCurrentQuestion(currentQuestion + 1);
      // } else {
      //   setShowResults(true);
      // }
    }
    if (optionId !== null) {
      setSelectedOptionId(optionId); // Update selected option id only if an option is clicked
      console.log("Selected option id:", optionId); // Log the selected option id
    }
  };



  const retake = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    startTimer(); // Restart the timer when retaking the quiz
  };

  const submit = () => {
    const shouldSubmit = window.confirm("Are you sure you want to submit?");
    if (shouldSubmit) {
      const percentage = (score / questions.length) * 100;
      setPercentage(percentage); // Update the state with calculated percentage



      const data = {
        userId: userDetails.id,
        name: `${userDetails.firstName} ${userDetails.lastName}`, // Corrected to concatenate first and last name
        course: userDetails.courses ? userDetails.courses.join(', ') : '',
        percentage: percentage.toFixed(2)
      };



       

      axios.post('http://192.168.138.130:8080/api/test/create', data)
        .then(response => {
          console.log("Data successfully submitted:", response.data);
        })
        .catch(error => {
          console.error("Error submitting data:", error);
        });

      const resultMessage = `You scored ${score} out of ${questions.length}. (${percentage.toFixed(2)}%)`;
      document.getElementById("results").innerHTML = resultMessage;
      setSubmitted(true);
    }
  };
  
  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOptionId(null); // Reset selected option id when moving to the next question
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion - 1 >= 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      alert("There is no previous question");
    }
  };

    function background(e) {
    e.target.style.background = "green";
    }
    

  return (
    <>







<div className="header2">
        <label>
          <h1>My Online Tutor</h1>
        </label>

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



      </div>

      <div className="currentdate">
            <h3> {currentTime}</h3>
          </div>






    <div>
      <div className="text-center bg-body-tertiary" style={{ fontFamily: "Verdana" }}>
        <h1 className="fw-bold">HTML Quiz</h1>
        {showResults ? (
          <div className="final-results">
            <h1>Final Results</h1>
          </div>
        ) : (
          <div className="question-card mt-2" style={{fontFamily:"sans-serif",marginLeft:'30px'}}>
            <h2>
              Question: {currentQuestion + 1} out of {questions.length}
            </h2>
            <div className="p-2">
              <p style={{ paddingLeft: "900px",fontFamily:"verdana",fontWeight:"bolder" }}>Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}</p>
            </div>
            <div>
            {questions[currentQuestion] && ( // Check if questions[currentQuestion] is defined
              <>
                <h3 className="question-text">{questions[currentQuestion].text}</h3>
                <ul className="mt-2">
                  {questions[currentQuestion].options.map((option) => (
                    <li key={option.id} style={{ listStyleType: "none" }}>
                    <button
                      className="btn btn-secondary text-white mt-3 p-2"
                      style={{ background: selectedOptionId === option.id ? 'green' : 'gray', width:'400px',backgroundColor:'gray' }}
                      onClick={() => optionClicked(option.isCorrect, option.id)}
                    >
                      {option.text}
                    </button>
                  </li>
                  ))}
                </ul>
              </>
            )}
            </div>
          </div>
        )}
        {!showResults && (
          <>
            <button className="btn btn-outline-secondary mt-3 me-5 hover-effect" type="button" style={{width:'150px',marginLeft:'30px', backgroundColor:'#0F969C',}} onClick={prevQuestion} >
            <FontAwesomeIcon icon={faArrowLeft} /> previous
            {/* {/ <span className="text-dark mt-1">previous</span> /} */}
            </button>
            <button className="btn btn-outline-secondary mt-3 ms-3 hover-effect" type="button" style={{width:'100px',backgroundColor:'#6DA5C0' }} onClick={nextQuestion}>
            Next <FontAwesomeIcon icon={faArrowRight} /> 
              {/* {/ <span className="text-dark mt-1">Next</span> /} */}
              {/* {/ <img src="https://www.kindpng.com/picc/m/256-2568531_arrow-vector-png-right-arrow-icon-svg-transparent.png" className="img-fluid rounded ms-1" style={{width:"18px",height:"18px"}}/> /} */}
            </button>
          </>
          
        )}
      </div>
      <div className="bg-body-tertiary">
        <button className="btn btn-success text-white p-2 mt-5" style={{ marginLeft: "1000px", width:'100px',backgroundColor:'green' }} onClick={submit}>
          Submit
        </button>
      </div>

      <div className="p-2">
        <p id="results" className="fw-bold fs-5" style={{ paddingLeft: "450px" }}></p>
        {submitted && percentage > 40 ? (
          <Link to="./Certificate">
            <button className="btn btn-success text-white p-2 mt-5" style={{ marginLeft: "500px",width:'200px',backgroundColor:'green' }}>
              Download Certificate
            </button>
          </Link>
        ) : (
          submitted && percentage <= 40 && (
            <Link to="./Memo">
              <button className="btn btn-success text-white p-2 mt-5" style={{ marginLeft: "500px" ,width:'200px', backgroundColor:'green' }}>
                Download Memo
              </button>
            </Link>
          )
        )}
      </div>
      </div>
    </>
  );
}

export default Quiz;

