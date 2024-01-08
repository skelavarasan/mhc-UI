// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { generateSidebarData } from './sidebarData';
// import { FaBars, FaTimes } from 'react-icons/fa';

// function Sidebar({ loggedInUserId }) {
//   const location = useLocation();
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

//   const handleToggleSidebar = () => {
//     setIsSidebarCollapsed(!isSidebarCollapsed);
//   };

//   const handleSignOut = () => {
//     console.log('Signing out...');
//   };

//   const sidebarData = generateSidebarData(loggedInUserId);

//   return (
//     <div className={`sidebar flex flex-col items-center ${isSidebarCollapsed ? 'w-16' : 'w-64'} bg-gray-800 text-white`}>
//       <div className="toggle-button" onClick={handleToggleSidebar}
//       style={{left:'10px'}}
//       >
//         {isSidebarCollapsed ? <FaBars /> : <FaTimes />}
//       </div>
//       <ul className="sidebarlist w-full">
//         {sidebarData.map((item, index) => (
//           <li
//             key={index}
//             className={`row w-full ${location.pathname === item.link ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
//           >
//             <Link to={item.link} className="flex items-center p-4 space-x-4 text-yellow-500">
//               <div className="w-8 h-8 flex items-center justify-center">
//                 {item.icon}
//               </div>
//               <div className={`flex-1 ${isSidebarCollapsed ? 'hidden' : 'block'}`}>
//                 {item.title}
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <button
//         className="mt-auto bg-red-500 hover:bg-red-600 p-4 text-white w-full text-center"
//         style={{ height: '50px' }}
//         onClick={handleSignOut}
//       >
//         Sign Out
//       </button>
//     </div>
//   );
// }

// export default Sidebar;










import React, { useState } from "react";
import './sidebar.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

function Sidebar(){


const[navCollapse,setNavCollapse] = useState(false);



  return(
    <div className="container">
        <nav className="nav">
          <div className="logo">
          <h2>Mettler health</h2>
          <i className="bi bi-justify" onClick={e => setNavCollapse(!navCollapse)}></i>
          </div>
          <ul>
            <li>Home</li>
            <li>New Blog</li>
          </ul>
        </nav>


        <div className="sidebar_content">


        <div className={`sidebar-container${navCollapse ? "navCollapse" : ""}`}>
          <div className="nav-option option1">
             <i className="bi bi-speedometer2"></i>
             <h3>Dashboard</h3>
          </div>

          <div className="nav-option option1">
             <i className="bi bi-clipboard-pulse"></i>
             <h3>Articles</h3>
          </div>

          <div className="nav-option option1">
             <i className="bi bi-chat-square-text"></i>
             <h3>Report</h3>
          </div>

          <div className="nav-option option1">
             <i className="bi bi-gear"></i>
             <h3>Settings</h3>
          </div>


          <div className="nav-option option1">
             <i className="bi bi-power"></i>
             <h3>Log Out</h3>
          </div>

          </div>


        </div>

    </div>
  );
}

export default Sidebar;