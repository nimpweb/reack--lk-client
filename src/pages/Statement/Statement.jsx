import React from 'react'
import NewSelect from '../../components/ui/NewSelect';
import Page from './../../components/ui/Page/index';

const Statement = () => {
  return (
    <Page 
      title="Передача показаний"
    >
      <div className="pageWidthContainer">
        <p>Здесь вы можете передать показания по своему прибору учета, которые будут выставлены Вам на следующий период</p>
        <NewSelect 
          title="Выберите Ваш номер счетчика"
          items={[
            { id: 1, value: '829928374928374' },
            { id: 2, value: '111' },
          ]}
        />
      </div>
    </Page>
  )
}
export default Statement