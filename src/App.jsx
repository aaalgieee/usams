import React from "react";

import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Calendar from "./components/calendar";
import Report from "./components/report";
import About from "./components/about";
import Create from "./components/create";
import Add from "./components/adduser";
import TapID from "./components/TapID";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/report" element={<Report />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/adduser" element={<Add/>} />
        <Route path="/tapid" element={<TapID />} />
       

      </Routes>
    </HashRouter>
  );
};

export default App
