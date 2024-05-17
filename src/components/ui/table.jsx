import { useEffect, useState } from "react";
import { API_URL } from "../../api";

function Table() {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    fetch(API_URL + "/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);
  
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
            <th>Department</th>
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
              <td>Unknown</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
