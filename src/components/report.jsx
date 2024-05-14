import React, { useState } from 'react';
import Navbar from "./ui/navbar";
import Table from "./ui/gentable";

function Report() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  
  };

  return (
    <div>
      <Navbar />
      <div> 
     <h3 style={{ marginLeft: "150px", marginTop: "3px" }}>Filter:</h3> 
     <select value={selectedFilter} onChange={handleFilterChange} className="mt-3 border border-gray-300 rounded-md px-4 py-2" style={{ marginLeft: "200px" }} >
          <option value="All">All</option>
          <option value="CCS">CCS</option>
          <option value="CPC">CPC</option>
          
    </select>
     </div>
      <Table />
    </div>
  );
}

export default Report;
