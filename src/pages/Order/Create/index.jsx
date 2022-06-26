import React, {useEffect, useState} from 'react';
import { Modal, Button } from '../../../components/ui'
import { PlusOne, Redo } from '@mui/icons-material'
import WizardForm from './Steps/WizardForm'
import { Step1, Step2, Step3, Step4 } from './Steps';

export const CreateOrderContext =  React.createContext(null);

const initStateValues = {
  sid: 0,
  toa: 0,
  applicantFio: '',
  applicantPhone: '',
  applicantEmail: '',
  isRepresentative : false,
  representativeFio: '',
  representativePhone: '',
  representativeDocument: '',

  devicesName: '',
  kadNum: '',
  devicesPlace: '',
  reason: '',

  pointsCount: 1,
  requestedMaxPower: '',
  oldMaxPower: '',
  reliabilityCategory: '',
  unn: '',
  CharacterOfLoad: '',
  degignDeadlines: [],

  guaranteeSupplier: '',
  comment: '',

  documents: []
}

const orderSubmit = (values) => {
  alert('ORDER_SUBMIT', JSON.stringify(values, null, 2))
}

const OrderCreatePage = () => {
  const [initialOrderValues, setInitialOrderValues] = useState(initStateValues)
  const [modalCancelOrder, setModalCancelOrder] = useState(true);

  useEffect(() => {
    const currentOrder = localStorage.getItem('new-order') ?? null;
    if (currentOrder) {
      setModalCancelOrder(true)
    }
  }, [])

  return (
    <>
      {
        modalCancelOrder && (
          <Modal onClose={() => setModalCancelOrder(false)} width={500}>
            Заявка на технологическое присоединение уже создавалась Вами и не была завершена. 
            <ul style={{padding: '10px 20px'}}>
              <li>Вы сможете начать оформление новой заявки</li>
              <li>Или продолжите оформление старой заявки</li>
            </ul>
            <hr />
            <div class="d-flex-15 d-flex-cc w-100">
              <Button 
                color="red" 
                onClick={() => {
                  setInitialOrderValues(initStateValues);
                  setModalCancelOrder(false)
                }}
              >
                <PlusOne />Новая заяка
              </Button>
              <Button 
                onClick={() => setModalCancelOrder(false)}
              >
                <Redo />Продолжить
              </Button>
            </div>
          </Modal>
        )
      }
      <WizardForm initialValues={initialOrderValues} onSubmit={orderSubmit} >
        <Step1 
          title="Выбор заявителя"
          nextButtonTitle="Далее к заполнению цели заявки" 
        />
        <Step2
          title="Заполнение заявки"
          nextButtonTitle="Далее к добавлению электронных документов"
        />
        <Step3 
          title="Добавление электронных документов"
          nextButtonTitle="Проверка поданной заявки"
        />
        <Step4 
          title="Проверка поданной заявки"
          nextButtonTitle="Отправка заявки в СК"
        />
      </WizardForm>
    </>
  )
  

}

export default OrderCreatePage