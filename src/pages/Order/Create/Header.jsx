import React, { useState, useContext } from 'react'
import { CreateOrderContext } from '.';
import landingStyles from '../../Landing/landing.module.css';

export default function StepHeader() {
  const { step } = useContext(CreateOrderContext);

  const stepTitle = useCallback( () => {
    switch (step) {
      case 0 : return 'Выбор заявителя'; 
      case 1 : return 'Цель заявки';
      case 2 : return 'Документы к заявке'
    }
  }, [step])
  
  return (
    <section>
      <div className={landingStyles.sectionTitleBack}>{`Шаг ${step}. ${stepTitle}`}</div>
      <div className={landingStyles.sectionTitleFore}>{`Шаг ${step}. ${stepTitle}`}</div>
    </section>
  )
}
