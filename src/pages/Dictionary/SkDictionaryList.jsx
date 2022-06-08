import React, { useEffect, useState } from 'react'
import { Link, useHistory }  from 'react-router-dom'
import { FloatButton, Page } from '../../components/ui'
import VMTable from '../../components/ui/ViewTable'
import s from './dictionaries.module.css'
import { PlusOne } from '@mui/icons-material';

const skInitialList = [
  { id: 1111, title: 'ООО "Сетевые решения',   inn: 'ИНН', kpp: 'КПП', bik: 'БИК', balance: 5679.56, pricePerDay: 112.64 },
  { id: 12112, title: 'ООО "КЭС Оренбуржья"', balance: 765.11, pricePerDay: 112.64 },

]

const SkDictionaryList = () => {
  const [skList, setSkList] = useState(skInitialList)
  const history = useHistory();

  useEffect(() => {
    setSkList(prev => {
      const data = prev.map( p => ({...p, daysToBlock: '56', dateBlock: '27.11.2022'}))
      return data;
    })
  }, [])

  const handlePushAddButton = () => history.push('/dictionaries/sk/add')
  const handleBrowseButton = (item) => history.push('/dictionaries/sk/add', item)

  return (
    <Page>
      { 
        skList.length > 0 
        ? (
            <VMTable 
              items={skList} 
              columns={[
                { title: 'ID', width: 70, field: 'id' },
                { title: 'Наименование СО', field: 'title' },
                { title: 'Баланс', width: 100, field: 'balance' },
                { title: 'Период действия', width: 150, field: 'pricePerDay' },
              ]}
              options={{
                filtered: true
              }}
              onRowClick={ (item) => handleBrowseButton(item) }
            />
          )
        : <p className="text-center">Сетевых компаний не обнаружено. <Link to={`/dictinaries/sk/create`}>Добавь</Link> первую</p>
      }

      <FloatButton onClick={handlePushAddButton}>
        <PlusOne />
      </FloatButton>
      
    </Page>
  )
}

export default SkDictionaryList