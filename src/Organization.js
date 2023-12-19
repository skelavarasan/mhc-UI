// import React, { useState, useEffect } from 'react';
// import Sidebar from './sidebar';
// import { useLocation } from 'react-router-dom';

// import './Organization.css';

// function Organization() {
//   const location = useLocation();
//   const orgId = new URLSearchParams(location.search).get('orgId');
//   const [organizationInfo, setOrganizationInfo] = useState(null);

//   useEffect(() => {
//     const fetchOrganizationInfo = async () => {
//       try {
//         if (!orgId) {
//           console.error('Organization ID not provided in the URL parameters');
//           return;
//         }

//         const response = await fetch(`http://47.32.254.89:7000/api/org/getById/${orgId}`);
//         const data = await response.json();

//         if (response.ok) {
//           setOrganizationInfo(data.data);
//         } else {
//           console.error('Error fetching organization info:', data.message);
//         }
//       } catch (error) {
//         console.error('Error fetching organization info:', error);
//       }
//     };

//     fetchOrganizationInfo();
//   }, [orgId]);

//   const handleReset = () => {
//     // Implement the logic to reset organization data
//     console.log('Reset button clicked');
//   };

//   const handleUpdate = () => {
//     // Implement the logic to update organization data
//     console.log('Update button clicked');
//   };

//   return (
//     <div className="organization-container bg-gray-100 min-h-screen flex">
//       <Sidebar />
//       <div className="organization-content p-8 flex-1">
//         {organizationInfo ? (
//           <div className="max-w-2xl mx-auto">
//             <h1 className="text-3xl font-bold mb-4">{`Welcome to ${organizationInfo.organizationdetails[0].name}!`}</h1>
//             <div className="bg-white rounded shadow p-6 mb-4">
//               <p className="text-lg">{`Organization Name: ${organizationInfo.organizationdetails[0].name}`}</p>
//               <p className="text-lg">{`Email: ${organizationInfo.email}`}</p>
//               <p className="text-lg">{`Contact: ${organizationInfo.mobileNumber}`}</p>
//             </div>
//             {organizationInfo.contact && organizationInfo.contact.length > 0 && (
//               <div className="bg-white rounded shadow p-6 mb-4">
//                 <h2 className="text-xl font-bold mb-4">Address:</h2>
//                 <p>{`Street 1: ${organizationInfo.contact[0].addressLine1}`}</p>
//                 <p>{`Street 2: ${organizationInfo.contact[0].addressLine2}`}</p>
//                 <p>{`City: ${organizationInfo.contact[0].city}`}</p>
//                 <p>{`State: ${organizationInfo.contact[0].state}`}</p>
//                 <p>{`Country: ${organizationInfo.contact[0].country}`}</p>
//               </div>
//             )}
//             <div className="flex justify-between">
//               <button onClick={handleReset} className="bg-gray-500 text-white px-4 py-2 rounded">
//                 Reset
//               </button>
//               <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded">
//                 Update
//               </button>
//             </div>
//           </div>
//         ) : (
//           <p>Loading organization information...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Organization;







import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import { useLocation } from 'react-router-dom';

import './Organization.css';

function Organization() {
  const location = useLocation();
  const orgId = new URLSearchParams(location.search).get('orgId');
  const [organizationInfo, setOrganizationInfo] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedOrganizationInfo, setEditedOrganizationInfo] = useState({
    name: '',
    email: '',
    contact: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
  });

  useEffect(() => {
    const fetchOrganizationInfo = async () => {
      try {
        if (!orgId) {
          console.error('Organization ID not provided in the URL parameters');
          return;
        }

        const response = await fetch(`http://47.32.254.89:7000/api/org/getById/${orgId}`);
        const data = await response.json();

        if (response.ok) {
          setOrganizationInfo(data.data);
          // Set the initial edited organization info
          setEditedOrganizationInfo({
            name: data.data.organizationdetails[0].name,
            email: data.data.email,
            contact: data.data.mobileNumber,
            addressLine1: data.data.contact[0].addressLine1,
            addressLine2: data.data.contact[0].addressLine2,
            city: data.data.contact[0].city,
            state: data.data.contact[0].state,
            country: data.data.contact[0].country,
          });
        } else {
          console.error('Error fetching organization info:', data.message);
        }
      } catch (error) {
        console.error('Error fetching organization info:', error);
      }
    };

    fetchOrganizationInfo();
  }, [orgId]);

  const handleReset = () => {
    // Clear organization information
    setOrganizationInfo(null);
    // Reset edited organization info
    setEditedOrganizationInfo({
      name: '',
      email: '',
      contact: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      country: '',
    });
  };

  const handleEdit = () => {
    // Toggle edit mode
    setIsEditMode(!isEditMode);
  };

  const handleSave = () => {
    // Implement save logic with editedOrganizationInfo
    console.log('Save button clicked with edited data:', editedOrganizationInfo);
    // For demonstration purposes, you can update the state or make an API call to save the edited data
  
    // Update organizationInfo with edited values
    setOrganizationInfo((prevOrganizationInfo) => ({
      ...prevOrganizationInfo,
      organizationdetails: [
        {
          ...prevOrganizationInfo.organizationdetails[0],
          name: editedOrganizationInfo.name,
        },
      ],
      email: editedOrganizationInfo.email,
      mobileNumber: editedOrganizationInfo.contact,
      contact: [
        {
          ...prevOrganizationInfo.contact[0],
          addressLine1: editedOrganizationInfo.addressLine1,
          addressLine2: editedOrganizationInfo.addressLine2,
          city: editedOrganizationInfo.city,
          state: editedOrganizationInfo.state,
          country: editedOrganizationInfo.country,
        },
      ],
    }));
  
    // Exit edit mode
    setIsEditMode(false);
  };

  const handleChange = (field, value) => {
    // Update editedOrganizationInfo when input values change
    setEditedOrganizationInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  return (
    <div className="organization-container bg-gray-100 min-h-screen flex">
      <Sidebar />
      <div className="organization-content p-8 flex-1">
        {organizationInfo ? (
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{`Welcome to ${organizationInfo.organizationdetails[0].name}!`}</h1>
            {isEditMode ? (
              // Render edit form here
              <div className="bg-white rounded shadow p-6 mb-4">
                <input
                  type="text"
                  placeholder="Organization Name"
                  value={editedOrganizationInfo.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={editedOrganizationInfo.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Contact"
                  value={editedOrganizationInfo.contact}
                  onChange={(e) => handleChange('contact', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Address Line 1"
                  value={editedOrganizationInfo.addressLine1}
                  onChange={(e) => handleChange('addressLine1', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Address Line 2"
                  value={editedOrganizationInfo.addressLine2}
                  onChange={(e) => handleChange('addressLine2', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="City"
                  value={editedOrganizationInfo.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="State"
                  value={editedOrganizationInfo.state}
                  onChange={(e) => handleChange('state', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Country"
                  value={editedOrganizationInfo.country}
                  onChange={(e) => handleChange('country', e.target.value)}
                />
              </div>
            ) : (
              // Render display mode here
              <div className="bg-white rounded shadow p-6 mb-4">
                <p className="text-lg">{`Organization Name: ${organizationInfo.organizationdetails[0].name}`}</p>
                <p className="text-lg">{`Email: ${organizationInfo.email}`}</p>
                <p className="text-lg">{`Contact: ${organizationInfo.mobileNumber}`}</p>
                <h2 className="text-xl font-bold mb-2">Address:</h2>
                <p>{`Street 1: ${organizationInfo.contact[0].addressLine1}`}</p>
                <p>{`Street 2: ${organizationInfo.contact[0].addressLine2}`}</p>
                <p>{`City: ${organizationInfo.contact[0].city}`}</p>
                <p>{`State: ${organizationInfo.contact[0].state}`}</p>
                <p>{`Country: ${organizationInfo.contact[0].country}`}</p>
              </div>
            )}
            <div className="flex justify-between">
              <button onClick={handleReset} className="bg-gray-500 text-white px-4 py-2 rounded">
                Reset
              </button>
              {isEditMode ? (
                <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Save
                </button>
              ) : (
                <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Edit
                </button>
              )}
            </div>
          </div>
        ) : (
          <p>Loading organization information...</p>
        )}
      </div>
    </div>
  );
}

export default Organization;
