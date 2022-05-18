import OrderCreatePage from './../pages/Order/Create/index';
import OrderListPage from './../pages/Order/List/index';
import BoardNavBar from './../components/BoardNavBar/index';
import Sidebar from './../components/Sidebar/Sidebar';
import OrderDetailPage from './../pages/Order/Detail/index';

export const orderRoutes = [
  { 
    Path: '/orders',
    Component: OrderListPage,
    Title: 'Перечень Ваших заявок',
    Header: BoardNavBar,
    Sidebar: Sidebar,
    authRequired: false
  },
  
  { 
    Path: '/order/create',
    Component: OrderCreatePage,
    Title: '',
    Header: BoardNavBar,
    Sidebar: Sidebar,
    authRequired: false
  },
  
  { 
    Path: '/order/detail/:id',
    Component: OrderDetailPage,
    Title: '',
    Header: BoardNavBar,
    Sidebar: Sidebar,
    authRequired: false
  },

  
];
