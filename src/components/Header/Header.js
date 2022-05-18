import React from 'react'
import HeaderLogo from './HeaderLogo';
import { faSignOutAlt, faQuestion, faThumbsUp } from '@fortawesome/fontawesome-free-solid';
import { PopupMenu } from'./../../components';
import { useSelector } from 'react-redux';
import './header.css';

export default function Header(props) {
  const { phoneNumber, avatarImage } = props;
  // const avatar = avatarImage ? `./${avatarImage}`: './images/no-logo.png';
  const avatar = avatarImage ? `./${avatarImage}` : './images/user-1.jpg';

  const profileName = useSelector((store) => store.profile.profile.name);

  return (
    <header>
      <div className="f-container d-flex d-flex-cb w-100">
        <HeaderLogo
          phoneNumber={phoneNumber}
          imageTitle="МК ЭнергоПлюс"
          image="mk-energo-100x100.png"
        />
        <ul className="header__menu">
          <li className="header__menu-item">
            <PopupMenu
              title="Информация"
              items={[
                {
                  title: 'Инструкция пользователя',
                  url: '/user-help',
                  delimiter: false,
                  icon: faQuestion,
                },
                {
                  title: 'Согласие на обработку персональных данных',
                  url: '/q',
                  delimiter: false,
                  icon: faThumbsUp,
                },
              ]}
            />
          </li>
          <li className="header__menu-item">
            <PopupMenu
              title={profileName}
              avatar={avatar}
              items={[
                { title: 'Страница авторизации', url: '/auth', delimiter: false, icon: null },
                { title: 'Страница 404', url: '/z', delimiter: false, icon: null },
                { title: 'Профиль клиента', url: '/profile', delimiter: false, icon: null },
                { title: 'Админ-панель', url: '/board', delimiter: true, icon: null },
                { title: 'Выход', url: '/board', delimiter: true, icon: faSignOutAlt },
              ]}
            />
          </li>
        </ul>
      </div>
    </header>
  );
}
