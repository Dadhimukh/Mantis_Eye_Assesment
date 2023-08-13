import React from "react";
import "./EmployeeBlock.css"; // Create this CSS file for styling

const EmployeeBlock = ({ fullName, designation,emailAddress,manager }) => {
  return (
    <>
      <table>
        <tr>
          <th>Full Name {fullName}</th>
          <th>{designation}</th>
          <th>{emailAddress}</th>
          <th>{manager}</th>
        </tr>
      </table>
    </>
  );
};

export default EmployeeBlock;
