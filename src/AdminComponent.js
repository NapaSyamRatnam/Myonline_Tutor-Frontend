// AdminComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminComponent() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://192.168.138.130:8080/api/help/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerQuestion = async (questionId, answer) => {
    try {
      await axios.post(`http://192.168.138.130:8080/api/help/questions/${questionId}/answer`, {
        answer: answer,
      });
      // Optionally update the UI to reflect that the question has been answered
    } catch (error) {
      console.error('Error answering question:', error);
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <h3>{question.title}</h3>
            {question.answer ? (
              <p><strong>Answer:</strong> {question.answer}</p>
            ) : (
              <div>
                <textarea rows="4" cols="50" placeholder="Type your answer here..." />
                <button onClick={() => handleAnswerQuestion(question.id, 'Your answer here')}>Submit Answer</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminComponent;
