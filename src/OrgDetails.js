// OrgDetails.js
import React from 'react';

const OrgDetails = ({ orgDetails }) => {
  const { name, email, contact, address } = orgDetails;

  const handleReset = () => {
    console.log('Reset functionality');
  };

  const handleUpdate = () => {
    console.log('Update functionality');
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Contact: {contact}</p>
      <p>Address: {address}</p>

      <div>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default OrgDetails;
