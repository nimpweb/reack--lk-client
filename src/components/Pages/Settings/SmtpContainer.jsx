import React, { useState, useCallback } from 'react'
import { Button, Layout, Modal } from './../../ui';
import { Form, Formik } from 'formik';
import InputField from '../../InputField';
import SelectField from '../../SelectField';
import { CancelPresentation, DoneAll, MarkEmailRead, Settings } from '@mui/icons-material';

const SmtpContainer = ( { service } ) => {

  const [showModal, setShowModal] = useState(false)
  const [modalClosing, setModalClosing] = useState(false)

  const initialState = useCallback(() => {
    return {
      host: 'nope',
      port: 0,
      login: 'login',
      email: 'mail',
      encryption: 'SSL'
    }
  }, [])

  const smtpSubmit = values => console.log('values: ', values)

  return <Layout margin="10px 0" padding="20px">
    <div className="smtpWrapper">
      <h3>Настройка SMTP-сервера</h3>
      { 
        (service && Object.keys(service).length > 0)
        ? (
          <>
            <p>Текст заголовка сообщения: <strong>{service.subject}</strong></p>
            <p>Почтовый сервер: <strong>{service.host}:{service.port}</strong></p>
            <p>Логин: <strong>{service.login}</strong></p>
            <p>Метод шифрования: <strong>{service.encryption}</strong></p>
          </>
        )
        : <p className="muted-text">Сервис отправки электронных писем не настроен</p>
      }
      <br />
      <div className="buttons">
        <Button color="green" disabled={Object.keys(service).length > 0} ><MarkEmailRead /> Отправить тестовое письмо</Button>
        <Button 
          onClick={() => { 
            setModalClosing(false)
            setShowModal(true)
          }}
        ><Settings /> Настройка сервиса</Button>
      </div>
    </div>
    {
      showModal && <Modal title="Настройка SMTP-сервиса" width={450} closing={modalClosing} onClose={() => setShowModal(false)}>
        <Formik initialValues={initialState} onSubmit={smtpSubmit} >
          { ({values}) => <Form>
            <div style={{display: 'grid', gridTemplateColumns: '75% 1fr', width: '100%', gridGap: 10}}>
              <InputField title="SMTP-сервер" name="host" />
              <InputField title="Порт" name="port" />
            </div>
            <InputField title="Электронная почта" name="email" />
            <InputField title="Login" name="login" />
            <InputField title="Пароль" name="password" type="password" />
            <SelectField title="Шифрование" name="encryption" items={[
              { id: 0, value: 'Без шифрования' },
              { id: 1, value: 'TLS' },
              { id: 2, value: 'SSL' },
            ]} />

            <Layout noBoxShadow margin="20px 0 0" justifyContent="flex-end" padding="5px 0">
              <Button type="submit" color="green"><DoneAll /> Сохранить</Button>
              <Button type="button" onClick={ () => setModalClosing(true) }><CancelPresentation /> Отмена</Button>
            </Layout>

          </Form> }
        </Formik>
      </Modal>
    }
  </Layout>
}

export default SmtpContainer