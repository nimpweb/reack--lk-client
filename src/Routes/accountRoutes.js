import MonitorPage from './../pages/Monitor/Monitor';
import SettingsPage from './../pages/Account/Settings';
import BoardNavBar from './../components/BoardNavBar/index';
import Sidebar from './../components/Sidebar/Sidebar';
import ProfilePage from './../pages/Profile/index';
import SupportPage from '../pages/Support';


export const accountRoutes = [
  { 
    Path: '/monitor',
    Component: MonitorPage,
    Title: 'Монитор',
    Header: BoardNavBar,
    Sidebar: Sidebar,
    authRequired: false
  },
  { 
    Path: '/settings',
    Component: SettingsPage,
    Title: 'Настройки',
    Header: BoardNavBar,
    Sidebar: Sidebar,
    authRequired: false
  },
  { 
    Path: '/profile',
    Component: ProfilePage,
    Title: 'Профиль пользователя',
    Header: BoardNavBar,
    Sidebar: Sidebar,
    authRequired: false
  },
  { 
    Path: '/support',
    Component: SupportPage,
    Title: 'Техническая поддержка',
    Header: BoardNavBar,
    Sidebar: Sidebar,
    authRequired: false
  },
  

];
