

import React from "react";
import { Link } from 'react-router-dom';
import './Professional.css';

function Professional() {
  

  const fieldsData = [
    {
      title: "Music",
      fees: "₹5000",
      description: "Learn to play musical instruments and understand music theory.",
      image: "https://img.freepik.com/free-photo/latin-girl-with-headphones-listening-her-online-music-lessons-artistic-kid-playing-acoustic-guitar-learning-chords_662251-1427.jpg?w=900&t=st=1705552880~exp=1705553480~hmac=f24cf9f2542bd1b9189024e995ef8a8eee0ee7c68cbd7d060c134abfbc2c4ac8",
    },
    {
      title: "Dance",
      fees: "₹8000",
      description: "Explore various dance forms and improve your dance techniques.",
      image: "https://img.freepik.com/free-photo/people-taking-part-dance-therapy-class_23-2149346545.jpg?w=900&t=st=1705473621~exp=1705474221~hmac=357105a8827b076b0582b54488d3e154053ea49f1306b31cfda503ab154a4ee3",
    },
    {
      title: "Cooking",
      fees: "₹6000",
      description: "Master the art of cooking with professional chefs guiding you.",
      image: "https://img.freepik.com/free-photo/woman-chef-cooking-vegetables-pan_1303-22293.jpg?w=900&t=st=1705473814~exp=1705474414~hmac=3595b242b71760f01c4a9d0c35932634553fc084e3a62df51c62ae581afd49e7",
    },
   
    {
      title: "Yoga",
      fees: "₹7000",
      description: "Practice yoga and enhance your physical and mental well-being.",
      image: "https://img.freepik.com/free-photo/group-people-sitting-lotus-position_1170-220.jpg?w=900&t=st=1705987010~exp=1705987610~hmac=6bcbe9377076d287c6e28fe7209b488a6993a2a290414a83f9cae8cb7a7d7401",
    },
    {
      title: "Fitness",
      fees: "₹5000",
      description: "Achieve your fitness goals with personalized workout sessions.",
      image: "https://img.freepik.com/free-photo/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-his-upper-body-concept-healthy-lifestyle-sport-fitness-bodybuilding-wellbeing_155003-27879.jpg?w=900&t=st=1705987073~exp=1705987673~hmac=1248485bfa5afdd0918d07e933674ee4eebe2ce7f827888bda6f98bbba9a69a1",
    },
    {
      title: "Singing",
      fees: "₹5000",
      description: "Improve your singing skills with professional vocal training.",
      image: "https://img.freepik.com/premium-photo/asian-male-singer-recording-songs-by-using-studio-microphone-pop-shield-mic_43263-3106.jpg?w=900",
    },
    // Add more fields as needed
  ];

  return (
    <>
      <div className="header1">
        <label><h1>My Online Tutor</h1></label>
      </div>
    
      <div className="main-content">
        <h1>Professional Courses </h1>
        <div className="fields-container">
          {fieldsData.map((field, index) => (
            <div key={index} className="field-card">
              <img
                src={field.image}
                alt={field.title}
                className="field-image"
              />
              <div className="field-details">
                <h2>{field.title}</h2>
                <p>Fees: {field.fees}</p>
                <p>{field.description}</p>
                <Link to='/Enroll' className="enroll-button">Enroll</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    
      <div className="footer1"><p style={{color:'white'}}>&copy; 2024 My Online Tutor. All rights reserved.</p></div>
    </>
  );
}

export default Professional;
