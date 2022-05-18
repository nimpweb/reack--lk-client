import LandingPage from '../pages/Landing/Main'
import LandingClientsPage from './../pages/Landing/Clients';
import LandingLawPage from './../pages/Landing/Law';
import InstructionsPage from './../pages/Instructions/index';
import BoardNavBar from './../components/BoardNavBar/index';

export const landingRoutes = [
  { 
    Path: '/',
    Component: LandingPage,
    Title: '',
    Header: null,
    Sidebar: null,
    authRequired: false
  },
  { 
  Path: '/clients',
  Component: LandingClientsPage,
  Title: '',
  Header: null,
  Sidebar: null,
  authRequired: false
  },
  { 
  Path: '/law',
  Component: LandingLawPage,
  Title: '',
  Header: null,
  Sidebar: null,
  authRequired: false
  },
  {
    Path: '/instruction',
    Component: InstructionsPage,
    Title: '',
    Header: BoardNavBar,
    Sidebar: null,
    authRequired: false
  }
]
