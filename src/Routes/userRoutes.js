import UserListPage from './../pages/UserList/index';
import BoardNavBar from './../components/BoardNavBar/index';
import Sidebar from './../components/Sidebar/Sidebar';

export const userRoutes = [
  { 
    Path: '/users',
    Component: UserListPage,
    Title: 'Список пользователей',
    Header: BoardNavBar,
    Sidebar: Sidebar,
    authRequired: false
  },
]