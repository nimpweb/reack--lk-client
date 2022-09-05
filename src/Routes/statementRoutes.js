import BoardNavBar from './../components/BoardNavBar/index';
import Sidebar from './../components/Sidebar/Sidebar';
import Statement from './../pages/Statement/Statement';

export const statementRoutes = [
  {
    Path: '/statement',
    Component: Statement,
    Header: BoardNavBar,
    Sidebar: Sidebar,
    authRequired: true
  }
]