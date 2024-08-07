// TutorCartPage.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import './TutorCartPage.css'; 

function TutorCartPage() {
  const [tutorProfiles, setTutorProfiles] = useState([]);

  useEffect(() => {
    // Fetch tutor profiles from the backend API
    axios.get("http://192.168.138.130:8080/api/tutor-profiles")
      .then(response => {
        setTutorProfiles(response.data);
      })
      .catch(error => {
        console.error("Error fetching tutor profiles:", error);
      });
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div>
      <h1>Tutor Cart</h1>

      <div>
        {tutorProfiles.length > 0 ? (
          tutorProfiles.map(profile => (
            <div key={profile.id} className="tutor-profile">
              <h2>{profile.name}</h2>
              <p>{profile.subject}</p>
              <p>{profile.description}</p>
              <p>Price: ${profile.price}</p>
              <button>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No tutor profiles available.</p>
        )}
      </div>

      <div className="cart">
        <h2>Shopping Cart</h2>
        {/* Add logic for displaying items in the shopping cart */}
      </div>
    </div>
  );
}

export default TutorCartPage;
