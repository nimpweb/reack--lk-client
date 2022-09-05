import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Copyright } from './components';
import {
  AuthPage,
  Page404,
  UserHelpPage,
  OrderStepsPage,
  ClientNewsPage,
  ClientAppealListPage,
  ClientOrderListPage,
  ClientOrderDetailPage,
  CreateNetworkCompanyPage,
  PaymentPage,
  ActivateUserPage,
  AccountListPage,
  AccountDetailPage,
  AccountAddPage,
  RegionListPage,
  AccountSettingsPage,
  MonitorPage,
  OrderCreatePage,
  OrderDetailPage,
  InstructionsPage,
  LogoutPage,
} from './pages';

import { MainPage, ClientsPage, LawPage } from './pages/Landing';

import VCode from './components/VCode';
import Board from './pages/Board';
import Sidebar from './components/Sidebar/Sidebar';
import ProfilePage from './pages/ProfilePage';
import { Page } from './components/ui';
import OrderListPage from './pages/OrderListPage';
import AppealsListPage from './pages/AppealsList';
import UserListPage from './pages/UserList';
import TechPage from './pages/TechPage';

import BoardNavBar from './components/BoardNavBar';
import Profile from './components/Pages/Profile/Profile';

export default function App() {
  const isSidebar = true

  const routes = [
    { title: '', path: '/', component: MainPage, isSidebar: false }
  ];


  return (
    <Router>
      <Switch>
        {
          routes.map( route => {
            return (
              <Route
                key={route.path} 
                exact 
                path={route.path} 
                render={ () => <Page 
                    sidebar={route.isSidebar ? Sidebar : null} 
                    title={route.title}>
                    {() => route.component}
                  </Page> 
                }
              />
            )
          })
        }
      </Switch>
    </Router>

  )
  return (
    <Router>
      <Page sidebar={isSidebar ? Sidebar : null} title="Профиль">

        <Switch>
          <Route 
            path="/profile2" 
            render={ () => <Profile /> } 
          />

          <Route 
            path="/" 
            exact
            render={ () => <MainPage /> }
          />
        </Switch>

          
      </Page>
      
      
      <Switch>
        <Route path="/clients" exact>
          <ClientsPage />
        </Route>
        <Route path="/law" exact>
          <LawPage />
        </Route>

        <Route path="/board">
          <Board />
        </Route>
        <Route path="/user/activate">
          <ActivateUserPage />
        </Route>

        <Route path="/instructions" exact>
          <BoardNavBar />
          <Page title="Инструкция" sidebar={Sidebar}>
            <InstructionsPage />
          </Page>
        </Route>

        <Route path="/monitor" exact>
          <BoardNavBar />
          <Page title="Монитор изменений по сетевой компании" sidebar={Sidebar}>
            <MonitorPage />
          </Page>
        </Route>
        <Route path="/account/list" exact>
          <Page title="Список сетевых компаний" sidebar={Sidebar}>
            <AccountListPage />
          </Page>
        </Route>
        <Route path="/account" exact>
          <Page title="Список сетевых компаний" sidebar={Sidebar}>
            <AccountListPage />
          </Page>
        </Route>
        <Route path="/account/detail" exact>
          <Page sidebar={Sidebar}>
            <AccountDetailPage />
          </Page>
        </Route>
        <Route path="/account/add" exact>
          <Page title="Новая сетевая компания" sidebar={Sidebar} goBack={true}>
            <AccountAddPage />
          </Page>
        </Route>
        <Route path="/regions" exact>
          <Page title="Справочник регионов" sidebar={Sidebar} goBack={true}>
            <RegionListPage />
          </Page>
        </Route>

        <Route path="/order/status" exact>
          <Page title="Справочник статусов" sidebar={Sidebar} goBack={true}>
            <RegionListPage />
          </Page>
        </Route>
        <Route path="/order/create" exact>
          <BoardNavBar />
          <Page
            // title="Создание новой заявки на технологическое присоединение"
            sidebar={Sidebar}
            goBack={true}>
            <OrderCreatePage />
          </Page>
        </Route>
        <Route path="/order-old/create" exact>
          <Page
            // title="Создание новой заявки на технологическое присоединение"
            sidebar={Sidebar}
            goBack={true}>
            <OrderStepsPage step={1} />
          </Page>
        </Route>
        <Route path="/order/list" exact>
          <ClientOrderListPage step={1} />
        </Route>
        <Route path="/order/detail/:id">
          <BoardNavBar />
          <Page sidebar={Sidebar} goBack={true}>
            <OrderDetailPage />
          </Page>
        </Route>
        <Route path="/order-old/detail" exact>
          <ClientOrderDetailPage step={1} />
        </Route>

        <Route path="/appeal/list" exact>
          <ClientAppealListPage />
        </Route>
        <Route path="/user-help" exact>
          <UserHelpPage />
        </Route>

        <Route path="/auth" exact>
          <AuthPage />
        </Route>
        <Route path="/logout" exact>
          <LogoutPage />
        </Route>

        <Route path="/profile" exact>
          <BoardNavBar />
          <Page title="Профиль клиента" sidebar={Sidebar}>
            <ProfilePage />
          </Page>
        </Route>
        <Route path="/create-network-company">
          <CreateNetworkCompanyPage />
        </Route>
        <Route path="/news" exact>
          <ClientNewsPage />
        </Route>

        <Route path="/orders" exact>
          <BoardNavBar />
          <Page title="Заявки" sidebar={Sidebar}>
            <OrderListPage />
          </Page>
        </Route>
        <Route path="/appeals" exact>
          <Page title="Обращения" sidebar={Sidebar}>
            <AppealsListPage />
          </Page>
        </Route>
        <Route path="/users" exact>
          <BoardNavBar />
          <Page title="Список пользователей" sidebar={Sidebar}>
            <UserListPage />
          </Page>
        </Route>
        <Route path="/settings" exact>
          <BoardNavBar />
          <Page title="Настройки акканута" sidebar={Sidebar}>
            <AccountSettingsPage />
          </Page>
        </Route>
        <Route path="/payment" exact>
          <Page title="Оплата" sidebar={Sidebar}>
            <PaymentPage />
          </Page>
        </Route>
        <Route path="/tech" exact>
          <Page title="Техподдержка" sidebar={Sidebar}>
            <TechPage />
          </Page>
        </Route>
        <Route path="/code" exact>
          <VCode validCode={'1111'} />
        </Route>

        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
      <Copyright />
    </Router>
  );
}
