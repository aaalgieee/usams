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
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Attendance List</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Attendance ID</th>
            <th className="px-4 py-2">Activity Name</th>
            <th className="px-4 py-2">Student Number</th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Date Time Created</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map(record => (
            <tr key={record.attendance_id}>
              <td className="border px-4 py-2">{record.attendance_id}</td>
              <td className="border px-4 py-2">{record.activity_label}</td>
              <td className="border px-4 py-2">{record.student_number}</td>
              <td className="border px-4 py-2">{record.firstname}</td>
              <td className="border px-4 py-2">{record.lastname}</td>
              <td className="border px-4 py-2">{record.datetime_created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceList;
