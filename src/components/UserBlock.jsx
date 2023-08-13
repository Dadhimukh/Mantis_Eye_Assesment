// src/components/UserBlock.js
import React from "react";

const UserBlock = ({ user }) => {
  return (
    <div className="user-block">
      <div className="user-name">{user.fullName}</div>
      <div className="user-designation">{user.designation}</div>
    </div>
  );
};

export default UserBlock;
