import React, {useEffect, useState} from 'react';
import WizardForm from './Steps/WizardForm'
import {useDispatch} from 'react-redux'
import { Step1, Step2, Step3, Step4 } from './Steps';
import { push } from '../../../redux/slices/order';

export const CreateOrderContext =  React.createContext(null);

const initStateValues = {
  sid: 0,
  toa: 0,
  stepIndex: 0,
  applicantFio: 'Петров Сергей Викторович',
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

const OrderCreatePage = () => {
  const [initialOrderValues, InitialOrderValues] = useState(initStateValues)
  const dispatch = useDispatch();


  const orderSubmit = (values) => {
    dispatch(push(values));
    alert('ORDER_SUBMIT', JSON.stringify(values, null, 2))
  }
  A

  return (
    <>
      <WizardForm initialValues={initialOrderValues} onSubmit={orderSubmit} >
        <Step1 
          title="Выбор заявителя"
          nextButtonTitle="Далее к заполнению цели заявки" 
          onSubmit={(values) => console.log('STEP1 - values: ', values)}
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

