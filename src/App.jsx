import React from "react";

import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Calendar from "./components/calendar";
import Report from "./components/report";
import About from "./components/about";
import Create from "./components/create";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";

import Navbar from "./components/ui/navbar";
import Table from "./components/ui/table";
import GenTable from "./components/ui/gentable";
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



        
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/table" element={<Table />} />
        <Route path="/gentable" element={<GenTable />} />


      </Routes>
    </HashRouter>
  );
};

export default App
