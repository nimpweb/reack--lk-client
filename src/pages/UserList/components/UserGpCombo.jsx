import React, {useState, useEffect} from 'react'
import { Loading } from '../../../components';
import {NewSelect} from '../../../components/ui';

export default function UserGpCombo({onChange}) {

  const [list, setList] = useState([]);

  useEffect(() => {
    (async() => {
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(
          setList(
            [
              {id: 1, value: 'АО "ЭнергосбыТ Плюс"'}, 
              {id: 2, value: 'АО "Энергосбытовая компания "Восток"'},
              {id: 3, value: 'ООО "Профсервистрейд"'},
            ]
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
          title="Выберите гарантирующего поставщика"
          onChange={onChange}
        /> 
    }  
    </>
  )
}
