import React from 'react'
import { Button, Card } from '../../ui'
import { Delete, Edit } from '@mui/icons-material'
import SmtpContainer from './SmtpContainer'
import './notifications.css'

export default function Notifications() {

  const [notifyUserList, setNotifyUserList] = React.useState([]);
  const [smtpService, setSmtpService] = React.useState({});
  const [smsService, setSmsService] = React.useState({});
  React.useEffect(() => {
    setNotifyUserList([
      {
        id: 1,
        title: 'Иванова Светлана Алексеевна',
        avatar: 'https://i.siteapi.org/RV6fLv-IhuywY1hohRGDZSP5WQM=/fit-in/1024x768/center/top/55c1a176a9ed4f0.s2.siteapi.org/img/iq1kn74zovswockcogwooo0gwko0sc',
        email: 'alekseeva@mail.ru',
        netTitle: 'ООО "Сетевая компания"',
        regions: [{id:8, title: 'Республика Карелия'}, {id: 56, title: 'Оренбургская область'}]      
      },
      {
        id: 2,
        title: 'Сергеев Вениамин Александрович',
        avatar: 'https://c0.wallpaperflare.com/preview/808/813/299/portrait-smile-forest-bokeh.jpg',
        email: 'sergeev@mail.ru',
        netTitle: 'ООО "Сетевая компания"',
        regions: [{id: 30, title: 'Астраханская область'}]      
      },
    ])
    setSmtpService({
      // subject: 'Личный кабинет "ООО" сетевая компания',
      // host: 'smtp.yandex.ru',
      // port: 465,
      // login: 'a1237687634',
      // password: '555',
      // encryption: 'SSL'
    });
    setSmsService({
      id: 1,
      title: 'Сервис SMS.RU',
      url: 'https://sms.ru'
    });
  }, []);

  return (
    <>
      <Card title="Уведомления будут приходить этим пользователям">
        {(notifyUserList && notifyUserList.length > 0)
          ? (
            <div className="notifyTableWrapper">
              <table className="notifyTable">
                <thead>
                  <tr>
                    <th colspan="2">Пользователь</th>
                    <th className="no-mobile">Сетевая компания</th>
                    <th className="no-mobile">Регионы</th>
                    <th>Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {notifyUserList.map(item => (
                  <tr key={item.id}>
                    <td className="avatarColumn no-mobile">
                      <img src={item.avatar} alt={item.title} />
                    </td>
                    <td className="userColumn">
                      <p>{item.title}</p>
                      <p>{item.email}</p>
                    </td>
                    <td className="no-mobile">{item.netTitle}</td>
                    <td className="regionsColumn no-mobile">
                      {(item.regions && item.regions.length > 0) && item.regions.map(region => <div key={region.id}>{region.title}</div>)}
                    </td>
                    <td className="actions">
                      <Button variant="icon"><Edit /></Button>
                      <Button color="red" variant="icon"><Delete /></Button>
                    </td>
                  </tr>))}
                </tbody>
              </table>
            </div>
          )
          : (
            <>
            <p className="text-center mt10px">Не выбрано ни одного пользователя. Хотите <a href="/">добавить первого</a></p>
            </>
          )
        }
      </Card>
    
      {false && (
        <Card title="Уведомления будут приходить этим пользователям">
          {(notifyUserList && notifyUserList.length > 0)
            ? (
              <ul className="settingsNotificationUserList">
                {notifyUserList.map(item => {
                  return (
                    <li key={item.id} className="settingsNotificationUserListItem">
                      <img src={item.avatar} alt={item.title} />
                      <div className="settingsNotificationUserListItemText fio">
                        <strong>{item.title}</strong>
                        <div className="email">{item.email}</div>
                      </div>
                      <div className="settingsNotificationUserListItemText net">
                      {item.netTitle}
                      </div>
                      <div className="settingsNotificationUserListItemText regions">
                        {item.regions.length > 0 && item.regions.map(region => <div key={region.id}>{region.title}</div>)}
                      </div>
                      <div><Button color="red" variant="icon"><Delete /></Button></div>
                    </li>
                  )})
                }
              </ul>
            )
            : <p className="text-center "></p>
          }
        </Card>
      )}

      <SmtpContainer service={smtpService} />

      <Card title="Настройка сервиса SMS-уведомлений" mt={20}>
        <div className="smsWrapper">
          {Object.keys(smsService).length > 0 
            ? (<p>Сервис предоставляющий услуги: <strong>{smsService.title}</strong></p>)
            : (<p className="muted-text">Сервис отправки электронных писем не настроен</p>)
          }
          <br />
          <div className="buttons">
            <Button color="green" disabled={Object.keys(smsService).length === 0} >Отправить тестовое сообщение</Button>
            <Button>Настройка сервиса</Button>
          </div>
        </div>
      </Card>
    </>
  )
}
