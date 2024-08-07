import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminDashboard from "./AdminDashboard";

function Announcement() {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [recipientType, setRecipientType] = useState("");
  const [recipientId, setRecipientId] = useState("");
  const [recipientIdError, setRecipientIdError] = useState("");
  const [userIds, setUserIds] = useState([]);
  const [tutorIds, setTutorIds] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    fetchUserIds();
    fetchTutorIds();
  }, []);

  const fetchUserIds = async () => {
    try {
      const response = await axios.get("http://192.168.138.130:8080/api/users/users/ids");
      setUserIds(response.data);
    } catch (error) {
      console.error("Error fetching user IDs:", error);
    }
  };

  const fetchTutorIds = async () => {
    try {
      const response = await axios.get("http://192.168.138.130:8080/api-v1/tutors/ids");
      setTutorIds(response.data);
    } catch (error) {
      console.error("Error fetching tutor IDs:", error);
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (!title.trim()) {
      setTitleError("Title is required");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (!message.trim()) {
      setMessageError("Message is required");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (!recipientType) {
      setRecipientIdError("Recipient Type is required");
      isValid = false;
    } else {
      setRecipientIdError("");
    }

    if (!recipientId) {
      setRecipientIdError("Recipient ID is required");
      isValid = false;
    } else {
      setRecipientIdError("");
    }

    return isValid;
  };

  const handleSendAnnouncement = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Clear user or tutor state based on recipient type
    let users = "";
    let tutors = "";

    if (recipientType === "user") {
      users = recipientId;
      tutors = "";
    } else if (recipientType === "tutor") {
      users = "";
      tutors = recipientId;
    }

    if (validateForm()) {
      try {
        const response = await axios.post("http://192.168.138.130:8080/api/admin/add-announcement", {
          title,
          message,
          recipientType,
          recipientId,
          userId: users,
          tutorId: tutors
        });
        console.log("Announcement sent:", response.data);
        setTitle("");
        setMessage("");
        setRecipientType("");
        setRecipientId("");
        setFormSubmitted(false);
      } catch (error) {
        console.error("Error sending announcement:", error);
      }
    }
  };

  return (
    <>
      <AdminDashboard />
      <div id="announcement" className="add-announcement-page" style={{ marginTop: "-48%", marginLeft: "30%" }}>
        <h1>Add New Announcement</h1>
        <form className="formAnnouncement" onSubmit={handleSendAnnouncement} style={{marginLeft:'10%'}}>
          <label className="Boxa">Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          {formSubmitted && !title && <span className="error">Title is required</span>}
          
          <label className="Boxa">Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          {formSubmitted && !message && <span className="error">Message is required</span>}

          <div className="dropdown">
            <label>Select Recipient Type:</label>
            <select value={recipientType} onChange={(e) => setRecipientType(e.target.value)}>
              <option value="">Select Type</option>
              <option value="user">User</option>
              <option value="tutor">Tutor</option>
            </select>
            {formSubmitted && !recipientType && <span className="error">Recipient Type is required</span>}
          </div>

          {recipientType === "user" && (
            <div className="dropdown">
              <label>Select User ID:</label>
              <select value={recipientId} onChange={(e) => setRecipientId(e.target.value)}>
                <option value="">Select ID</option>
                {userIds.map(id => (
                  <option key={id} value={id}>{id}</option>
                ))}
              </select>
              {formSubmitted && !recipientId && <span className="error">Recipient ID is required</span>}
            </div>
          )}

          {recipientType === "tutor" && (
            <div className="dropdown">
              <label>Select Tutor ID:</label>
              <select value={recipientId} onChange={(e) => setRecipientId(e.target.value)}>
                <option value="">Select ID</option>
                {tutorIds.map(id => (
                  <option key={id} value={id}>{id}</option>
                ))}
              </select>
              {formSubmitted && !recipientId && <span className="error">Recipient ID is required</span>}
            </div>
          )}

          <button className=" btn btn-primary" style={{ width: '6cm', marginLeft: "6cm" }}>Send Announcement</button>
        </form>
      </div>
    </>
  );
}

export default Announcement;
