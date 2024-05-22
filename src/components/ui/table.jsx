import React, { useState } from "react";
import { useEffect } from "react";
import { API_URL } from "../../api";
import axios from "axios";
import "./Table.css"; // Import the CSS file
import TapID from "../TapID";

function Table() {
  const [events, setEvents] = useState([]);
  const [selectedActivityId, setSelectedActivityId] = useState(null);

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

  const handleEdit = (eventId) => {
    console.log("Edit event with id:", eventId);
    // Implement edit functionality here
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

  const gotoTapID = (activity_id) => {
    setSelectedActivityId(activity_id);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Activity ID</th>
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
              <th>{event.activity_id}</th>
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
                <button onClick={() => handleEdit(event.code)} className="button-edit">
                  Option
                </button>
              </td>
              <td>
                <button onClick={() => gotoTapID(event.activity_id)} className="button-option">
                  Run
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedActivityId && <TapID activity_id={selectedActivityId} />} {/* Pass activity_id as prop */}
    </div>
  );
}

export default Table;
