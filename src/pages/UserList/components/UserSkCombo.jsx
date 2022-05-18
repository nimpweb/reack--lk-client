import React, {useState, useEffect} from 'react'
import { Loading } from '../../../components';
import {NewSelect} from '../../../components/ui';
import $api from '../../../http';

export default function UserSkCombo({onChange}) {

  const [list, setList] = useState([]);

  useEffect(() => {
    (async() => {
      const response = await $api.get('/account/list');
      console.log('RESPONSE', response);
      if (response.status !== 200) { return []; }
      if (response.data.success) {
        setList([...response.data.result]);
      }
    })()
  }, [])


  return (
    <>
    { list.length === 0 
      ? <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 0'}}><Loading /> </div>
      : <NewSelect 
          items={list} 
          title="Выберите Сетевую компанию"
          onChange={onChange}
        /> 
    }  
    </>
  )
}
