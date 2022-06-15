import React, { useState, useEffect } from 'react'
import { Add, Email, Phone, Search } from '@mui/icons-material';
import { Loading } from '../../components';
import $api from '../../http';
import { Card, FloatButton, Toast } from '../../components/ui';
import UserAddModal from './components/UserAddModal';

import styles from './userlist.module.css';

export default function UserListPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [initial, setInitial] = useState([]);
  const [items, setItems] = useState(initial);
  const [isShowAddModal, setIsShowAddModal] = useState(false);

  const [showSuccessAddToast, setShowSuccessAddToast] = useState(false);

  useEffect( () => {
    (async() =>{ 
      try {
        const response = await $api.get('/user/all');
        console.log('RESPONSE', response);
        if (response.status === 200) {
          return setInitial(response.data);
        }
        return setInitial([]);
      }
      catch(error) {
        console.warn('ERROR IN USERLIST', error);
      }
      finally {
        setIsLoading(false);
      }
    })()
  }, []);

  useEffect(() => {
    setItems([...initial]);
  }, [initial])

  
  const filters = {
    includes: (data, search) => data.includes(search),
    equals: (data, search) => data === search
  }
  const handleOnChange = (method, value) => {
    setItems([...initial.filter(item => {
      return method(item.firstName, value);
    })]);
  }

  return (
    <div className={styles.userList}>
      <Card title="Список пользователей">
        <FloatButton onClick={() => setIsShowAddModal(true) }><Add /></FloatButton>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>ФИО</th>
              <th>Логины</th>
              <th>Сетевые компании</th>
              <th>Регионы</th>
              <th>Роль</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.tableFilterRow} colSpan="6">
                <div className={styles.tableFilterPanel}>
                    <div className={styles.tableFilterBlock}>
                      <div className={styles.tableFilterInput}>
                        <input 
                          type="text" 
                          placeholder="Введите текст для поиска..." 
                          onChange={e => {
                            setQuery(e.target.value);
                            // handleOnChange(filters.includes, e.target.value);
                          }} 
                          onKeyPress={e => {
                            if (e.which === 13) {
                              handleOnChange(filters.equals, e.target.value);
                            }
                          }}
                          disabled={!initial.length}
                          value={query}
                        />
                        <Search />
                      </div>
                      <div className={styles.tableFilterInputDescription}>ФИО, email, телефон, регионы и сетевые компании</div>
                    </div>
                  </div>
              </td>
            </tr>
            {isLoading && <tr><td colSpan={5}><Loading>Загрузка ждите...</Loading> </td></tr>}
            {
              items.length > 0 && items.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.firstName} {item.middleName} {item.lastName} </td>
                  <td>
                    <div className={styles.tableCellInner}><Email className={styles.tableCellIcon}/> {item.email} </div>
                    <div className={styles.tableCellInner}><Phone className={styles.tableCellIcon}/> {item.phone} </div>
                  </td>
                  <td>
                    ООО "Электросетевая компания"
                  </td>
                  <td>
                    Оренбургская область
                  </td>
                  <td>
                    <span className={styles.tableCellBoundGreen}>Заявитель</span>
                  </td>
                  
                </tr>
              ))
            }
          </tbody>
        </table>

        { showSuccessAddToast && <Toast theme="success" autoHide={true} message="Пользователь успешно добавлен!" onClose={() => setShowSuccessAddToast(false)} /> }

        {isShowAddModal && (
          <UserAddModal onClose={() => setIsShowAddModal(false)} onSuccess={() => setShowSuccessAddToast(true)}/>
        )}
      </Card>            
    </div>
  )
}
