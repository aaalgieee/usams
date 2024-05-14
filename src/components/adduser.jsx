import Navbar from "./ui/navbar";
import { useState } from "react";

function Add() {
    // State variables to store user input
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
  
    // Function to handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
  
  
      if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
        setError("All fields are required.");
        return;
      }
  
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
  
      console.log("Submitted:", { firstName, lastName, username, email, password });
  
      setFirstName("");
      setLastName("");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("");
    };
  
    return (
      <div>
        <Navbar />
  
        <div className="max-w-6xl mx-auto mt-40">
          <h1 className="font-bold text-lg mb-4">Add User</h1>
          {error && <div className="text-red-600 mb-4">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block font-medium">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="block w-full border rounded-md py-2 px-3 mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block font-medium">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="block w-full border rounded-md py-2 px-3 mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block font-medium">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full border rounded-md py-2 px-3 mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full border rounded-md py-2 px-3 mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full border rounded-md py-2 px-3 mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block font-medium">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full border rounded-md py-2 px-3 mt-1"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded-md py-2 px-4">Add User</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Add;
  