import React, { useState, useEffect } from "react";

function UsersCount() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetch("http://192.168.138.130:8080/api/users/users/count")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user count");
        }
        return response.json();
      })
      .then((data) => {
        setUserCount(data);
      })
      .catch((error) => {
        console.error("Error fetching user count:", error);
      });
  }, []);

  return (
    <div>
      <p>User Count: {userCount}</p>
    </div>
  );
}

export default UsersCount;
