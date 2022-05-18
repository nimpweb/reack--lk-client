import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Page } from '../../components/ui';
import ProfilePage from '../../pages/ProfilePage';
import './board.scss';

export default function Board() {
  return (
    <div className="page">
      <Sidebar />
      <div className="content">
        <Page>
          <ProfilePage title="Профиль клиента" />
        </Page>
      </div>
    </div>
  );
}
