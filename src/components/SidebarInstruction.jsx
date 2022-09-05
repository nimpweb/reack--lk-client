import React from 'react'
import { LiveHelp, MarkEmailUnread, ViewStream, Person, Logout, Group, Settings, SortByAlpha, Sms, Payment, LocationCity, Backup, NotificationsPaused, PictureAsPdf} from '@mui/icons-material';

import './Sidebar/sidebar.css';
import s from '../styles/instruction.module.css'
import { Link, useLocation } from 'react-router-dom';

export default function SidebarInstruction() {
  const location = useLocation()
  const user = {
    role: 'root'
  }
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">

          <div className="sidebarMenu">
            <ul className="sidebarList">
              <li className="sidebarListItem">Добро пожаловать!!!</li>
            </ul>
            <h3 className="sidebarTitle">Настройки системы</h3>
            <ul className="sidebarList">
              <li>
                <Link 
                  className={`sidebarListItem ${location.pathname === '/instruction/admin/smtp-setup' && ' active'}`} 
                  to="/instruction/admin/smtp-setup">
                    <MarkEmailUnread className="sidebarIcon" 
                  /> 
                  Настройка почтовой рассылки
                </Link>
              </li>
              <li className="sidebarListItem">
                <Sms className="sidebarIcon" /> Подключение SMS-рассылки
              </li>
              <li className="sidebarListItem">
                <SortByAlpha className="sidebarIcon" /> Добавление новостей
              </li>
              <li className="sidebarListItem">
                <Group className="sidebarIcon" /> Добавление пользователей
              </li>
              <li className="sidebarListItem">
                <NotificationsPaused className="sidebarIcon" />Настройка уведомлений
              </li>
              
              <li className="sidebarListItem">
                <Backup className="sidebarIcon" /> Выгрузка и настройка выгрузок
              </li>
              <li className="sidebarListItem">
                <Payment className="sidebarIcon" /> Оплата и подключение услуг
              </li>
              
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Подключение системы Раскрытия информации</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <SortByAlpha className="sidebarIcon" />Добавление документов
              </li>
              <li className="sidebarListItem">
                <SortByAlpha className="sidebarIcon" />Формирование списка документов
              </li>
              <li className="sidebarListItem">
                <SortByAlpha className="sidebarIcon" />Добавление нового года
              </li>
            </ul>
          </div>
   

          <Link className={s.downloadFileLink} to="/downloadfile"><PictureAsPdf /> Сохранить электронный вариант</Link>
        </div>
      </div>
  )
}