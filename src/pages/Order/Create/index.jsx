import React, { useState } from 'react';

import { Step0, Step1, Step2, Step3 } from './Steps';
import landingStyles from '../../Landing/landing.module.css';

const stepsCount = 3;

const initialOrderState = {
  step: 0,
  sid: 0,
  toa: 0,
}

export const CreateOrderContext =  React.createContext(null);

export default function OrderCreatePage() {
  const [step, setStep] = useState(0);
  const [sid, setSid] = useState(1);
  const [toa, setToa ] = useState(0);
  const [data, setData] = useState(initialOrderState);
  const [completed, setCompleted] = useState(false);

  const pushData = data => {
    setData(prev => {
      return {...prev, ...data}
    });
  }
  const nextStep = () => setStep(prev => {
    if (prev === stepsCount - 1) return;
    return prev + 1;
  });
  
  const prevStep = () => setStep(prev => {
    if (prev - 1 < 0) return;
    return prev - 1;
  });

  const stepTitles = [
    'Выбор заявителя',
    'Подача заявки', 
    'Документы к заявке', 
  ];

  const Step = () => {
    switch (step) {
      case 0:  
        return <Step1 toStep={setStep} />
      case 1: 
        return <Step2 toStep={setStep} /> 
      case 2: 
        return <Step3 toStep={setStep} />
      default:
          return <Step0 />
    }
  }

  return (
    <CreateOrderContext.Provider value={ {sid, setSid, toa, nextStep, prevStep, pushData } }>
      <section>
        <div className={landingStyles.sectionTitleBack}>Шаг {step+1}. {stepTitles[step]}</div>
        <div className={landingStyles.sectionTitleFore}>Шаг {step+1}. {stepTitles[step]}</div>
      </section>
      <section>
        <Step />
      </section>
    </CreateOrderContext.Provider>

  );
}
