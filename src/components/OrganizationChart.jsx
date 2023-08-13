// src/components/OrganizationChart.js
import React from "react";
import UserBlock from "./UserBlock";

const OrganizationChart = ({ orgData, managerId }) => {
  const subordinates = orgData.filter((user) => user.manager === managerId);

  return (
    <div className="org-chart">
      {subordinates.map((subordinate) => (
        <div key={subordinate.id} className="org-node">
          <UserBlock user={subordinate} />
          <OrganizationChart orgData={orgData} managerId={subordinate.id} />
        </div>
      ))}
    </div>
  );
};

export default OrganizationChart;
