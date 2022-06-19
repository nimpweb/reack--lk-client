import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import WizardNavigationForm from './WizardNavigationForm'
import PageTitle from '../../../../components/PageTitle'

const WizardForm = ({ children, initialValues, onSubmit }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
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
    console.log('123123123123')
    if (currentStep.props.onSubmit) {
      await currentStep.props.onSubmit(values)
    }

    if (isLastStep) {
      return onSubmit(values, actions )
    } else {
      // actions.setToched({})
      nextStep(values)
    }
    console.log('values', values)

  }

  return (
    <Formik initialValues={snapshot} onSubmit={handleSubmit}>
      { ({values}) => {
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
  )
}

export const FormField = ({ children }) => children

export default WizardForm