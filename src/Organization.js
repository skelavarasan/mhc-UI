// import React, { useState, useEffect } from 'react';
// import Sidebar from './sidebar';
// import { useLocation } from 'react-router-dom';

// import './Organization.css';

// function Organization() {
//   const location = useLocation();
//   const orgId = new URLSearchParams(location.search).get('orgId');
//   const [organizationInfo, setOrganizationInfo] = useState(null);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [editedOrganizationInfo, setEditedOrganizationInfo] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     addressLine1: '',
//     addressLine2: '',
//     city: '',
//     state: '',
//     country: '',
//   });
//   useEffect(() => {
//     const fetchOrganizationInfo = async () => {
//       try {
//         const orgId = new URLSearchParams(location.search).get('orgId');
  
//         if (!orgId) {
//           console.error('Organization ID not provided in the URL parameters');
//           return;
//         }
  
//         const response = await fetch(`http://47.32.254.89:7000/api/org/getById/${orgId}`);
//         const data = await response.json();
  
//         if (response.ok) {
//           setOrganizationInfo(data.data);
//           setEditedOrganizationInfo({
//             name: data.data.organizationdetails[0].name,
//             email: data.data.email,
//             contact: data.data.mobileNumber,
//             addressLine1: data.data.contact[0].addressLine1,
//             addressLine2: data.data.contact[0].addressLine2,
//             city: data.data.contact[0].city,
//             state: data.data.contact[0].state,
//             country: data.data.contact[0].country,
//           });
//         } else {
//           console.error('Error fetching organization info:', data.message);
//         }
//       } catch (error) {
//         console.error('Error fetching organization info:', error);
//       }
//     };
  
//     fetchOrganizationInfo();
//   }, [location.search]);
  

//   const handleReset = () => {
//     setOrganizationInfo(null);
//     setEditedOrganizationInfo({
//       name: '',
//       email: '',
//       contact: '',
//       addressLine1: '',
//       addressLine2: '',
//       city: '',
//       state: '',
//       country: '',
//     });
//   };

//   const handleEdit = () => {
//     setIsEditMode(!isEditMode);
//   };

//   const handleSave = () => {
//     console.log('Save button clicked with edited data:', editedOrganizationInfo);
//     setOrganizationInfo((prevOrganizationInfo) => ({
//       ...prevOrganizationInfo,
//       organizationdetails: [
//         {
//           ...prevOrganizationInfo.organizationdetails[0],
//           name: editedOrganizationInfo.name,
//         },
//       ],
//       email: editedOrganizationInfo.email,
//       mobileNumber: editedOrganizationInfo.contact,
//       contact: [
//         {
//           ...prevOrganizationInfo.contact[0],
//           addressLine1: editedOrganizationInfo.addressLine1,
//           addressLine2: editedOrganizationInfo.addressLine2,
//           city: editedOrganizationInfo.city,
//           state: editedOrganizationInfo.state,
//           country: editedOrganizationInfo.country,
//         },
//       ],
//     }));
//     setIsEditMode(false);
//   };

//   const handleChange = (field, value) => {
//     setEditedOrganizationInfo((prevInfo) => ({
//       ...prevInfo,
//       [field]: value,
//     }));
//   };

//   const handleCancel = () => {
//     setEditedOrganizationInfo({
//       name: organizationInfo.organizationdetails[0].name,
//       email: organizationInfo.email,
//       contact: organizationInfo.mobileNumber,
//       addressLine1: organizationInfo.contact[0].addressLine1,
//       addressLine2: organizationInfo.contact[0].addressLine2,
//       city: organizationInfo.contact[0].city,
//       state: organizationInfo.contact[0].state,
//       country: organizationInfo.contact[0].country,
//     });
//     setIsEditMode(false);
//   };


//   return (
//     <div className="organization-container bg-gray-100 min-h-screen flex">
//       <Sidebar />
//       <div className="organization-content p-8 flex-1">
//         {organizationInfo ? (
//           <div className="max-w-2xl mx-auto">
//             <h1 className="text-3xl font-bold mb-4">{`Welcome to ${organizationInfo.organizationdetails[0].name}!`}</h1>
//             {isEditMode ? (
//               <div className="bg-white rounded shadow p-6 mb-4">
//                 <div className="input-box mb-4">

//                   <input
//                     type="text"
//                     id="organizationName"
//                     className="rounded p-2 w-full"
//                     placeholder="Organization-Name"
//                     value={editedOrganizationInfo.name}
//                     onChange={(e) => handleChange('name', e.target.value)}
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   {/* <label htmlFor="email">Email:</label> */}
//                   <input
//                     type="text"
//                     id="email"
//                     className="rounded p-2 w-full"
//                     placeholder="E-mail"
//                     value={editedOrganizationInfo.email}
//                     onChange={(e) => handleChange('email', e.target.value)}
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   {/* <label htmlFor="contact">Contact:</label> */}
//                   <input
//                     type="text"
//                     id="contact"
//                     className="rounded p-2 w-full"
//                     placeholder="Contact"
//                     value={editedOrganizationInfo.contact}
//                     onChange={(e) => handleChange('contact', e.target.value)}
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   {/* <label htmlFor="addressLine1">Address Line 1:</label> */}
//                   <input
//                     type="text"
//                     id="addressLine1"
//                     className="rounded p-2 w-full"
//                     placeholder="Address Line 1"
//                     value={editedOrganizationInfo.addressLine1}
//                     onChange={(e) => handleChange('addressLine1', e.target.value)}
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   {/* <label htmlFor="addressLine2">Address Line 2:</label> */}
//                   <input
//                     type="text"
//                     id="addressLine2"
//                     className="rounded p-2 w-full"
//                     placeholder="Address Line 2"
//                     value={editedOrganizationInfo.addressLine2}
//                     onChange={(e) => handleChange('addressLine2', e.target.value)}
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   {/* <label htmlFor="city">City:</label> */}
//                   <input
//                     type="text"
//                     id="city"
//                     className="rounded p-2 w-full"
//                     placeholder='City'
//                     value={editedOrganizationInfo.city}
//                     onChange={(e) => handleChange('city', e.target.value)}
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   {/* <label htmlFor="state">State:</label> */}
//                   <input
//                     type="text"
//                     id="state"
//                     className="rounded p-2 w-full"
//                     placeholder="State"
//                     value={editedOrganizationInfo.state}
//                     onChange={(e) => handleChange('state', e.target.value)}
//                   />
//                 </div>
//                 <div className="input-box mb-1">
//                   {/* <label htmlFor="country">Country:</label> */}
//                   <input
//                     type="text"
//                     id="country"
//                     className="rounded p-2 w-full"
//                     placeholder="Country"
//                     value={editedOrganizationInfo.country}
//                     onChange={(e) => handleChange('country', e.target.value)}
//                   />
//                 </div>
//               </div>
//             ) : (
//               <div className="bg-white rounded shadow p-6 mb-4">
//                 <div className="input-box mb-4">
//                   <input
//                     type="text"
//                     className="rounded p-2 w-full"
//                     placeholder={organizationInfo.organizationdetails[0].name}
//                     readOnly
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   <input
//                     type="text"
//                     className="rounded p-2 w-full"
//                     placeholder={organizationInfo.email}
//                     readOnly
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   <input
//                     type="text"
//                     className="rounded p-2 w-full"
//                     placeholder={organizationInfo.mobileNumber}
//                     readOnly
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   <input
//                     type="text"
//                     className="rounded p-2 w-full"
//                     placeholder={organizationInfo.contact[0].addressLine1}
//                     readOnly
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   <input
//                     type="text"
//                     className="rounded p-2 w-full"
//                     placeholder={organizationInfo.contact[0].addressLine2}
//                     readOnly
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   <input
//                     type="text"
//                     className="rounded p-2 w-full"
//                     placeholder={organizationInfo.contact[0].city}
//                     readOnly
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   <input
//                     type="text"
//                     className="rounded p-2 w-full"
//                     placeholder={organizationInfo.contact[0].state}
//                     readOnly
//                   />
//                 </div>
//                 <div className="input-box mb-4">
//                   <input
//                     type="text"
//                     className="rounded p-2 w-full"
//                     placeholder={organizationInfo.contact[0].country}
//                     readOnly
//                   />
//                 </div>
//               </div>
//             )}
//             <div className="flex justify-between">
//               {isEditMode ? (
//                 <>
//                   <button onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
//                     Cancel
//                   </button>
//                   <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
//                     Save
//                   </button>
//                 </>
//               ) : (
//                 <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded">
//                   Update
//                 </button>
//               )}
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
        const orgId = new URLSearchParams(location.search).get('orgId');
  
        if (!orgId) {
          console.error('Organization ID not provided in the URL parameters');
          return;
        }
  
        const response = await fetch(`http://47.32.254.89:7000/api/org/getById/${orgId}`);
        const data = await response.json();
  
        if (response.ok) {
          setOrganizationInfo(data.data);
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
  }, [location.search]);
  

  const handleReset = () => {
    setOrganizationInfo(null);
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

  const InputBox = ({ id, label, placeholder, value, readOnly, onChange }) => (
    <div className="input-box mb-2 md:mb-4 md:w-1/3 lg:w-1/4">
      <label className="block text-sm font-medium text-gray-600">{label}</label>
      <input
        type="text"
        id={id}
        className="rounded p-1 md:p-2 w-full"
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        onChange={(e) => onChange(id, e.target.value)}
        style={{border:'1px solid green', width:'210px'}}
      />
    </div>
  );
  

  const handleEdit = () => {
    setIsEditMode(!isEditMode);
  };

  const handleSave = () => {
    console.log('Save button clicked with edited data:', editedOrganizationInfo);
    setOrganizationInfo((prevOrganizationInfo) => ({
      ...prevOrganizationInfo,
      organizationdetails: [
        {
          ...prevOrganizationInfo.organizationdetails[0],
          name: editedOrganizationInfo.name,
          type: editedOrganizationInfo.type,
          tin: editedOrganizationInfo.tin,
          npi: editedOrganizationInfo.npi,
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
      websiteUrl: editedOrganizationInfo.websiteUrl,
      pointofcontact: [
        {
          ...prevOrganizationInfo.pointofcontact[0],
          name: editedOrganizationInfo.PocName,
          email: editedOrganizationInfo.PocEmail,
          phoneNumber: editedOrganizationInfo.PocPhno,
        },
      ],
      hippaprivacyofficer: [
        {
          ...prevOrganizationInfo.hippaprivacyofficer[0],
          name: editedOrganizationInfo.HpoName,
          email: editedOrganizationInfo.HpoEmail,
          mobile: editedOrganizationInfo.HpoNumber,
        },
      ],
      hippassecurityofficer: [
        {
          ...prevOrganizationInfo.hippassecurityofficer[0],
          name: editedOrganizationInfo.HsoName,
          email: editedOrganizationInfo.HsoEmail,
          mobile: editedOrganizationInfo.HsoMobile,
        },
      ],
    }));
    setIsEditMode(false);
  };
  
  const handleChange = (field, value) => {
    setEditedOrganizationInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  const handleCancel = () => {
    setEditedOrganizationInfo({
      name: organizationInfo.organizationdetails[0].name,
      email: organizationInfo.email,
      contact: organizationInfo.mobileNumber,
      addressLine1: organizationInfo.contact[0].addressLine1,
      addressLine2: organizationInfo.contact[0].addressLine2,
      city: organizationInfo.contact[0].city,
      state: organizationInfo.contact[0].state,
      country: organizationInfo.contact[0].country,
    });
    setIsEditMode(false);
  };


return (
  <div className="organization-container bg-gray-100 min-h-screen flex">
    <Sidebar />
    <div className="organization-content p-8 flex-1">
      {organizationInfo ? (
        <div className="max-w-2xl mx-auto">
          {/* <h1 className="text-3xl font-bold mb-4">{`Welcome to ${organizationInfo.organizationdetails[0].name}!`}</h1> */}

         

          {isEditMode ? (
            <div className="bg-white rounded shadow p-6 mb-4">
            <div className="input-box-container flex flex-wrap">
              <InputBox id="organizationName"  label="Organization Name" placeholder="Organization Name" value={organizationInfo.organizationdetails[0].name} readOnly={false} onChange={() => {}} />
              <InputBox id="organizationType"  label="Organization Type" placeholder="Organization Type" value={organizationInfo.organizationdetails[0].type} readOnly={false} onChange={() => {}} />
              <InputBox id="organizationTin"   label="Organization TIN" placeholder="Organization Tin" value={organizationInfo.organizationdetails[0].tin} readOnly={false} onChange={() => {}} />
              <InputBox id="organizationNpi"   label="Organization NPI" placeholder="Organization NPI" value={organizationInfo.organizationdetails[0].npi} readOnly={false} onChange={() => {}} />
            </div>

            <div className="flex flex-wrap">
            <InputBox id="email"  label="E-Mail" placeholder="E-mail" value={editedOrganizationInfo.email} readOnly={false} onChange={handleChange} />
            <InputBox id="contact"  label="Contact" placeholder="Contact" value={editedOrganizationInfo.contact} readOnly={false} onChange={handleChange} />
            <InputBox id="websiteUrl"  label="Website URL" placeholder="Website URL" value={organizationInfo.websiteUrl} readOnly={false} onChange={handleChange} />

            </div>

            <div className="flex flex-wrap">
              <InputBox id="PocName"  label="Point Of Contact Name" placeholder="Point Of Contact Name" value={organizationInfo.pointofcontact[0].name} readOnly={false} onChange={handleChange} />
              <InputBox id="PocEmail"  label="Point Of Contact E-Mail" placeholder="Point Of Contact Email" value={organizationInfo.pointofcontact[0].email} readOnly={false} onChange={handleChange} />
              <InputBox id="PocPhno"  label="Point Of Contact Phone Number" placeholder="Point Of Contact Phone-Number" value={organizationInfo.pointofcontact[0].phoneNumber} readOnly={false} onChange={handleChange} />
            </div>

            <div className="flex flex-wrap">
              <InputBox id="HpoName" label="HIPAA Privacy Officer Name" placeholder="HIPAA Privacy Officer Name" value={organizationInfo.hippaprivacyofficer[0].name} readOnly={false} onChange={handleChange} />
              <InputBox id="HpoEmail" label="HIPAA Privacy Officer E-Mail" placeholder="HIPAA Privacy Officer Email" value={organizationInfo.hippaprivacyofficer[0].email} readOnly={false} onChange={handleChange} />
              <InputBox id="HpoNumber" label="HIPAA Privacy Officer Mobile" placeholder="HIPAA Privacy Officer-Number" value={organizationInfo.hippaprivacyofficer[0].mobile} readOnly={false} onChange={handleChange} />
            </div>


            <div className="flex flex-wrap">
              <InputBox id="HsoName" label="HIPAA Security Officer Name" placeholder="HIPAA Security Officer Name" value={organizationInfo.hippassecurityofficer[0].name} readOnly={false} onChange={handleChange} />
              <InputBox id="HsoEmail" label="HIPAA Security Officer E-Mail" placeholder="HIPAA Security Officer Email" value={organizationInfo.hippassecurityofficer[0].email} readOnly={false} onChange={handleChange} />
              <InputBox id="HsoMobile" label="HIPAA Security Officer Mobile" placeholder="HIPAA Security Officer-Number" value={organizationInfo.hippassecurityofficer[0].mobile} readOnly={false} onChange={handleChange} />
            </div>
            
          </div>
          ) : (
            <div className=" p-6 mb-4">
              <div className="input-box-container flex flex-wrap" style={{justifyContent:'space-evenly'}}>




                <InputBox id="organizationName"  label="Organization Name" placeholder={organizationInfo.organizationdetails[0].name} value={organizationInfo.organizationdetails[0].name} readOnly={true} onChange={() => {}} />
                <InputBox id="organizationType"  label="Organization Type" placeholder={organizationInfo.organizationdetails[0].type} value={organizationInfo.organizationdetails[0].type} readOnly={true} onChange={() => {}} />
              </div>

              <div className="input-box-container flex flex-wrap"style={{justifyContent:'space-evenly'}}>
                <InputBox id="organizationTin"   label="Organization TIN" placeholder={organizationInfo.organizationdetails[0].tin} value={organizationInfo.organizationdetails[0].tin} readOnly={true} onChange={() => {}} />
                <InputBox id="organizationNpi"   label="Organization NPI" placeholder="Organization NPI" value={organizationInfo.organizationdetails[0].npi} readOnly={true} onChange={() => {}} />

              </div>

              <div className="input-box-container flex flex-wrap"style={{justifyContent:'space-between'}}>
              <InputBox id="email"  label="E-Mail" placeholder="E-mail" value={editedOrganizationInfo.email} readOnly={true} onChange={handleChange} />
              <InputBox id="contact" label='Contact' placeholder="Contact" value={editedOrganizationInfo.contact} readOnly={true} onChange={handleChange} />
              <InputBox id="websiteUrl" label="Website URL" placeholder="Website URL" value={organizationInfo.websiteUrl} readOnly={true} onChange={handleChange} />

              </div>
              
              <div className="input-box-container flex flex-wrap"style={{justifyContent:'space-between'}}>
                <InputBox id="PocName" label="Point Of Contact Name" placeholder="Point Of Contact Name" value={organizationInfo.pointofcontact[0].name} readOnly={true} onChange={handleChange} />
                <InputBox id="PocEmail" label="Point Of Contact E-Mail" placeholder="Point Of Contact Email" value={organizationInfo.pointofcontact[0].email} readOnly={true} onChange={handleChange} />
                <InputBox id="PocPhno" label="Point Of Contact Phone" placeholder="Point Of Contact Phone-Number" value={organizationInfo.pointofcontact[0].phoneNumber} readOnly={true} onChange={handleChange} />
              </div>

              <div className="input-box-container flex flex-wrap"style={{justifyContent:'space-between'}}>
                <InputBox id="HpoName" label="HIPAA Privacy Officer Name" placeholder="HIPAA Privacy Officer Name" value={organizationInfo.hippaprivacyofficer[0].name} readOnly={true} onChange={handleChange} />
                <InputBox id="HpoEmail" label="HIPAA Privacy Officer E-Mail" placeholder="HIPAA Privacy Officer Email" value={organizationInfo.hippaprivacyofficer[0].email} readOnly={true} onChange={handleChange} />
                <InputBox id="HpoMobile" label="HIPAA Privacy Officer Number" placeholder="HIPAA Privacy Officer-Number" value={organizationInfo.hippaprivacyofficer[0].mobile} readOnly={true} onChange={handleChange} />
              </div>


              <div className="input-box-container flex flex-wrap"style={{justifyContent:'space-between'}}>
                <InputBox id="HsoName" label="HIPAA Security Officer Name" placeholder="HIPAA Security Officer Name" value={organizationInfo.hippassecurityofficer[0].name} readOnly={true} onChange={handleChange} />
                <InputBox id="HsoEmail" label="HIPAA Security Officer Name" placeholder="HIPAA Security Officer Email" value={organizationInfo.hippassecurityofficer[0].email} readOnly={true} onChange={handleChange} />
                <InputBox id="HsoMobile" label="HIPAA Security Officer Name" placeholder="HIPAA Security Officer-Number" value={organizationInfo.hippassecurityofficer[0].mobile} readOnly={true} onChange={handleChange} />
              </div>
              
            </div>
          )}

          <div className="flex justify-between">
            {isEditMode ? (
              <>
                <button onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
                  back
                </button>
                <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Save
                </button>
              </>
            ) : (
              <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded">
                Update
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

export default Organization