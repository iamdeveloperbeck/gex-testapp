import React from 'react';
import { Link } from 'react-router-dom';

const PassedUsers = () => {
  // Retrieve passed users data from localStorage
  const passedUsers = JSON.parse(localStorage.getItem('passedUsers')) || [];

  return (
    <div>
      <h2>Passed Users</h2>
      {/* Check if there are any passed users */}
      {passedUsers.length === 0 ? (
        <p>No users have passed the test yet.</p>  // Message if no passed users
      ) : (
        <ul>
          {passedUsers.map((user, idx) => (
            <li key={idx}>
              {`${user.name} ${user.surname} - Natija: ${user.score}`}
            </li>
          ))}
        </ul>
      )}
      <Link to='/'>Go Back</Link>
    </div>
  );
};

export default PassedUsers;