import React, { useEffect, useState, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Form, Formik } from 'formik'
import InputField from '../../components/InputField'
import { Button, Checkbox } from '../../components/ui'
import s from './dictionaries.module.css'
import { Cancel, DoneAll, ManageSearch } from '@mui/icons-material'
import { Loading } from '../../components'
import axios from 'axios'

const initialValues = {
  title: 'ООО "Рога и копыта"',
  inn: '5609032664',
  kpp: '123654',
  bik: '105',
  addr_legal: '460000, Оренбургская область, г.Оренбург, ул.Советская, д.60',
  addr_fact: '460000, Оренбургская область, г.Оренбург, ул.Пролетарская, д.133',
  site: 'http://site.ru',
  modules: [],
  pricePerDay: 0,
  balance: 0
}

const modulesList = [
  { id: 1, title: 'Модуль подключения сетевой организации к технологическому присоединению в режиме online', pricePerDay: 100 },
  { id: 2, title: 'Калькулятор технологического присоединения', pricePerDay: 50 },
  { id: 3, title: 'Модуль раскрытия информации', pricePerDay: 30 },
  { id: 4, title: 'Модуль передачи показаний', pricePerDay: 20 },
  { id: 5, title: 'Подключение эквайринга', pricePerDay: 10 },
  { id: 6, title: 'Система сбора и оплаты за коммунальную услугу', pricePerDay: 45 },
]

const daysInThisMonth = () => {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
}

const ModulesContainer = ( { modules, setValue } ) => {
  const [modulesSelected, setModulesSelected] = useState([]);
  const totalPrice = useCallback(() => modulesSelected.reduce((total, current) => {
    return total + modules.find(m => m.id===current).pricePerDay
  }, 0), [modulesSelected]);

  useEffect(() => {
    setValue('modules', modulesSelected)
    setValue('pricePerDay', totalPrice())
  }, [modulesSelected])

  const handleSelectModule = ( event, id ) => {
    if (event.target.checked) {
      setModulesSelected(prev => ([...prev, id]))
    } else {
      setModulesSelected(prev => {
        return [...prev.filter(f => f !== id)]
      })     
    }
  }

  return (
    <div className={s.modulesContainer}>
      <h3>Подключаемые модули</h3>
      { modules.map(module => <Checkbox name={`module_${module.id}`} value={false} title={module.title} onChange={(event) => handleSelectModule(event, module.id)} />) }
      <div className={s.modulesPriceContainer}>Цена для сетевой компании: <span className={s.accentText}>{ totalPrice() * daysInThisMonth() }₽</span> в месяц  <span className={s.thinText}>/ {totalPrice()}₽ в день </span></div>
    </div>
  )
}

const SkDictionaryAdd = () => {
  const [loading, setLoading] = useState(false)
  const [apiLoading, setApiLoading] = useState(false)
  const history = useHistory()
  const location = useLocation()
  const initValues = location.state ? location.state : initialValues

  const timer = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const handleSubmit = async (values) => {
    setLoading(true)
    await timer(2000);
    setLoading(false)
    history.push('/dictionaries/sk')
  }

  const handleCancel = () => history.push('/dictionaries/sk');
  const fillElementsByInn = async (inn, setFieldValue) => {
    setApiLoading(true);  
    const dadataUrl = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
    const data = await axios.post(dadataUrl,
      { query: inn, count: 10 },
      {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + process.env.REACT_APP_DADATA_API_KEY
      },
    });
    if (data.data.suggestions.length) {
      setFieldValue('kpp', data.data.suggestions[0].data.kpp)
      setFieldValue('addr_fact', data.data.suggestions[0].data.address.value)
      setFieldValue('title', data.data.suggestions[0].data.name.short_with_opf)
    }
    setApiLoading(false)
    console.log('DADATA: ', data.data.suggestions[0].data)
  }

  return (
    <div style={{position: 'relative'}}>
      <Formik initialValues={initValues} onSubmit={handleSubmit}>
        { ({ values, setFieldValue } ) => (
          <Form>
            <InputField name="title" title="Наименование сетевой организации" />
            <div className="d-flex-group">
              <InputField 
                name="inn" 
                title="ИНН" icon={
                  apiLoading ? <Loading /> : <ManageSearch />
                } 
                onButtonClick={() => fillElementsByInn(values.inn, setFieldValue) }
              />
              <InputField name="kpp" title="КПП" />
              <InputField name="bik" title="БИК" />
            </div>
            <InputField name="addr_legal" title="Юридический адрес" />
            <InputField name="addr_fact" title="Фактический адрес" />
            <InputField name="site" title="Основной сайт сетевой огранизации" />

            <ModulesContainer modules={modulesList} setValue={setFieldValue} />
            <hr />
            <div className="d-flex d-gap-15">
              <Button type="submit" disabled={loading}> { loading ? <Loading /> : <DoneAll />} Сохранить данные</Button>
              <Button color="red" type="button" onClick={handleCancel}><Cancel /> Отмена</Button>
            </div>
            
         </Form>
        ) }
      </Formik>
    </div>
  )
}

export default SkDictionaryAdd