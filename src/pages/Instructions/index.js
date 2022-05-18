import React from 'react';
import { useLocation, Link } from 'react-router-dom'
import s from './instruction.module.css'
import sl from '../Landing/landing.module.css'


const InstructionAdminPage = () => (
  <>
    <section>
      <div className={sl.sectionTitleBack}>Инструкция администратора</div>
      <div className={sl.sectionTitleFore}>Инструкция администратора</div>
    </section>
    
  </>
);

const InstructionClientPage = () => (
  <>
  <section className="text-center">
      <div className={sl.sectionTitleBack}>Инструкция потребителя</div>
      <div className={sl.sectionTitleFore}>Инструкция потребителя</div>
    </section>
    <div className={`${s.info} text-center`}>Ниже Вы получите разъяснения по всем моментам, по которым могут возникнуть у Вас вопросы. В противном случае можете обратиться по телефону сетевой компании: <Link to="tel:123123123">888888888888</Link> или написан сообщене на электронную почту: <Link to="mailto:nimpweb@yandex.ru">nimpweb@yandex.ru</Link></div>
  </>
)

const SwitchPage = ({ value }) => {
  switch (value) {
    case 'admin':  
      return <InstructionAdminPage />
    case 'client':
      return <InstructionClientPage />
  }
}

export default function InstructionsPage() {
  const page = new URLSearchParams(useLocation().search).get('page')
  return (
    <div className={s.instructionContainer}>
        <SwitchPage value={page} />
    </div>
  )
}
