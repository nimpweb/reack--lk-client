import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Footer, Login, Register } from '../../components/Pages/Auth';
import { Page, Card } from '../../components/ui';
import { localUser, redirectLinkOnAuth } from '../../utils/functions';

import './auth.css';

export default function Auth() {
  const history = useHistory();

  const [activeTab, setActiveTab] = React.useState(0);
  const items = [
    { title: 'Авторизация', component: Login },
    { title: 'Регистрация', component: Register },
  ];
  const handleTabClick = (event) => {
    setActiveTab(+event.target.dataset.index);
  };

  const TabContent = ({ items }) => (
    <section className="tabs">
      <div className="tabs__wrapper">{items[activeTab].component()}</div>
    </section>
  );

  useEffect(() => {
    const user = localUser();
    if (user) {
      history.push(redirectLinkOnAuth());
    }
  }, []);

  return (
    <div style={{ backgroundImage: './images/login_background.png' }}>
      <Page>
        <div className="auth">
          <Card>
            <img src="/images/login.png" alt="login" />
            <div className="auth-wrapper">
              <div className="auth-panel">
                <ul className="auth-tabs">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className={`tab-item ${index === activeTab ? ' selected' : ''}`}
                      onClick={handleTabClick}
                      data-index={index}>
                      {item.title}
                    </li>
                  ))}
                  <li className="tab-slider" role="presentation"></li>
                </ul>
              </div>

              <TabContent items={items} />

              <Footer />
            </div>
          </Card>
        </div>
      </Page>
    </div>
  );
}
