import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AdminIcon from '@mui/icons-material/AdminPanelSettings';

export const generateSidebarData = (loggedInUserId) => [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: '/home',
  },
  {
    title: "Organization Details",
    icon: <AdminIcon />,
    link: loggedInUserId ? `/organization/user/${loggedInUserId}` : '/organization',
  },
  {
    title: "Access Control",
    icon: <AnalyticsIcon />,
    link: "/access-control",
  },
];











// import React from 'react';
// import HomeIcon from '@mui/icons-material/Home';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
// import AdminIcon from '@mui/icons-material/AdminPanelSettings';
// import { useNavigate } from 'react-router-dom';

// export const generateSidebarData = (loggedInUserId) => {
//   const navigate = useNavigate();

//   return [
//     {
//       title: "Home",
//       icon: <HomeIcon />,
//       link: '/home',
//     },
//     {
//       title: "Organization Details",
//       icon: <AdminIcon />,
//       onClick: () => {
//         if (loggedInUserId) {
//           // Assuming organizationInfo is available in the component state
//           // and it contains the required information, like id
//           navigate(`/organization/user/${loggedInUserId}`);
//         } else {
//           console.error('User not logged in or missing organizationInfo');
//         }
//       },
//     },
//     {
//       title: "Access Control",
//       icon: <AnalyticsIcon />,
//       link: "/access-control",
//     },
//   ];
// };
