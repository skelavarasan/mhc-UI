// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { generateSidebarData, sidebarData } from './sidebarData';
// import { FaBars, FaTimes } from 'react-icons/fa';

// function Sidebar() {
//   const location = useLocation();
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

//   const handleToggleSidebar = () => {
//     setIsSidebarCollapsed(!isSidebarCollapsed);
//   };

//   const handleSignOut = () => {
//     console.log('Signing out...');
//   };

//   return (
//     <div className={`sidebar flex flex-col items-center ${isSidebarCollapsed ? 'w-16' : 'w-64'} bg-gray-800 text-white`}>
//       <div className="toggle-button" onClick={handleToggleSidebar}>
//         {isSidebarCollapsed ? <FaBars /> : <FaTimes />}
//       </div>
//       <ul className="sidebarlist w-full">
//         {generateSidebarData.map((item, index) => (
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
//             {item.submenu && (
//               <ul className="submenu w-full">
//                 {item.submenu.map((subItem, subIndex) => (
//                   <li
//                     key={subIndex}
//                     className={`row w-full ${location.pathname === subItem.link ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
//                   >
//                     <Link to={subItem.link} className="flex items-center p-4 space-x-4 text-yellow-500">
//                       <div className="w-8 h-8 flex items-center justify-center">
//                         {subItem.icon}
//                       </div>
//                       <div className={`flex-1 ${isSidebarCollapsed ? 'hidden' : 'block'}`}>
//                         {subItem.title}
//                       </div>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* Sign Out Button */}
//       <button
//         className="mt-auto bg-red-500 hover:bg-red-600 p-4 text-white w-full text-center"
//         style={{height:'50px'}}
//         onClick={handleSignOut}
//       >
//         Sign Out
//       </button>
//     </div>
//   );
// }

// export default Sidebar;






// import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaThList
// }from "react-icons/fa";
// import { NavLink } from 'react-router-dom';
// import './sidebar.css'


// const Sidebar = ({children}) => {
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[
//         {
//             path:"/org",
//             name:"Organization Details",
//             icon:<FaTh/>
//         },
//         {
//             path:"/about",
//             name:"Access Control",
//             icon:<FaUserAlt/>
//         },
    
//     ]
//     return (
        // <div className="container">
        //    <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
        //        <div className="top_section">
        //            <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Mettler Health</h1>
        //            <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
        //                <FaBars onClick={toggle}/>
        //            </div>
//                </div>
//                {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                            <div className="icon">{item.icon}</div>
//                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//            </div>
//            <main>{children}</main>
//         </div>
//     );
// };

// export default Sidebar;




























import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { generateSidebarData } from './sidebarData';
import { FaBars, FaTimes } from 'react-icons/fa';

function Sidebar({ loggedInUserId }) {
  const location = useLocation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleSignOut = () => {
    console.log('Signing out...');
    // Perform sign-out logic here
  };

  const sidebarData = generateSidebarData(loggedInUserId);

  return (
    <div className={`sidebar flex flex-col items-center ${isSidebarCollapsed ? 'w-16' : 'w-64'} bg-gray-800 text-white`}>
      <div className="toggle-button" onClick={handleToggleSidebar}>
        {isSidebarCollapsed ? <FaBars /> : <FaTimes />}
      </div>
      <ul className="sidebarlist w-full">
        {sidebarData.map((item, index) => (
          <li
            key={index}
            className={`row w-full ${location.pathname === item.link ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
          >
            <Link to={item.link} className="flex items-center p-4 space-x-4 text-yellow-500">
              <div className="w-8 h-8 flex items-center justify-center">
                {item.icon}
              </div>
              <div className={`flex-1 ${isSidebarCollapsed ? 'hidden' : 'block'}`}>
                {item.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Sign Out Button */}
      <button
        className="mt-auto bg-red-500 hover:bg-red-600 p-4 text-white w-full text-center"
        style={{ height: '50px' }}
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Sidebar;

