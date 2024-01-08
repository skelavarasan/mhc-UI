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










