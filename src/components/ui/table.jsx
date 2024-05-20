import { useEffect, useState } from "react";
import { API_URL } from "../../api";
import axios from "axios";

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

  fetchEvents();
  
  return (
    <div className="overflow-x-auto">
      <table className="table ">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Event Name</th>
            <th>Date From</th>
            <th>Date To</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {events.map((event, idx) => (
            <tr key={`event_${event.code}`}>
              <th>{idx + 1}</th>
              <td>{event.label}</td>
              <td>{event.activity_start_date}</td>
              <td>{event.activity_end_date}</td>
              <td>{event.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
