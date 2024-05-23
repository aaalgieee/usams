import { useState, useEffect } from "react";
import Navbar from "./ui/navbar";
import { API_URL } from "../api";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const { activity_id } = useParams(); // Get activity_id from the URL parameters

  // State variables to store user input
  const [eventName, setEventName] = useState("");
  const [department, setDepartment] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [error, setError] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");

  useEffect(() => {
    // Fetch the existing event data to pre-fill the form fields
    axios.get(`${API_URL}/events/${activity_id}`)
      .then(response => {
        const event = response.data;
        setEventName(event.label);
        setDepartment(event.department);
        setDateFrom(event.activity_start_date);
        setDateTo(event.activity_end_date);
        setSelectedLocation(event.location);
      })
      .catch(error => {
        console.error("Error fetching event data:", error);
        setError("An error occurred while fetching event data.");
      });
  }, [activity_id]);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!eventName || !dateFrom || !dateTo) {
      setError("All fields are required.");
      return;
    }

    // Send the data to the server
    axios.patch(`${API_URL}/events/${activity_id}`, {
      activity_id: parseInt(activity_id),
      label: eventName,
      activity_start_date: dateFrom,
      activity_end_date: dateTo,
      department: department,
      location: selectedLocation
    })
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Server error:", error);
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-40">
        <h1 className="font-bold text-lg mb-4">Edit Event</h1>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="label" className="block font-medium">Event Name:</label>
            <input
              type="text"
              id="label"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="block w-full border rounded-md py-2 px-3 mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dateFrom" className="block font-medium">Date From:</label>
            <input
              type="date"
              id="activity_start_date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="block w-full border rounded-md py-2 px-3 mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dateTo" className="block font-medium">Date To:</label>
            <input
              type="date"
              id="activity_end_date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="block w-full border rounded-md py-2 px-3 mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="department" className="block font-medium">Department:</label>
            <input
              type="text"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="block w-full border rounded-md py-2 px-3 mt-1"
            />
          </div>
          <div className="mb-4">
            <h3>Location:</h3>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="mt-3 border border-gray-300 rounded-md px-4 py-2"
            >
              <option value="---">Select Location</option>
              <option value="Main">Bankerohan(Main)</option>
              <option value="Annex">Bonifacio(Annex)</option>
              <option value="Bajada">Bajada(BED)</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 px-4">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
