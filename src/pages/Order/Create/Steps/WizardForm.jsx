import React, { useEffect, useState, useCallback } from 'react'
import { Formik, Form } from 'formik'
import { Modal, Button } from '../../../../components/ui'
import { PlusOne, Redo } from '@mui/icons-material'
import WizardNavigationForm from './WizardNavigationForm'
import PageTitle from '../../../../components/PageTitle'

const WizardForm = ({ children, initialValues, onSubmit }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(3)
  const [modalCancelOrder, setModalCancelOrder] = useState(false)
  const [snapshot, setSnapshot] = useState(initialValues)
  const formSteps = React.Children.toArray(children)
  const currentStep = formSteps[currentStepIndex]
  const totalSteps = formSteps.length
  const isLastStep = (totalSteps - 1 === currentStepIndex)

  useEffect(( ) => {
    window.scrollTo(0, 0)
  }, [])
  
  const nextStep = (values) => {
    setSnapshot(values);
    setCurrentStepIndex(currentStepIndex + 1)
  }

  const prevStep = (values) => {
    setSnapshot(values)
    setCurrentStepIndex(currentStepIndex - 1)
  }

  const handleSubmit = async (values, actions) => {

    if (currentStep.props.onSubmit) {
      await currentStep.props.onSubmit(values)
    }

    if (isLastStep) {
      return onSubmit(values, actions )
    } else {
      // actions.setToched({})
      nextStep(values)
    }

    console.log('HANDLE_SUBMIT_VALUES', values, actions)

  }

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
                onClick={() => {}}
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
      <Formik initialValues={snapshot} onSubmit={handleSubmit}>
        { ({values, setValues}) => {
          return (
            <Form>
              <PageTitle title={`Шаг ${currentStepIndex+1} из ${totalSteps}: ${currentStep.props.title}`} />

              { currentStep }

              <WizardNavigationForm  
                hasPrevious={currentStepIndex > 0 } 
                hasNext={!isLastStep} 
                nextStepTitle={ currentStep.props.nextButtonTitle } 
                onPrev={ () => prevStep(values)} 
              />
              <p className="text-center muted-text">Lorem, ipsum dolor.</p>
            </Form>
          )}
        }
      </Formik>
    </>
  )
}

export const FormField = ({ children, setFieldValue }) => children

export default WizardForm