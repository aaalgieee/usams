import { useEffect, useState } from "react";
import { API_URL } from "../../api";
import axios from "axios";
import "./Table.css"; // Import the CSS file

function Table() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(API_URL + "/events", { headers: { "Access-Control-Allow-Origin": "*" } });
      setEvents(response.data);
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

  const handleDelete = (eventId) => {
    console.log("Delete event with id:", eventId);
    // Implement delete functionality here
  };

  const handleOption = (eventId) => {
    console.log("Option for event with id:", eventId);
    // Implement option functionality here
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Event Name</th>
            <th>Date From</th>
            <th>Date To</th>
            <th>Location</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, idx) => (
            <tr key={`event_${event.code}`}>
              <th>{idx + 1}</th>
              <td>{event.label}</td>
              <td>{event.activity_start_date}</td>
              <td>{event.activity_end_date}</td>
              <td>{event.location}</td>
              <td>
                <button 
                  onClick={() => handleEdit(event.code)} 
                  className="button-edit"
                >
                  Edit
                </button>
              </td>
              <td>
                <button 
                  onClick={() => handleDelete(event.code)} 
                  className="button-delete"
                >
                  Delete
                </button>
              </td>
              <td>
                <button 
                  onClick={() => handleOption(event.code)} 
                  className="button-option"
                >
                  Option
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
