// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { API_URL } from '../api';
import { useParams } from 'react-router-dom';

const AttendanceList = () => {
  const {activity_id} = useParams();
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get(API_URL + '/reports/' + activity_id);
        setAttendance(response.data);
      } catch (error) {
        console.error('Error fetching attendance:', error);
      }
    };

    fetchAttendance();
  }, []);

  return (
    <div>
    <br></br>
    {attendance.map(record => (
      <h1 key={record.attendance_id} className='text-center text-3xl font-bold'>Attendance List of {record.activity_label}</h1>))}
      
      <br></br>
      <br></br>
    <div className="overflow-x-auto">
  <table className="table table-xs text-center">
    <thead>
      <tr>
        <th>Student Number</th> 
        <th>Last Name</th> 
        <th>First Name</th> 
        <th>Date & Time</th> 
      </tr>
    </thead> 
    <tbody>
    {attendance.map(record => (
            <tr key={record.attendance_id}>
              <td className="border px-4 py-2">{record.student_number}</td>
              <td className="border px-4 py-2">{record.lastname}</td>
              <td className="border px-4 py-2">{record.firstname}</td>
              
              
              <td className="border px-4 py-2">{record.datetime_created}</td>
            </tr>
          ))}
    </tbody> 
  </table>
  </div>
</div>
);
}

export default AttendanceList;


