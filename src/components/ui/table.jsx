// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import { useEffect } from "react";
import { API_URL } from "../../api";
import axios from "axios";
import "./Table.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";



function Table() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(API_URL + "/events", {
        headers: { "Access-Control-Allow-Origin": "*" }
      });
      const sortedEvents = response.data.sort(
        (a, b) => new Date(a.activity_start_date) - new Date(b.activity_start_date)
      );
      setEvents(sortedEvents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);


  const GotoTapID = (activity_id) => {
  window.open(`/tapid/${activity_id}`, "_blank");
  };
  
  const getReport = (activity_id) => {
    window.open(`/report/${activity_id}`, "_blank")
  };

  const handleEdit = (activity_id) => {
    navigate(`/edit/${activity_id}`);
  };



  const handleDelete = async (activity_id) => {
    try {
      await axios.delete(`${API_URL}/events/${activity_id}`, {
        headers: { "Access-Control-Allow-Origin": "*" }
      });
      const updatedEvents = events.filter((event) => event.activity_id !== activity_id);
      setEvents(updatedEvents);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
    <h1 className="font-bold text-5xl text-center">List of Events</h1>
    <br></br>
    <br></br>
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date From</th>
            <th>Date To</th>
            <th>Location</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={`event_${event.activity_id}`}>
              
              <td>{event.label}</td>
              <td>{event.activity_start_date}</td>
              <td>{event.activity_end_date}</td>
              <td>{event.location}</td>
              <td>{event.department}</td>
              <td>
                <button onClick={() => handleDelete(event.activity_id)} className="button-delete">
                  Delete
                </button>
              </td>
              <td>
                <button onClick={() => handleEdit(event.activity_id)} className="button-edit">
                  Option
                </button>
              </td>
              <td>
                <button onClick={() => getReport(event.activity_id)} className="button-edit">
                  Generate List
                </button>
              </td>
              <td>
                <button onClick={() => GotoTapID(event.activity_id)} className="button-option">
                  Run
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
    </div>
  );
}

export default Table;
