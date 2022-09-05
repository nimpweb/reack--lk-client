import React, {useState, useEffect} from 'react'
import { Loading } from '../../../components';
import {NewSelect} from '../../../components/ui';

export default function UserStatusCombo({onChange}) {

  const [list, setList] = useState([]);

  useEffect(() => {
    (async() => {
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(
          setList(
            [{id: 1, value: 'Не подтвержден'}, {id: 2, value: 'Активен'}, {id: 3, value: 'Отключен'}]
          )
        ), 200)
      })
    })()
  }, [])


  return (
    <>
    { list.length === 0 
      ? <Loading />  
      : <NewSelect 
          items={list} 
          title="Выберите статус потребителя"
          onChange={onChange}
        /> 
    }  
    </>
  )
}
