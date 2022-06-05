import React, { useState } from 'react'
import { ChangeCircle, CheckBox } from '@mui/icons-material' 
import { Modal, Layout, Button } from '../../components/ui'

const initialState = {
  subject: 'Личный кабинет ООО "Сетевая компания"',
  host: 'smtp.yandex.ru',
  login: 'nimpweb@yandex.ru',
  email: 'nimpweb@yandex.ru',
  port: 465,
  security: 'SSL'
}

const smtp = initialState;

const SmtpContainer = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Layout margin="10px 0" padding="20px">
        <h3>Настройка отправки электронных писем"</h3>
        <p>Почтовый сервер: <strong>{smtp.host}:{smtp.port}</strong></p>
        <p>Логин: <strong>{smtp.login}</strong>, Email: <strong>{smtp.email}</strong></p>
        <hr />
        <div className="d-flex d-flex-cb">
          <Button variant="default">
            <CheckBox />
            &nbsp;&nbsp;<span>Проверить</span>
          </Button>
          <Button variant="success" onClick={() => setShowModal(true)}>
            <ChangeCircle />&nbsp;&nbsp;<span>Изменить</span>
          </Button>
        </div>
      </Layout>

      { showModal && <Modal title="Настройка SMTP-сервера" width={450} onClose={() => setShowModal(false)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab laudantium unde tempora obcaecati, nam temporibus eligendi quidem eum, modi quod rem doloribus quo eos? Ad sed iusto similique laborum.
        Ad nostrum reprehenderit maxime dignissimos est fuga quam consequatur quasi voluptate laudantium optio, esse quod cupiditate aliquid autem molestias itaque tempora illo neque doloremque minus. Provident voluptates autem deserunt necessitatibus?
      </Modal> }
    </>

  )
}

export default SmtpContainer