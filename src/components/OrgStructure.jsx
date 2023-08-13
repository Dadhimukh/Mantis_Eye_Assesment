import React from "react";
import EmployeeBlock from "./EmployeeBlock";
import orgData from "../data";

const OrgStructure = () => {
  const renderEmployees = (employees, managerId = "-") => {
    return employees
      .filter((employee) => employee.manager === managerId)
      .map((employee) => (
        <div key={employee.id} className="employee">
          <EmployeeBlock
            fullName={employee.fullName}
            designation={employee.designation}
          />
          {renderEmployees(employees, employee.id)}
        </div>
      ));
  };

  return <div className="org-structure">{renderEmployees(orgData)}</div>;
};

export default OrgStructure;
