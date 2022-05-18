import React, {useState, useEffect} from 'react'
import { Loading } from '../../../components';
import {NewSelect} from '../../../components/ui';

export default function UserRoleCombo({onChange}) {

  const [userRoleList, setUserRoleList] = useState([]);

  useEffect(() => {
    (async() => {
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(
          setUserRoleList(
            [
              {id: 1, value: 'Заявитель'}, 
              {id: 2, value: 'Менеджер сетевой компании'},
              {id: 3, value: 'Представитель гарантирующего поставщика'},
              {id: 4, value: 'Администратор сетевой компании'},
            ]
          )
        ), 100)
      })
    })()
  }, [])


  return (
    <>
    { userRoleList.length === 0 
      ? <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 0'}}><Loading /> </div>
      : <NewSelect 
          items={userRoleList} 
          title="Выберите роль пользователя"
          onChange={onChange}
        /> 
    }  
    </>
  )
}
