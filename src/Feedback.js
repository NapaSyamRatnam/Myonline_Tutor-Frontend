// Feedback.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import './Feedback.css';

function Feedback() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    // Fetch feedback data
    axios.get("http://192.168.138.130:8080/api/admin/feedback")
      .then(response => {
        setFeedbackData(response.data);
      })
      .catch(error => {
        console.error("Error fetching feedback:", error);
      });
  }, []);

  return (
    <>
    <header><h2>My Online Tutor</h2></header>
    <div className="feedback-page">
      <h1>Feedback</h1>

      <table className="feedback-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Course</th>
            <th>Reports</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map(feedback => (
            <tr key={feedback.id}>
              <td>{feedback.userId}</td>
              <td>{feedback.username}</td>
              <td>{feedback.course}</td>
              <td>{feedback.reports}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Feedback;
