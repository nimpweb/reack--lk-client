import React from 'react'
import { BookmarkAdd, NavigateBefore, NavigateNext } from '@mui/icons-material'
import { Layout, Button } from '../../../../components/ui'

const WizardNavigationForm = ( { hasPrevious, hasNext, nextStepTitle, onPrev } ) => {
  return (
    <Layout margin="20px 0"  content="flex-between" noBoxShadow>
    <Button disabled={true} style={{display: 'flex', flexWrap: 'nowrap'}}><BookmarkAdd /> в черновик</Button>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%', gap: 15}}>
      <Button disabled={!hasPrevious} onClick={onPrev}><NavigateBefore />Назад</Button>
      <Button type="submit" disabled={!hasNext}>{ nextStepTitle } <NavigateNext /></Button>
      </div>
    </Layout>
  )
}

export default WizardNavigationForm