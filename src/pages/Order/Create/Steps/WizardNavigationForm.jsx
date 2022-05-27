import React from 'react'
import { NavigateBefore, NavigateNext } from '@mui/icons-material'
import { Layout, Button } from '../../../../components/ui'

const WizardNavigationForm = ( { hasPrevious, hasNext, nextStepTitle, onPrev } ) => {
  return (
    <Layout margin="20px 0"  content="flex-end" noBoxShadow>
      <Button disabled={!hasPrevious} onClick={onPrev}><NavigateBefore />Назад</Button>
      <Button type="submit" disabled={!hasNext}>{ nextStepTitle } <NavigateNext /></Button>
    </Layout>
  )
}

export default WizardNavigationForm