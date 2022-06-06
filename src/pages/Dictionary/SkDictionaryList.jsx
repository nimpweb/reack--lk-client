import React, { useEffect, useState } from 'react'
import { Link }  from 'react-router-dom'
import { Page } from '../../components/ui'
import VMTable from '../../components/ui/ViewTable'
import s from './dictionaries.module.css'

const skInitialList = [
  { id: 1111, title: 'ООО "Сетевые решения', balance: 5679.56, tarifPerDay: 112.64 },
  { id: 12112, title: 'ООО "КЭС Оренбуржья"', balance: 765.11, tarifPerDay: 112.64 },

]

const SkDictionaryList = () => {
  const [skList, setSkList] = useState(skInitialList)
  useEffect(() => {
    setSkList(prev => {
      const data = prev.map( p => ({...p, daysToBlock: '56', dateBlock: '27.11.2022'}))
      return data;
    })
  }, [])

  return (
    <Page>
      { 
        skList.length > 0 
        ? (
            <VMTable 
              items={skList} 
              columns={[
                { title: 'ID', width: 70 },
                { title: 'Наименование СО' },
                { title: 'Баланс' },
                { title: 'Период действия' },
              ]}
              options={{
                filtered: true
              }}
            />
          )
        : <p className="text-center">Сетевых компаний не обнаружено. <Link to={`/dictinaries/sk/create`}>Добавь</Link> первую</p>
      }
      
    </Page>
  )
}

export default SkDictionaryList