import React from 'react'
import { Keyboard, ThumbUpAltOutlined, AlarmOn, DoneAll } from '@mui/icons-material'
import s from './orderlist.module.css'
import Tooltip from '../../../components/Tooltip'

const Workflow = () =>  {
  const createToolTip = (text) => {
    // return <Tooltip>{text}</Tooltip>
  }

  return (
    <div className={s.orderListItemCourseOfAction}>
      <Keyboard title="Создание заявки" onMouseMove={ createToolTip('Создание заявки') } />
      <span className={s.orderListItemCourseOfAction}>&gt;</span>
      <ThumbUpAltOutlined title="Одобрение заявки" />
      <span className={s.orderListItemCourseOfAction}>&gt;</span>
      <AlarmOn className={s.active} title="Выполнение заявки" />
      <span className={s.orderListItemCourseOfAction} title="Завершено" >&gt;</span>
      <DoneAll className={s.finish} />
    </div>
  )
}

export default Workflow