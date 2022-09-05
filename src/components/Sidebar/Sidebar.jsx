import React from 'react'
import { LiveHelp, Monitor, ViewStream, Person, Logout, Group, Settings, SortByAlpha, Sms, Payment, LocationCity, Backup} from '@mui/icons-material';

import './sidebar.css';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar( {user = { role: 'root' } }) {
  const location = useLocation();
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Личный кабинет</h3>
            <ul className="sidebarList">
              { (user.role === 'admin' || user.role === 'root') && (<li>
                <Link className={`sidebarListItem ${location.pathname === '/monitor' && ' active'}`} to="/monitor">
                  <Monitor className="sidebarIcon" /> Монитор
                </Link>
              </li>) }
              
              <li>
                <Link  to="/orders" className={`sidebarListItem ${location.pathname === '/orders' && ' active'}`}>
                <ViewStream className="sidebarIcon" /> Заявки
                <span className="sidebarListItemMessages">1701</span>
                </Link>
              </li>
              <li>
                <Link  to="/statement" className={`sidebarListItem ${location.pathname === '/statement' && ' active'}`}>
                <ViewStream className="sidebarIcon" /> Передача показаний
                </Link>
              </li>
              <li><Link className="sidebarListItem" to="/appeals"><Sms className="sidebarIcon" /> Обращения <span className="sidebarListItemMessages">7</span></Link></li>
              <li><Link className={`sidebarListItem ${location.pathname === '/profile' && ' active'}`} to="/profile"><Person className="sidebarIcon" /> Профиль</Link></li>
            </ul>
          </div>
          {user.role === 'root' && (<div className="sidebarMenu">
            <h3 className="sidebarTitle">Справочники</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <SortByAlpha className="sidebarIcon" /> Список СНТ
              </li>
              <li className="sidebarListItem">
                <SortByAlpha className="sidebarIcon" /> Гарантирующие поставщики
              </li>
              <li>
                <Link to="/regions" className={`sidebarListItem ${location.pathname === '/regions' && ' active'}`}>
                  <SortByAlpha className="sidebarIcon" /> Статусы заявок
                </Link>
              </li>
              <li>
                <Link to="/regions" className={`sidebarListItem ${location.pathname === '/regions' && ' active'}`}>
                  <SortByAlpha className="sidebarIcon" /> Регионы
                </Link>
              </li>
              <li>
                <Link to="/dictionaries/sk" className={`sidebarListItem ${location.pathname === '/dictionaries/sk' && ' active'}`}>
                  <LocationCity className="sidebarIcon" /> Сетевые компании
                </Link>
              </li>
            </ul>
          </div>)}
          
          {user.role === 'root' &&  (
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Администрирование</h3>
            <ul className="sidebarList">
              <li>
                <Link to="/users" className={`sidebarListItem ${location.pathname === '/users' && ' active'}`}><Group className="sidebarIcon" /> Пользователи</Link>
              </li>
              <li>
                <Link className={`sidebarListItem ${location.pathname === '/upload' && ' active'}`} to="/upload"><Backup className="sidebarIcon" /> Выгрузки</Link>
              </li>
              <li>
                <Link className={`sidebarListItem ${location.pathname === '/settings' && ' active'}`} to="/settings"><Settings className="sidebarIcon" /> Настройки</Link>
              </li>
              <li>
                <Link className={`sidebarListItem ${location.pathname === '/payment' && ' active'}`} to="/payment"><Payment className="sidebarIcon" /> Оплата</Link>
              </li>

              <li>
                <Link to="/support" className={`sidebarListItem ${location.pathname === '/support' && ' active'}`}>
                  <LiveHelp className="sidebarIcon" /> Техподдержка
                  <span className="sidebarListItemMessages">2</span>
                </Link>
              </li>
            </ul>
          </div>
          )}

          <div className="sidebarMenu">
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <Logout className="sidebarIcon" /> Выйти
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}
