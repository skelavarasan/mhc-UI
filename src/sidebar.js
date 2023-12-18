import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sidebarData } from './sidebarData';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar flex flex-col items-center w-64 bg-gray-800 text-white">
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
              <div className="flex-1">
                {item.title}
              </div>
            </Link>
            {item.submenu && (
              <ul className="submenu w-full">
                {item.submenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className={`row w-full ${location.pathname === subItem.link ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                  >
                    <Link to={subItem.link} className="flex items-center p-4 space-x-4 text-yellow-500">
                      <div className="w-8 h-8 flex items-center justify-center">
                        {subItem.icon}
                      </div>
                      <div className="flex-1">
                        {subItem.title}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
