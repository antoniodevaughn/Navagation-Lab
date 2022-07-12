import React from "react";
import CottageIcon from '@mui/icons-material/Cottage';
import EmailIcon from '@mui/icons-material/Email';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

export const SidebarData=[
    {
        title:"Home",
        icon:<CottageIcon/>,
        link:"/Home"
    },
    {
        title:"Email",
        icon:<EmailIcon/>,
        link:"/Email"
    },
    {
        title:"Analytics",
        icon:<AnalyticsIcon/>,
        link:"/Analytics"
    },
    {
        title:"Dashboard",
        icon:<DashboardIcon/>,
        link:"/Dashboard"
    },
    {
        title:"Friends",
        icons:<GroupIcon/>,
        link:"/Friends"
    },
    {
        title:"Images",
        icon:<ImageSearchIcon/>,
        link:"/Images"
    }
]