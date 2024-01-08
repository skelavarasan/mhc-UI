import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';

function AccessController() {
  const [accessData, setAccessData] = useState([]);
  const [orgData, setOrgData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch access control data
        const accessResponse = await fetch('http://47.32.254.89:7000/api/access/getAll');
        const accessResult = await accessResponse.json();
        console.log('Access API Response:', accessResult);
        setAccessData(accessResult.data);

        // Fetch organization data
        const orgResponse = await fetch('http://47.32.254.89:7000/api/org/getAll');
        const orgResult = await orgResponse.json();
        console.log('Org API Response:', orgResult);
        setOrgData(orgResult.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getOrgNameById = (orgId) => {
    const org = orgData.find((item) => item.id === orgId);
    return org ? org.organizationdetails[0].name : 'N/A';
  };

  return (
    <div className="organization-container bg-gray-100 min-h-screen flex">
      <Sidebar/>

    <div className="flex justify-center items-center h-screen w-150">
      <div>
        <h1 className="text-2xl mb-4">Access controller</h1>
        {Array.isArray(accessData) && accessData.length > 0 ? (
          <table className="border border-collapse border-gray-800">
            <thead>
              <tr>
                <th className="border p-2">orgName</th>
                <th className="border p-2">q15</th>
                <th className="border p-2">proximityVerification</th>
                <th className="border p-2">geoFencing</th>
              </tr>
            </thead>
            <tbody>
              {accessData.map((item) => (
                <tr key={item.id}>
                  <td className="border p-2">{getOrgNameById(item.orgName)}</td>
                  <td className="border p-2">{item.q15}</td>
                  <td className="border p-2">{item.pv}</td>
                  <td className="border p-2">{item.gf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="mt-4">Loading...</p>
        )}
      </div>
    </div>
    </div>
  );
}

export default AccessController;
