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
    organizationType: '',
    organizationTin: '',
    organizationNpi: '',
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
            <div className="bg-white rounded shadow p-2 mb-2">
  
            
          </div>
          ) : (
            <div className=" p-6 mb-4">
              <div className="input-box-container flex flex-wrap" style={{justifyContent:'space-between'}}>

              <InputBox id="organizationType"  label="Organization Type" placeholder={organizationInfo.organizationdetails[0].type} value={organizationInfo.organizationdetails[0].type} readOnly={false} onChange={() => {}} />
                <InputBox id="organizationTin"   label="Organization TIN" placeholder={organizationInfo.organizationdetails[0].tin} value={organizationInfo.organizationdetails[0].tin} readOnly={false} onChange={() => {}} />
                <InputBox id="organizationNpi"   label="Organization NPI" placeholder="Organization NPI" value={organizationInfo.organizationdetails[0].npi} readOnly={false} onChange={() => {}} />

              </div>


              <div className="input-box-container flex flex-wrap"style={{justifyContent:'space-between'}}>
              <InputBox id="email"  label="E-Mail" placeholder="E-mail" value={editedOrganizationInfo.email} readOnly={false} onChange={handleChange} />
              <InputBox id="contact" label='Contact' placeholder="Contact" value={editedOrganizationInfo.contact} readOnly={false} onChange={handleChange} />
              <InputBox id="websiteUrl" label="Website URL" placeholder="Website URL" value={organizationInfo.websiteUrl} readOnly={false} onChange={handleChange} />

              </div>
              
              <div className="input-box-container flex flex-wrap"style={{justifyContent:'space-between'}}>
                <InputBox id="PocName" label="Point Of Contact Name" placeholder="Point Of Contact Name" value={organizationInfo.pointofcontact[0].name} readOnly={false} onChange={handleChange} />
                <InputBox id="PocEmail" label="Point Of Contact E-Mail" placeholder="Point Of Contact Email" value={organizationInfo.pointofcontact[0].email} readOnly={false} onChange={handleChange} />
                <InputBox id="PocPhno" label="Point Of Contact Phone" placeholder="Point Of Contact Phone-Number" value={organizationInfo.pointofcontact[0].phoneNumber} readOnly={false} onChange={handleChange} />
              </div>

              <div className="input-box-container flex flex-wrap"style={{justifyContent:'space-between'}}>
                <InputBox id="HpoName" label="HIPAA Privacy Officer Name" placeholder="HIPAA Privacy Officer Name" value={organizationInfo.hippaprivacyofficer[0].name} readOnly={false} onChange={handleChange} />
                <InputBox id="HpoEmail" label="HIPAA Privacy Officer E-Mail" placeholder="HIPAA Privacy Officer Email" value={organizationInfo.hippaprivacyofficer[0].email} readOnly={false} onChange={handleChange} />
                <InputBox id="HpoMobile" label="HIPAA Privacy Officer Number" placeholder="HIPAA Privacy Officer-Number" value={organizationInfo.hippaprivacyofficer[0].mobile} readOnly={false} onChange={handleChange} />
              </div>


              <div className="input-box-container flex flex-wrap"style={{justifyContent:'space-between'}}>
                <InputBox id="HsoName" label="HIPAA Security Officer Name" placeholder="HIPAA Security Officer Name" value={organizationInfo.hippassecurityofficer[0].name} readOnly={true} onChange={handleChange} />
                <InputBox id="HsoEmail" label="HIPAA Security Officer E-Mail" placeholder="HIPAA Security Officer Email" value={organizationInfo.hippassecurityofficer[0].email} readOnly={true} onChange={handleChange} />
                <InputBox id="HsoMobile" label="HIPAA Security Officer Number" placeholder="HIPAA Security Officer-Number" value={organizationInfo.hippassecurityofficer[0].mobile} readOnly={true} onChange={handleChange} />
              </div>
              
            </div>
          )}

          <div className="flex justify-between">
            {isEditMode ? (
              <>
    
              </>
            ) : (<>
            <div style={{ display: 'flex',marginLeft:'550px', gap: '6px',  }}>
              <button onClick={()=>( window.location.reload())} className="bg-gray-500 text-white px-4 py-2 rounded">       
                 cancel
            </button>
            <button onClick={()=>alert("Organization Updated Successfully")} className="bg-blue-500 text-white px-4 py-2 rounded">
              save
            </button>
            </div>
</>
            
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