import React, { useState, useEffect } from 'react';
import AdminDashboard from './AdminDashboard';

function TestResult() {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    fetchTestData();
  }, []);

  const fetchTestData = async () => {
    try {
      const response = await fetch('http://192.168.138.130:8080/api/test/getAll'); // Assuming this is the endpoint to fetch test data
      const data = await response.json();
      setTestData(data);
    } catch (error) {
      console.error('Error fetching test data:', error);
    }
  };

  return (

    <>
    <AdminDashboard/>
    <div style={{width:'900px',marginLeft:'30%',marginTop:'-48%'}}>
      <h2>Test Data</h2>
      <table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>User ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {testData.map((test) => (
            <tr key={test.id}>
              {/* <td>{test.id}</td> */}
              <td>{test.userId}</td>
              <td>{test.name}</td>
              <td>{test.course}</td>
              <td>{test.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default TestResult;
