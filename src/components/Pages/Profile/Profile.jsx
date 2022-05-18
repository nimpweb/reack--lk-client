import React from 'react'
import { Tabs } from '../../ui'

import styles from './profile.module.css'

const MainContainer = props => {
  return (
    <div>MAIN CONTAINER</div>
  )
}

const ContactContainer = props => {
  return (
    <div>CONTACTS </div>
  )
}


function Profile() {
  return (
    <div className={styles.profile}>
      <Tabs 
        items={[
          { id: 1, title: 'Основные', component: MainContainer  }, 
          { id: 2, title: 'Контакты', component: ContactContainer }
        ]} 
      />
    </div>
  )
}


export default Profile