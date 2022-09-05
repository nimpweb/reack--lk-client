import { Publish } from '@mui/icons-material';
import React, { useState } from 'react'
import { Button, NewInput } from '../../../../components/ui'
import $api from '../../../../http';
import styles from './ordertomount.module.css';

export default function OrderToMount() {
  const [net, setNet] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [contact, setContact] = useState('');


  const handleButtonClick = async (event) => {
    try {
      event.preventDefault();
      const response = await $api.post('/request/new-company', {
        net, name, city, contact
      });
      if (response.ok) {
        
      }
    }
    catch (error) {
      console.warn('Ошибка отправки заявки: ', error);
    }
  }
  return (
    <div className={styles.container}>
      <h3>Подача заявки на подключение</h3>
      <NewInput title="Наименование сетевой организации" onChange={(e) => setNet(e.target.value)}/>
      <NewInput title="Из какого вы города?" onChange={(e) => setCity(e.target.value)}/>
      <NewInput title="Как к Вам обращаться?" onChange={(e) => setName(e.target.value)}/>
      <NewInput title="Как с Вами можно связаться?" onChange={(e) => setContact(e.target.value)}/>
      <br />
      <Button variant="purple" style={{alignSelf: 'center'}} onClick={handleButtonClick}>Отправить заявку <Publish /></Button>
    </div>
  )
}
