// src/App.js
import React from "react";
import orgData from "./data";
import OrganizationChart from "./components/OrganizationChart";
import "./App.css"; // Apply your CSS styles here

const App = () => {
  return (
    <div className="app">
      <h1>Organizational Chart</h1>
      <OrganizationChart orgData={orgData} managerId={null} />
    </div>
  );
};

export default App;
