import React, { useState } from 'react';

const PassedUsers = () => {
  const passedUsers = JSON.parse(localStorage.getItem('passedUsers')) || [];

  return (
    <div>
      <h2>Passed Users</h2>
      <ul>
        {passedUsers.map((user, idx) => (
          <li key={idx}>{`${user.name} ${user.surname} - Score: ${user.score}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default PassedUsers;
