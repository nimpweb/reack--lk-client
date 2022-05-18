import AppealsListPage from './../pages/AppealsList/index';
import BoardNavBar from './../components/BoardNavBar/index';
import Sidebar from './../components/Sidebar/Sidebar';

export const appealRoutes = [
  { 
    Path: '/appeals',
    Component: AppealsListPage,
    Title: 'Список обращений',
    Header: BoardNavBar,
    Sidebar: Sidebar,
    authRequired: false
  },
]