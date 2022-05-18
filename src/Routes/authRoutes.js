import { AuthPage } from '../pages';
import LogoutPage from './../pages/LogoutPage';

export const authRoutes = [
  { 
    Path: '/auth',
    Component: AuthPage,
    Title: 'Авторизация в системе',
    Header: null,
    Sidebar: null,
    authRequired: false
  },
  { 
    Path: '/logout',
    Component: LogoutPage,
    Title: '',
    Header: null,
    Sidebar: null,
    authRequired: false
  },
  
];
