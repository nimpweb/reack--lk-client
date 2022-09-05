import React from 'react'
import NewSelect from '../../components/ui/NewSelect';
import Page from './../../components/ui/Page/index';

const Statement = (options) => {

  const hasEnabled = options.enabled ?? false

  return (
    <Page 
      title="Передача показаний"
    >
      <div className="pageWidthContainer">
      { !hasEnabled  ? (
        <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
          <img src="./images/no-feature-access.png" alt="has no access" style={{ maxWidth: 300, display: 'flex', margin: '20px auto 0'}} />
          <p style={{ textAlign: 'center', textTransform: 'uppercase', fontSize: '16px', fontWeight: '300', lineHeight: '25px'}}>Ваша сетевая компания не расширила функционал личного кабинета для осуществления возможности передачи показаний через личный кабинет. Если Вы ходите передавать показания таким образом, то <a href="#">свяжитесь</a> с представителями сетевой компании для подключения подобного функционала. </p>
        </div>
      )
      : (
        <>
          <p>Здесь вы можете передать показания по своему прибору учета, которые будут выставлены Вам на следующий период</p>
          <NewSelect 
            title="Выберите Ваш номер счетчика"
            items={[
              { id: 1, value: '829928374928374' },
              { id: 2, value: '111' },
            ]}
          />
          <br /><br /><sup><p className="muted-text text-center">Находится в стадии разработки</p></sup>
        </>
      )
    }

      </div>
    </Page>
  )
}
export default Statement