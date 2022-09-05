import React from 'react'

import './style.css'
// import '../../../public/images/404.png';

export default function NotFound({ statusCode, statusMessage }) {
  const headerMessage = statusCode ? statusCode : '404';
  const bodyMessage = statusMessage ? statusMessage : 'Страница не найдена!';
  return (
    <div className="f-container">
      <div className="block-rounded page-404">
        <h1>{ headerMessage }!</h1>
        <p className="text-center">{ bodyMessage }</p>
        <a className="" href="/">Вернуться на главную</a>
      </div>
    </div>
  )
}
