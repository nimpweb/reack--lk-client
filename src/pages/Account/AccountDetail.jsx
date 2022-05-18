import React from 'react'
import { useParams } from 'react-router-dom'
import {Card} from '../../components/ui'
import styles from './accountdetail.module.css'

export default function AccountDetail() {
  const params = useParams();
  console.log(params);

  const accountId = 1;
  return (
    <div className={styles.accountContainer}>
      <Card title="Что должно быть на этой странице">
        <p>Детализация сетевой компании c кодом: {accountId}</p>
        <ul>
          <li>Баланс на счету</li>
          <li>Количество дней до окончания подписки (из учета подключенных модулей) </li>
          <li>Количество оформленных заявок</li>
          <li>Количество оформленных обращений</li>
          <li>Дата создания аккаунта сетевой компании</li>
          <li>Наименование ее (полное, краткое)</li>
          <li>???графики...????</li>
        </ul>
      </Card>
    </div>
  )
}
