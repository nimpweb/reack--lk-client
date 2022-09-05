import React from 'react'
import { Card, InputSelect, InputText } from '../../components';
import { Delete, Add, Save, CheckBox, ChangeCircle } from '@mui/icons-material'
import Button from '../../components/ui/Button';
import { Tabs } from '../../components/ui';
import { Common, Notifications, Modules } from '../../components/Pages/Settings';
import { useSelector } from 'react-redux';
import SmtpContainer from './SmtpContainer'

export default function SettingsPage() {

  const {account, pending, error} = useSelector(store => store.account);

  const [smsProviders, setSmsProviders] = React.useState([]);
  const [selectedSmsProvider, setSelectedSmsProvider] = React.useState({});
  const [tabItems, setTabItems] = React.useState([]);

  React.useEffect(() => {
    const func = async () => {

      setSmsProviders([{ id: 1, title: 'SMS.RU', url: 'https://sms.ru' }]);
      setTabItems( [{title: 'Общие',component: Common},{title: 'Уведомления', component: Notifications}, {title: 'Модули', component: Modules}] );

    };
    func();
  }, []);


  return (
    <div className="contentBlock">
      {(tabItems && tabItems.length > 0) && <Tabs selected={1} items={tabItems} /> }
        
    
      {false && (
        <>
        <br />

        <ul className="topNavMenu">
          <li className="navItem">Общее</li>
          <li className="navItem active">Уведомления</li>
          <li className="navItem">Модули</li>
        </ul>
        <br />

        <Card title="Уведомления по заявкам будут приходить">
          {account.emailList &&
            account.emailList.map((email, index) => (
              <div key={index} style={{ display: 'flex', width: '100%', marginTop: '10px' }}>
                <div style={{ display: 'flex', width: '100%' }}>
                  <InputText style={{ width: '100%' }} value={email} />
                </div>
                <div style={{ display: 'flex' }}>
                  <Button
                    disabled
                    variant="transparentRed"
                    style={{ marginLeft: '10px' }}
                    onClick={() => alert('clicked')}>
                    <Delete />
                  </Button>
                </div>
              </div>
            ))}
          <hr />
          <div className="d-flex d-flex-cb">
            <Button variant="default">
              <Add />
              &nbsp;&nbsp;<span>Добавить</span>
            </Button>
            <Button variant="success">
              <Save />
              &nbsp;&nbsp;<span>Сохранить</span>
            </Button>
          </div>
        </Card>

       <SmtpContainer /> 

        <Card title="Настройка отправки SMS-сообщений">
          <div>
            <InputSelect
              w100
              style={{ width: '100%' }}
              items={smsProviders}
              onChange={(e) => {
                setSelectedSmsProvider(smsProviders.find((el) => el.id === Number(e)));
              }}
            />
          </div>
          {selectedSmsProvider && (
            <div style={{ marginTop: '10px' }}>
              <InputText placeholder="Укажите API-ключ" w100 />
              <div
                style={{
                  marginTop: '10px',
                  padding: '10px',
                  background: 'rgba(200, 200, 200, .2)',
                }}>
                <p>
                  Если у Вас нет профиля, то Вы можете его зарегистрировать по ссылке, а также
                  ознакомиться с условиями предоставления услуги
                </p>
                <a target="_blank" href={selectedSmsProvider.url} rel="noreferrer">
                  {selectedSmsProvider.url}
                </a>
              </div>
            </div>
          )}
        </Card>
        </>
      )}
    </div>

  )
}
