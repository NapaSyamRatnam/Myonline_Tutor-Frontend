// import React, { useState, useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// function PieChartPage() {
//   const [userCount, setUserCount] = useState(0);
//   const [tutorCount, setTutorCount] = useState(0);
//   const chartRef = useRef(null);

//   useEffect(() => {
//     // Fetch user count
//     fetch("http://localhost:8080/api/users/users/count")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch user count");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setUserCount(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching user count:", error);
//       });

//     // Fetch tutor count
//     fetch("http://localhost:8080/api-v1/tutors/count")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch tutor count");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setTutorCount(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching tutor count:", error);
//       });
//   }, []);

//   useEffect(() => {
//     if (chartRef.current !== null) {
//       // Destroy existing chart if it exists
//       chartRef.current.destroy();
//     }
//     // Render pie chart
//     renderPieChart();
//   }, [userCount, tutorCount]);

//   const renderPieChart = () => {
//     const ctx = document.getElementById("pie-chart").getContext("2d");

//     chartRef.current = new Chart(ctx, {
//       type: "pie",
//       data: {
//         labels: ["Users", "Tutors"],
//         datasets: [
//           {
//             label: "Count",
//             data: [userCount, tutorCount],
//             backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
//             borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
//             borderWidth: 1,
//           },
//         ],
//       },
//     });
//   };

//   return (
//     <div className="pie-chart-container" style={{width: "28%"}}>
//   <h2 style={{marginLeft: "24%", fontSize: "2rem"}}>Pie Chart</h2>
//   <canvas id="pie-chart" ></canvas>
// </div>

//   );
// }

// export default PieChartPage;




import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function PieChartPage() {
  const [userCount, setUserCount] = useState(0);
  const [tutorCount, setTutorCount] = useState(0);
  const chartRef = useRef(null);

  useEffect(() => {
    // Fetch user count
    fetch("http://3.7.14.21:8080/api/users/users/count")
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

    // Fetch tutor count
    fetch("http://3.7.14.21:8080/api-v1/tutors/count")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch tutor count");
        }
        return response.json();
      })
      .then((data) => {
        setTutorCount(data);
      })
      .catch((error) => {
        console.error("Error fetching tutor count:", error);
      });
  }, []);

  useEffect(() => {
    if (chartRef.current !== null) {
      // Destroy existing chart if it exists
      chartRef.current.destroy();
    }
    // Render pie chart
    renderPieChart();
  }, [userCount, tutorCount]);

  const renderPieChart = () => {
    const ctx = document.getElementById("pie-chart").getContext("2d");

    chartRef.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Users", "Tutors"],
        datasets: [
          {
            label: "Count",
            data: [userCount, tutorCount],
            backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      },
    });
  };

  return (
    <>
            <h2 className="card-title" style={{marginLeft: "8%", fontSize: "2rem"}}>Pie Chart</h2>
    <div className="card" style={{ width: "300px", margin: "20px" }}>
      <div className="card-body">
        <div className="pie-chart-container">
          <canvas id="pie-chart" style={{ width: "100%", height: "50v" }}></canvas>
        </div>
      </div>
    </div>
    </>

  );
}

export default PieChartPage;
