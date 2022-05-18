import NewsPage from './../pages/News';
import BoardNavBar from './../components/BoardNavBar/index';
import Sidebar from './../components/Sidebar/Sidebar';


export const newsRoutes = [
  { 
    Path: '/news',
    Component: NewsPage,
    Title: '',
    Header: BoardNavBar,
    Sidebar: Sidebar,
    authRequired: false
  },
];
