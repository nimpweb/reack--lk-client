import React from 'react'
import { Link } from 'react-router-dom'
import s from '../instruction.module.css'

const SmtpSetupAdminInstruction = () => {
  return (
    <div className={s.instructionBody}>
      <p>Для того чтобы осуществить отправка писем и/или уведомлений на электронные адреса заявителей, необходимо настроить Smtp-сервер Вашей электронной почты.</p>
      <h5>Вам необходимо узнать  кто предоставляет Вам данную услугу</h5>
      <p>Узнать это не так сложно, достаточно увидеть доменное имя адреса электронной почты. Допустим электронный адрес выглядит так: <b>mail@yandex.ru</b>, значит услугу отправки писем Вам предоставляет компания <span style={{fontSize: 16, fontWeight: 600}}><span style={{color: 'red'}}>Я</span>ndex</span>.</p>
      <p>Для настройки почты от яндекса, достаточно перейти на страницу: <Link  to="https://yandex.ru/support/mail/mail-clients/others.html" target="_blank">https://yandex.ru/support/mail/mail-clients/others.html</Link></p>
    </div>
  )
}

export default SmtpSetupAdminInstruction