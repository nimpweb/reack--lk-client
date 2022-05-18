import React from 'react'
import { Card } from '../../ui'

export default function Modules() {
  return (
    <div className="modules">
      <Card title="Тариф и подключение дополнительных модулей">
        <p>Ваш текущий тариф: <strong>БАЗОВЫЙ</strong></p>
        <p>Модули для подключения: </p>
        <ul>
          <li>Передача показаний</li>
          <li>Калькулятор личного технологического присоединения</li>
          <li>Раскрытие информации</li>
        </ul>
      </Card>
    </div>
  )
}
