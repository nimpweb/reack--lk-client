import { DoneAll } from '@mui/icons-material';
import React, { useState } from 'react'
import { Button, Modal, NewInput, Checkbox } from '../../../components/ui';
import $api from '../../../http';
import UserGpCombo from './UserGpCombo';
import UserRoleCombo from './UserRoleCombo';
import UserSkCombo from './UserSkCombo';
import UserStatusCombo from './UserStatusCombo';

import styles from './../userlist.module.css';

export default function UserAddModal({onClose, onSuccess}) {

  const [selectedUserRole, setSelectedUserRole] = useState(null);
  const [selectedUserGp, setSelectedUserGp] = useState(null);
  const [selectedUserSk, setSelectedUserSk] = useState(null);
  const [userStatus, setUserStatus] = useState(null);

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('firstName', firstName);
    formData.append('middleName',middleName);
    formData.append('lastName',lastName);
    formData.append('accountId', selectedUserSk ? selectedUserSk.id : 0);
    formData.append('gpId', selectedUserGp ? selectedUserGp.id : 0);
    formData.append('state', userStatus ? userStatus.id : 1);

    const reponse = await $api.post('/user/add', formData);
    if (reponse.status === 200) {
      onClose();
      onSuccess();
    }
  }

  return (
    <Modal onClose={onClose} width={600} >
      <div className={styles.modalContent}>
        <h3>Добавление нового пользователя</h3>

        <UserRoleCombo onChange={(item) => setSelectedUserRole(item) } />
        { ( selectedUserRole &&  [1,2,4].includes(selectedUserRole.id)) && <UserSkCombo onChange={item => setSelectedUserSk(item)}  />}
        { ( selectedUserRole &&  [3].includes(selectedUserRole.id)) && <UserGpCombo onChange={item =>setSelectedUserGp(item)} />}


        <div className={styles.modalRow}>
          <div className={styles.modalCol50}>
            <NewInput type="text" title="Фамилия" onChange={(value) => setFirstName(value)} />
            <NewInput type="text" title="Имя" onChange={(value) => setMiddleName(value)} />
            <NewInput type="text" title="Отчество" onChange={(value) => setLastName(value)} />
          </div>
          {}
          <div className={styles.modalCol50}>
            <NewInput type="email" title="Электронная почта" onChange={(value) => setEmail(value)} />
            <NewInput type="tel" title="Телефон" onChange={(value) => setPhone(value)} />
          </div>
        </div>
        <UserStatusCombo onChange={ item => setUserStatus(item)}/>
        <br />
        <div style={{border: 'solid 1px silver', padding: 20, borderRadius: 10, display: 'flex', flexDirection: 'column'}}>
          <h5>Выберите куда отправить сгенерированный пароль</h5>
          <br />
          <div className={styles.toLeft}>
            <Checkbox title="Отправить на электронную почту?" value={true} onChange={value => console.log('value=', value)} />
            <Checkbox title="Отправить SMS-сообщенем на телефон?" onChange={value => console.log('value=', value)} />
          </div>
        </div>
        <br />
        <div className={styles.modalRow}>
          <Button variant="normal" color="green" onClick={handleSubmit}><DoneAll /> Сохранить</Button>
        </div>

      </div>
    </Modal>
  )
}
