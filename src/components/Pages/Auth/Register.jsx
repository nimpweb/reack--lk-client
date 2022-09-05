import React, {useState } from 'react'
import AccountSelect from './RegisterComponents/AccountSelect';
import RegionSelect from './RegisterComponents/RegionSelect';
import $api from '../../../http';
import { Modal, Button } from '../../ui';
import { Lock, LockOpen } from '@mui/icons-material';
import styles from './Register.module.css';
import { useHistory } from 'react-router';

export default function Register() {
  const [selectedAccount, setSelectedAccount] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState(0);
  const [showSuccessModal, setSuccessShowModal] = useState(false);
  const [showErrorModalMessage, setShowErrorModalMessage] = useState('');

  const history = useHistory();

  const submitRegister = async(event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const response = await $api.post('/auth/register', formData);
      if (response.data.success) {
        event.target.reset();
        setSelectedRegion(null);
        setSelectedAccount(null);
        setSuccessShowModal(true);
      }
      if (!response.data.success && response.data.message) {
        setShowErrorModalMessage(response.data.message);
      }
    } catch (error) {
      setShowErrorModalMessage(error);
    }
  }

  const onSuccessModalClose = () => {
    return history.push('/auth');
  }
 
  return (
    <form className="row registerContainer" onSubmit={submitRegister}>

      <AccountSelect 
        onChange={(accountId) => setSelectedAccount(accountId)}/>

      {selectedAccount > 0 && <RegionSelect accountId={selectedAccount} onChange={ (regionId) => setSelectedRegion(regionId)} />}

      {selectedRegion > 0 && (
        <>
          <div className="col-12 col-6 form-ctrl" data-view="0,2">
            <label className="form-control-label">Фамилия</label>
            <input type="text" name="firstName" className="form-ctrl-input" required />
          </div>
          <div className="col-12 col-6 form-ctrl" data-view="0,2">
            <label className="form-control-label">Имя</label>
            <input type="text" name="middleName" className="form-ctrl-input" required />
          </div>
          <div className="col-12 col-6 form-ctrl" data-view="0,2">
            <label className="form-control-label">Отчество</label>
            <input type="text" name="lastName" className="form-ctrl-input" />
          </div>
          <div className="col-12 col-6 form-ctrl">
            <label className="form-control-label">Телефон</label>
            <input type="text" name="phone" className="form-ctrl-input" required />
          </div>
          <div className="col-12 form-ctrl">
            <label className="form-control-label">Email</label>
            <input type="email" name="email" className="form-ctrl-input" required />
          </div>

          <div className="col-12 col-6 form-ctrl">
            <label className="form-control-label">Пароль</label>
            <input type="password" name="password" className="form-ctrl-input" />
          </div>
          <div className="col-12 col-6 form-ctrl">
            <label className="form-control-label">Подтверждение пароля</label>
            <input
              type="password"
              name="passwordConfirm"
              className="form-ctrl-input"
            />
          </div>
          <div className="col-12 text-center mb10px">
            <span className="form-ctrl-under-text">
              Пароль должен быть длиной не менее 6 символов.
            </span>
          </div>


          <div className="col-12 form-ctrl form-ctrl-cbxs">
            <label className="checkbox">
              <input type="checkbox" name="user-policy-1" />
              <span>
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
              <span>
                Подтверждаю ознакомленность с положениями Федерального закона РФ от
                27.07.2006 №152-ФЗ «<a href="#?">О персональных данных</a>», права и
                обязанности в области защиты персональных данных мне разъяснены.
              </span>
            </label>
          </div>

          <div className="col-12 form-ctrl-btns">
            <input
              type="submit"
              className="button"
              name="registration-submit"
              value="Зарегистрироваться"
            />
          </div>
        </>
      )}

      {showSuccessModal && (
        <Modal title="Регистрация выполнена успешно!" width={500} height={200} onClose={onSuccessModalClose}>
          <div className={styles.registerText}>
            <LockOpen className={styles.registerSuccessIcon} />
            <p className={styles.registerMessage}>
              Вам на указанный электронный адрес было направлено письмо следуя инструкциям активируйте свою учетную запись!
            </p>
          </div>
          <hr />
          <div className={styles.registerButtonPanel}><Button type="button" className="button" onClick={() => setSuccessShowModal(false)}>Закрыть</Button></div>
        </Modal>
      )}

      {showErrorModalMessage.length > 0 && (
          <Modal title="Произошла ошибка при регистрации!" width={500} height={200}>
          <div className={styles.registerText}>
            <Lock className={styles.registerErrorIcon} />
            <p className={styles.registerMessage}>
              {showErrorModalMessage}
            </p>
          </div>
          <hr />
          <div className={styles.registerButtonPanel}><Button type="button" className="button" onClick={() => setShowErrorModalMessage('')}>Закрыть</Button></div>
        </Modal>
      )}

    </form>
  
    )
}
