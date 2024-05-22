// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import logo from './img/logo.png';
import { API_URL } from "../api";



const TapID = () => {
  const {activity_id} = useParams();
  const [studentNumber, setStudentNumber] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/attendance`, {
        attendance_id: 0,
        student_number: studentNumber,
        activity_id: activity_id, 
      });

      setMessage(response.data.message);
      setError(null);
      setStudentNumber('')
    } catch (err) {
      setError(err.response ? err.response.data : 'Error adding attendance');
      setMessage(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Authenticator" className="mb-4 w-25 h-28" />
          <h2 className="text-2xl font-semibold mb-2">Authenticator</h2>
          <p className="text-gray-600 text-center mb-6">
            Enter your Student Number for Event Attendance.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <label htmlFor="tapid" className="block text-sm font-medium text-gray-700"></label>
            <input
              type="text"
              id="tapid"
              name="tapid"
              value={studentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Student Number"
              required
            />
          </div>
          <div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {message && <p className="text-green-500 text-sm">{message}</p>}
          </div>
          <div>
            <button type="submit" className="text-white w-full py-2 px-4 bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TapID;
