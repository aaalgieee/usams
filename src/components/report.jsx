// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../api';
import { useParams } from 'react-router-dom';

const AttendanceList = () => {
  const { activity_id } = useParams();
  const [attendance, setAttendance] = useState([]);
  const [filteredAttendance, setFilteredAttendance] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get(API_URL + '/reports/' + activity_id);
        setAttendance(response.data);
        setFilteredAttendance(response.data); // Initialize filtered attendance

        // Extract unique dates
        const uniqueDates = [...new Set(response.data.map(record => record.datetime_created.split('T')[0]))];
        setDates(uniqueDates);
      } catch (error) {
        console.error('Error fetching attendance:', error);
      }
    };

    fetchAttendance();
  }, [activity_id]);

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);

    if (date === "") {
      setFilteredAttendance(attendance); // Show all attendance records if no date is selected
    } else {
      const filtered = attendance.filter(record => record.datetime_created.startsWith(date));
      setFilteredAttendance(filtered);
    }
  };

  return (
    <div>
      <br />
      {attendance.length > 0 && (
        <h1 className="text-center text-3xl font-bold">
          Attendance List of {attendance[0].activity_label}
        </h1>
      )}
      
      <br /><br />

      <div className="mb-4 text-center">
        <label htmlFor="filter-date" className="block font-medium mb-2">Filter by Date:</label>
        <select
          id="filter-date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border rounded-md py-2 px-3"
        >
          <option value="">All Dates</option>
          {dates.map(date => (
            <option key={date} value={date}>{date}</option>
          ))}
        </select>
      </div>

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
            {filteredAttendance.map(record => (
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
