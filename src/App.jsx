import React from "react";

import Login from "./components/login";
import Dashboard from "./components/dashboard";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
