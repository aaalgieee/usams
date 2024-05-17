import { useState } from "react";
import Navbar from "./ui/navbar";
import { API_URL } from "../api";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  
  // State variables to store user input
  const [eventName, setEventName] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [error, setError] = useState("");

  // Separate state variables for the select elements
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!eventName || !dateFrom || !dateTo) {
      setError("All fields are required.");
      return;
    }

    setEventName("");
    setDateFrom("");
    setDateTo("");
    setError("");
    setSelectedDepartment("All");
    setSelectedLocation("All");
    
    // Send the data to the server
    fetch(API_URL + "/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        label: eventName,
        activity_start_date: dateFrom,
        activity_end_date: dateTo,
        // limit to 8 characters
        code: eventName.toUpperCase().replace(" ", "_").substring(0, 8),
        // department: selectedDepartment,
        location: selectedLocation
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Server error");
        }
        return response.json();
      })
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Server error:", error);
        setError("An error occurred. Please try again.");
      
    })
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto mt-40">
        <h1 className="font-bold text-lg mb-4">Create Event</h1>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block font-medium">Event Name:</label>
            <input
              type="text"
              id="firstName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="block w-full border rounded-md py-2 px-3 mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium">Date From:</label>
            <input
              type="text"
              id="lastName"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="block w-full border rounded-md py-2 px-3 mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block font-medium">Date To:</label>
            <input
              type="text"
              id="username"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="block w-full border rounded-md py-2 px-3 mt-1"
            />
          </div>

          <div className="mb-4">
            <h3>Department:</h3>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="mt-3 border border-gray-300 rounded-md px-4 py-2"
            >
              <option value="All">Select Department</option>
              <option value="CCS">CCS</option>
              <option value="CPC">CPC</option>
              <option value="MLS">MLS</option>
            </select>
          </div>

          <div className="mb-4">
            <h3>Location:</h3>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="mt-3 border border-gray-300 rounded-md px-4 py-2"
            >
              <option value="All">Select Location</option>
              <option value="Main">Bangke(Main)</option>
              <option value="Boni">Bonifacio</option>
              <option value="Bajada">Bajada</option>
            </select>
          </div>

          <button type="submit" className="bg-blue-500 text-white rounded-md py-2 px-4">Add User</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
