import React from "react";
import Button from "./ui/button";
import { useNavigate } from "react-router-dom";
import Alert from "./ui/alert";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const [showError, setShowError] = React.useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username === "" || password === "") {
      setShowError(true); // Show the alert
    } else {
      try {
        const response = await axios.post("http://localhost:8000/login", { username, password });
        console.log(response);
        if (response.status === 200) {
          navigate("/dashboard");
        } else {
          setShowError(true); // Show the alert
        }
      } catch (error) {
        if (error.response && error.response.status === 422) {
          setShowError(true); // Show the alert
        } else {
          console.error(error);
          setShowError(true); // Show the alert
        }
      }
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fad1d3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {showError && ( // Conditionally render the alert
          <Alert type="warning">Please fill all required fields.</Alert>
        )}
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            University Student Attendance Monitoring System
          </h2>
        </div>
        <form className=" mt-5 space-y-5" onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <div>
            <Button
              variant="pink"
              fullwidth
              type="submit"
              onClick={handleSubmit}
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Login;
