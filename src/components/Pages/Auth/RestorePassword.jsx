import React, { useState, useCallback } from 'react'
import { NewInput, Modal, Button } from '../../ui';
import styles from './login.module.css';

export default function RestorePassword() {
  const [modal, setModal] = useState(false);
  const [modalClosing, setModalClosing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCloseModal = () => {
    setModal(false);
    setModalClosing(false);
  }

  const handleCheckOldPassword = useCallback(() => {
    const serverOldPassword = '123';
    if (oldPassword !== serverOldPassword ) { 
      setErrorMessage('Старый пароль введен не верно!'); 
      return false;
    } return true;
  }, [oldPassword])

  const handleUpdatePassword = async () => {
   
    if (newPassword !== confirmPassword) { setErrorMessage('Пароли не совпадают!') }
    handleCheckOldPassword();
  }

  return (
    <>
    { 
      modal &&
      <Modal title="Восстановление пароля" width={450} closing={modalClosing} onClose={handleCloseModal} >
        { errorMessage && <div>{errorMessage}</div> }
        <NewInput type="password" title="Старый пароль" onChange={value => setOldPassword(value)}/>
        <NewInput type="password" title="Новый пароль" onChange={value => setNewPassword(value)}/>
        <NewInput type="password" title="Подтверждение" onChange={value => setConfirmPassword(value)}/>
        <div className="d-flex-15">
          <Button type="button" onClick={handleUpdatePassword}>Обновить</Button>
          <Button type="button" color="silver" onClick={ () => setModalClosing(true)}>Отмена</Button>
        </div>
      </Modal>
    }
    <div className={styles.restorePasswordLink} onClick={() => setModal(true)}>
      Восстановить пароль
    </div>
    </>
  )
}
