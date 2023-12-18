import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import { useLocation } from 'react-router-dom';

import './Organization.css';

function Organization() {
  const location = useLocation();
  const orgId = new URLSearchParams(location.search).get('orgId');
  const [organizationInfo, setOrganizationInfo] = useState(null);

  useEffect(() => {
    const fetchOrganizationInfo = async () => {
      try {
        if (!orgId) {
          console.error('Organization ID not provided in the URL parameters');
          return;
        }
  
        const response = await fetch(`http://47.32.254.89:7000/api/org/getById/${orgId}`);
        const data = await response.json();
        console.log('Server Response:', data);
  
        if (response.ok) {
          setOrganizationInfo(data.data); 
        } else {
          console.error('Error fetching organization info:', data.message);
        }
      } catch (error) {
        console.error('Error fetching organization info:', error);
      }
    };
  
    fetchOrganizationInfo();
  }, [orgId]);
  
  return (
    <div className="organization-container">
      <Sidebar />
      <div className="organization-content justify-center">
        {organizationInfo ? (
          <>
            <h1>{`Welcome to ${organizationInfo.organizationdetails[0].name}!`}</h1>
          </>
        ) : (
          <p>Loading organization information...</p>
        )}
      </div>
    </div>
  );
}

export default Organization;
