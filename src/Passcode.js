import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logx from './assests/image1.png';

function Passcode() {
  const [passcode, setPasscode] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate();

  const handlePasscodeChange = (index, value) => {
    const updatedPasscode = [...passcode];
    updatedPasscode[index] = value;
    setPasscode(updatedPasscode);

    // Move focus to the next input box
    if (index < 5 && value !== '') {
      const nextInput = document.getElementById(`passcode-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }

    if (index === 5 && value !== '') {
      const enteredCode = updatedPasscode.join('');
      if (isValidCode(enteredCode)) {
        if (enteredCode === '920117') {
          const selectedOrganization = localStorage.getItem('selectedOrganization');
          navigate(`/organization?orgId=${selectedOrganization}`);
        } else {
          alert('Invalid passcode. Please check the entered code.');
        }
      } else {
        alert('Please enter a valid 6-digit numeric passcode.');
      }
    }
  };

  useEffect(() => {
    // Focus on the first input box when the component mounts
    const firstInput = document.getElementById('passcode-0');
    if (firstInput) {
      firstInput.focus();
    }
  }, []);

  // Function to check if the code is a valid 6-digit numeric value
  const isValidCode = (code) => /^\d{6}$/.test(code);

  return (
    <div className="flex items-center min-h-screen bg-cover">
      <img src={logx} style={{ height: '670px', width: '70%' }} alt="Logo" />

      <div className="w-96 p-6 bg-white rounded shadow text-center flex flex-col items-center pr-4" style={{ marginBottom: '160px' }}>
        <h1>Enter Your Passcode</h1>

        <div className="flex justify-center mt-4">
          {passcode.map((digit, index) => (
            <input
              key={index}
              id={`passcode-${index}`}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-2xl mx-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={digit}
              onChange={(e) => handlePasscodeChange(index, e.target.value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Passcode;
