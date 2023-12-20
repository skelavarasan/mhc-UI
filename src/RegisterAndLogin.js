// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import MailIcon from '@mui/icons-material/Mail';
// import PasswordIcon from '@mui/icons-material/Key';
// import log from './assests/image.png';
// import { Link } from 'react-router-dom';
// import './RegisterAndLogin.css'

// function RegisterAndLogin() {
//   const [userInput, setUserInput] = useState('');
//   const [passwordInput, setPasswordInput] = useState('');
//   const [selectedOrganization, setSelectedOrganization] = useState('Select-Organization');
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [organizationData, setOrganizationData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [loggedInUserId, setLoggedInUserId] = useState(null);


//   const history = useNavigate();

//   useEffect(() => {
//     const fetchOrganizationData = async () => {
//       try {
//         const response = await fetch('http://47.32.254.89:7000/api/org/getAll');
//         const data = await response.json();
//         setOrganizationData(data.data);
//         console.log('Organization Data:', data.data); 
//       } catch (error) {
//         console.error('Error fetching organization data:', error);
//       }
//     };

//     fetchOrganizationData();
//   }, []);

//   const handleEmailSubmit = async (e) => {
//     e.preventDefault();

//     if (!userInput || !passwordInput || selectedOrganization === 'Select-Organization') {
//       console.error('Please fill in all fields');
//       return;
//     }

//     // Log the selected organization
//     console.log('Selected Organization:', selectedOrganization);

//     // Adjust organization retrieval based on your data structure
//     const organization = organizationData.find((org) => org.id === selectedOrganization);

//     try {
//       const response = await fetch('http://47.32.254.89:7000/api/user/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username: userInput,
//           password: passwordInput,
//           organization: organization.id, // Use organization.id here
//         }),
//       });

//       console.log('Response:', response);

//       const responseData = await response.json();

//       console.log('Response Data:', responseData);

//       if (response.ok) {
//         if (responseData.message.code === 'MHC - 0200') {
//           setLoggedInUserId(responseData.userId);
//           localStorage.setItem('selectedOrganization', selectedOrganization);
//           history('/passcode');
//         } else {
//           console.error('Authentication failed:', responseData.message);
//         }
//       } else {
//         console.error('Error during authentication:', responseData.message);
//       }
//     } catch (error) {
//       console.error('Error during authentication:', error);
//     }
//   };

//   const handleOrganizationClick = (organizationName) => {
//     console.log('Clicked organization name:', organizationName);
//   };

//   const handleRememberMeChange = () => {
//     setRememberMe(!rememberMe);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
//       <img src={log} style={{ height: '670px', width: '70%' }} alt="Logo" />

//       <div className="w-96 p-6 bg-white rounded shadow text-center flex flex-col items-center pr-4 " style={{ marginBottom: '160px' }}>
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <h1 className="text-2xl font-semibold text-blue-700 mb-4">Hello!</h1>
//           <h2 className="text-xl font-semibold text-blue-700 mb-4">Log in To your Account</h2>
//         </div>

//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <form onSubmit={handleEmailSubmit} className="space-y-4">
//             <div className="flex items-center space-x-2 mx-auto" style={{ border: '1px solid black' }}>
//               <div className="relative flex">
//                 <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="User Name"
//                   value={userInput}
//                   onChange={(e) => setUserInput(e.target.value)}
//                   style={{ width: '290px', height: '40px' }}
//                   className="pl-10 p-3 border focus:outline-none focus:ring focus:ring-blue-300 rounded"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center space-x-2 mx-auto" style={{ border: '1px solid black' }}>
//               <div className="relative flex">
//                 <PasswordIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   name="password"
//                   placeholder="Password"
//                   value={passwordInput}
//                   onChange={(e) => setPasswordInput(e.target.value)}
//                   style={{ width: '290px', height: '40px' }}
//                   className="pl-10 p-3 border focus:outline-none focus:ring focus:ring-blue-300 rounded"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute top-1/2 right-2 transform -translate-y-1/2 w-7 h-7 cursor-pointer text-blue-600"
//                 >
//                   👁️
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center space-x-2 mx-auto">
//             <select
//   value={selectedOrganization}
//   onChange={(e) => {
//     setSelectedOrganization(e.target.value);
//     handleOrganizationClick(e.target.value);
//   }}
//   className="w-full p-3 border focus:outline-none focus:ring focus:ring-blue-300 rounded"
//   style={{ width: '290px', height: '46px' }}
//   required
// >
//   <option value="Select-Organization">- Select Organization -</option>
//   {organizationData.map((org) => (
//     <option key={org.id} value={org.id}>
//       {org.organizationdetails && org.organizationdetails[0] && org.organizationdetails[0].name
//         ? org.organizationdetails[0].name
//         : "No Name"}
//     </option>
//   ))}
// </select>


//             </div>

//             <div className="flex items-center space-x-2 mx-auto">
//               <input
//                 type="checkbox"
//                 id="rememberMe"
//                 checked={rememberMe}
//                 onChange={handleRememberMeChange}
//                 className="mr-2"
//               />
//               <label htmlFor="rememberMe">Remember Me</label>

//               <div className="text-blue-700">
//                 <Link to="/forgot-password">Forgot Password?</Link>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 text-white bg-green-600 rounded hover:bg-blue-700"
//               style={{ width: '290px', height: '40px' }}
//             >
//               Log In
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default RegisterAndLogin;






















import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import PasswordIcon from '@mui/icons-material/Key';
import log from './assests/image.png';
import { Link } from 'react-router-dom';
import './RegisterAndLogin.css'

function RegisterAndLogin() {
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [selectedOrganization, setSelectedOrganization] = useState('Select-Organization');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [organizationData, setOrganizationData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loggedInUserId, setLoggedInUserId] = useState(null);


  const history = useNavigate();

  useEffect(() => {
    const fetchOrganizationData = async () => {
      try {
        const response = await fetch('http://47.32.254.89:7000/api/org/getAll');
        const data = await response.json();
        setOrganizationData(data.data);
        console.log('Organization Data:', data.data); 
      } catch (error) {
        console.error('Error fetching organization data:', error);
      }
    };

    fetchOrganizationData();
  }, []);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    if (!userInput || !passwordInput || selectedOrganization === 'Select-Organization') {
      console.error('Please fill in all fields');
      return;
    }

    // Adjust organization retrieval based on your data structure
    const organization = organizationData.find((org) => org.id === selectedOrganization);

    try {
      const response = await fetch('http://47.32.254.89:7000/api/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userInput,
          password: passwordInput,
          organization: organization.id,
        }),
      });

      const responseData = await response.json();
      if (response.ok) {
        if (responseData.message.code === 'MHC - 0200') {
          localStorage.setItem('selectedOrganization', selectedOrganization);
          // Pass the selected organization ID to the Passcode component
          history(`/passcode?orgId=${selectedOrganization}`);
        } else {
          console.error('Authentication failed:', responseData.message);
        }
      }
      else {
        console.error('Error during authentication:', responseData.message);
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  const handleOrganizationClick = (organizationName) => {
    console.log('Clicked organization name:', organizationName);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
      <img src={log} style={{ height: '670px', width: '70%' }} alt="Logo" />

      <div className="w-96 p-6 bg-white rounded shadow text-center flex flex-col items-center pr-4 " style={{ marginBottom: '160px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 className="text-2xl font-semibold text-blue-700 mb-4">Hello!</h1>
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Log in To your Account</h2>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="flex items-center space-x-2 mx-auto" style={{ border: '1px solid black' }}>
              <div className="relative flex">
                <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="User Name"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  style={{ width: '290px', height: '40px' }}
                  className="pl-10 p-3 border focus:outline-none focus:ring focus:ring-blue-300 rounded"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2 mx-auto" style={{ border: '1px solid black' }}>
              <div className="relative flex">
                <PasswordIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  style={{ width: '290px', height: '40px' }}
                  className="pl-10 p-3 border focus:outline-none focus:ring focus:ring-blue-300 rounded"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 w-7 h-7 cursor-pointer text-blue-600"
                >
                  👁️
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2 mx-auto">
            <select
  value={selectedOrganization}
  onChange={(e) => {
    setSelectedOrganization(e.target.value);
    handleOrganizationClick(e.target.value);
  }}
  className="w-full p-3 border focus:outline-none focus:ring focus:ring-blue-300 rounded"
  style={{ width: '290px', height: '46px' }}
  required
>
  <option value="Select-Organization">- Select Organization -</option>
  {organizationData.map((org) => (
    <option key={org.id} value={org.id}>
      {org.organizationdetails && org.organizationdetails[0] && org.organizationdetails[0].name
        ? org.organizationdetails[0].name
        : "No Name"}
    </option>
  ))}
</select>


            </div>

            <div className="flex items-center space-x-2 mx-auto">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className="mr-2"
              />
              <label htmlFor="rememberMe">Remember Me</label>

              <div className="text-blue-700">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 text-white bg-green-600 rounded hover:bg-blue-700"
              style={{ width: '290px', height: '40px' }}
            >
              Log In
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default RegisterAndLogin;
