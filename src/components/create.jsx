import { useState } from "react";
import Navbar from "./ui/navbar";

function Create() {
  // State variables to store user input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Separate state variables for the select elements
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !username || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log("Submitted:", { firstName, lastName, username, password, selectedDepartment, selectedLocation });

    setFirstName("");
    setLastName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    setSelectedDepartment("All");
    setSelectedLocation("All");
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="block w-full border rounded-md py-2 px-3 mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium">Date From:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="block w-full border rounded-md py-2 px-3 mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block font-medium">Date To:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
