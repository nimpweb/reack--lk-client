import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Add, Delete, Edit, Spellcheck } from '@mui/icons-material'
import { Button, Modal, NewInput } from '../../components/ui'
import { Form, Formik, Field } from 'formik'
import NewSelect from './../../components/ui/NewSelect/index';

const orgList = [
  // { 
  //   id: 1,
  //   title: 'ОАО "Чупа-чупс"', 
  //   address: '46000,г.Оренбург, ул.Советская, д.60',
  //   inn: '439485039485',
  //   egrul: '5678983478'
  // }
]

const OrganizationContainer = props => {
  const [modal, setModal] = useState(false);
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [legalSelectedItem, setLegalSelectedItem] = useState({
    inn: '5611001494',
    ogrn: '1025601019201',
    kpp: '561001001',
    address: ' 460021, Оренбургская Область, г. Оренбург, ул. 60 Лет Октября, д. 30/2',
    title: 'ГУП "ОКЭС"'
  })
  
 

  const fetchOrganizationByInn = async (query) => {
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type" : "application/json",
        "Accept": "application/json",
        "Authorization" : "Token "+process.env.REACT_APP_DADATA_API_KEY
      },
      body: JSON.stringify({query})
    }
    const response = await fetch(url, options);
    if (response.ok) {
      const res = await response.json();
      let resultArray = [];
      res.suggestions?.forEach(item => {
        console.log('ITEM', item)
        resultArray.push({
          title: item.value,
          kpp: item.kpp,
          address: item.address.value,
          inn: item.inn,
          ogrn: item.ogrn
        })
      })
      setData(resultArray)
      console.log('RESULT_ARRAY', resultArray)
    } else {
      setData([]);
    }
  }

  useEffect(() => {
    // fetchOrganizationByInn(query);
    setData([
      { id: 1, title: 'Вариант 1' },
      { id: 2, title: 'Вариант 2' },
      { id: 3, title: 'Вариант 3' },
      { id: 4, title: 'Вариант 4' },
    ])

    console.log('DATA', data)
  }, [])

  const remove = (e, id) => {
    alert('remove item = ' + id)
  }

  const handleAddNewOrganization = () => {
    setModal(prev => !prev);
  }

  const handleAddSubmit = (data) => alert(data)

  let timer;
  const handleChangeQuery = e => {

  }

  return (
    <div className="profileOrganizationContainer">
      <div className="text-center">
        <h3>Ваши документы</h3>
      </div>
      <div className="profileOrganizationList">
        { 
          orgList.length 
            ? orgList?.map(item => (
              <Item 
                title={item.title} 
                address={item.address} 
                inn={item.inn}
                egrul={item.egrul}
                remove={e => remove(e, item.id)}
                link={`/profile/organization/${item.id}`}
              />
              )) 
              : (<>
                  <p className="text-center">У Вас не добавлено ни одного документа...</p> 
                  <p className="text-center text-muted" style={{paddingBottom: 15}}><small>Вы можете добавить сюда документы, а при оформлении заявки они будут автоматически прикладываться</small></p>
                  </>
              )
        }

        {
          modal && 
          (
            <Modal title="Добавление организации" onClose={()=>setModal(false)} width={550}>
              <form>
                <NewSelect 
                  title="Укажите ИНН организации" 
                  name="query" 
                  items={[
                    { id: 1, title: 'Вариант 1' },
                    { id: 2, title: 'Вариант 2' },
                    { id: 3, title: 'Вариант 3' },
                    { id: 4, title: 'Вариант 4' },
                  ]}
                  onChange={() => console.log('111')} 
                  onBlur={() => console.log('exit')} 
                />
                <hr />
                <div className="selectedLegalContainer">
                  <div>
                    <div><strong>ИНН</strong> {legalSelectedItem.inn}</div>
                    <div>{legalSelectedItem.title}</div>
                    <div>{legalSelectedItem.address}</div>
                    <div><strong>КПП</strong> {legalSelectedItem.kpp}, <strong>ОГРН</strong> {legalSelectedItem.ogrn}</div>
                  </div>
                  <Button variant="icon" style={{color: 'white'}}><Edit/></Button>
                </div>
                <hr />
                <Button>Сохранить</Button>
              </form>
            </Modal>
          )
        }

        <div style={{paddingBottom: 20, display: 'flex', justifyContent: 'center'}}>
          <Button onClick={handleAddNewOrganization}><Add /> Добавить</Button>
        </div>
      </div>
    </div>
  )
}

function Item({ title, address, inn, egrul, remove, link }) {
  return (
    
      <div className="profileOrganizationListItem">
        <Link className="" to={link}>
          <div>
            <p className="profileOrganizationTitle">{title}, <span>ИНН: <strong>{inn}</strong></span>, <span>ЕГРЮЛ: <strong>{egrul}</strong></span></p>
            <p className="profileOrganizationAddress">{address}</p>
          </div>
        </Link>
        <Button variant="icon" color="red" onClick={remove}><Delete /></Button>
      </div>
    
  )
}

export default OrganizationContainer