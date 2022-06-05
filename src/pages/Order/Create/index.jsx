import React from 'react';
import WizardForm from './Steps/WizardForm'
import { Step1, Step2, Step3, Step4 } from './Steps';

export const CreateOrderContext =  React.createContext(null);

const initialOrderValues = {
  sid: 0,
  toa: 0,
  applicantFio: '',
  applicantPhone: '',
  applicantEmail: '',
  isRepresentative : false,
  representativeFio: '',
  representativePhone: '',
  representativeDocument: ''
}

const orderSubmit = (values) => {
  alert(JSON.stringify(values, null, 2))
}

const OrderCreatePage = () => {

  return <WizardForm initialValues={initialOrderValues} onSubmit={orderSubmit} >
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
}

export default OrderCreatePage


// export default function OrderCreatePage() {
//   const [step, setStep] = useState(0);
//   const [sid, setSid] = useState(1);
//   const [toa, setToa ] = useState(0);
//   const [data, setData] = useState(initialOrderState);
//   const [completed, setCompleted] = useState(false);

//   const pushData = data => {
//     setData(prev => {
//       return {...prev, ...data}
//     });
//   }
//   const nextStep = () => setStep(prev => {
//     if (prev === stepsCount - 1) return;
//     return prev + 1;
//   });
  
//   const prevStep = () => setStep(prev => {
//     if (prev - 1 < 0) return;
//     return prev - 1;
//   });

//   const stepTitles = [
//     'Выбор заявителя',
//     'Подача заявки', 
//     'Документы к заявке', 
//   ];

//   const Step = () => {
//     switch (step) {
//       case 0:  
//         return <Step1 toStep={setStep} />
//       case 1: 
//         return <Step2 toStep={setStep} /> 
//       case 2: 
//         return <Step3 toStep={setStep} />
//       default:
//           return <Step0 />
//     }
//   }

//   return (
//     <CreateOrderContext.Provider value={ {sid, setSid, toa, nextStep, prevStep, pushData } }>
//       <PageTitle title={`Шаг ${step+1}. ${stepTitles[step]}`} />

//       <section>
//         <Step />
//       </section>
//     </CreateOrderContext.Provider>

//   );
// }
