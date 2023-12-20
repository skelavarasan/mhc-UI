import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [organizationInfo, setOrganizationInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrganizationInfo = async () => {
      try {
        const selectedOrganization = localStorage.getItem('selectedOrganization');

        if (!selectedOrganization) {
          console.error('Selected organization ID not found in local storage');
          return;
        }

        const response = await fetch(`http://47.32.254.89:7000/api/org/getById/${selectedOrganization}`);
        const data = await response.json();

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
  }, []);

  const navigateToOrganization = () => {
    if (organizationInfo) {
      navigate(`/organization?orgId=${organizationInfo.id}`);
    }
  };

  return (
    <div className="organization-container bg-gray-100 min-h-screen flex">
      <Sidebar />
      <div className="organization-content p-8 flex-1">
        {organizationInfo ? (
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4" onClick={navigateToOrganization}>
              {`Welcome to ${organizationInfo.organizationdetails[0].name}!`}
            </h1>
            {/* Render other organization details here */}
          </div>
        ) : (
          <p>Loading organization information...</p>
        )}
      </div>
    </div>
  );
}

export default Home;
