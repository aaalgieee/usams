// eslint-disable-next-line no-unused-vars
import React from "react";

import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Calendar from "./components/calendar";
import Report from "./components/report";
import About from "./components/about";
import Create from "./components/create";
import Add from "./components/adduser";
import TapID from "./components/TapID";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Edit from "./components/edit";


const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/report/:activity_id" element={<Report />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/adduser" element={<Add/>} />
        <Route path="/tapid/:activity_id" element={<TapID />} />
        <Route path="/edit/:activity_id" element={<Edit/>}/>

        
       

      </Routes>
    </Router>

  );
};

export default App
