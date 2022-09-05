import React, { useEffect, useState } from 'react'
import {Add, Search, ChevronLeft, ChevronRight } from '@mui/icons-material'
import $api from '../../http';
import styles from './accountlist.module.css';
import { Card, FloatButton } from '../../components/ui';
import { Loading } from '../../components';
import { useHistory } from 'react-router';

export default function AccountList() {
  const [isLoading, setIsLoading] = useState(true);
  const [accountList, setAccountList] = useState([]);
  const [query, setQuery] = useState('');
  const [initialAccountList, setInitialAccountList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const init = async () => {
      const data = await $api.get('/account/all');
      setInitialAccountList(data.data);
      setIsLoading(false);
    }
    init();
  }, [])

  useEffect(() => {
    if (!query || query.length < 3) { 
      setAccountList([...initialAccountList]);
      return; 
    }
    setAccountList([...initialAccountList.filter(a => {
      const q = query.toLocaleLowerCase();
      const titleSuccess = a.title.toString().toLowerCase().indexOf(q) > -1;
      const regionsSuccess = (a.regions.filter(region => region.title.toString().toLowerCase().indexOf(q) > -1)).length > 0;
      return titleSuccess || regionsSuccess;
    })]);
  }, [query, initialAccountList])

  const handleTableRowClick = (accountId) => history.push('/account/detail?id='+accountId);
  const handleAddButtonClick = () => history.push('/account/add');
  const handleQuery = (e) => setQuery(e.target.value);
  
  return (
    <div className={styles.accountListContainer}>
      <Card >
        <FloatButton onClick={handleAddButtonClick}><Add /></FloatButton>
        
        <table className={styles.accountTable}>
          <thead>
            <tr>
              <th>#</th>
              <th>Наименование</th>
              <th>Регионы</th>
              <th>Состояние</th>
              <th>Данные</th>
              <th>Дата</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.accountFilterRow} colSpan={6}>
                <div className={styles.accountFilterPanel}>
                    <div className={styles.accountFilterBlock}>
                      <div className={styles.accountFilterInput}>
                        <input type="text" placeholder="Введите текст для поиска..." onChange={handleQuery} disabled={initialAccountList.length < 1}/>
                        <Search />
                      </div>
                      <div className={styles.accountFilterInputDescription}>Наименование сетевой компании, а также регион</div>
                    </div>
                  </div>
              </td>
            </tr>
            {isLoading && <tr><td colSpan={6} style={{textAlign: 'center'}}><Loading>Загружаем данные... ждите...</Loading></td></tr>}
            <>
            {accountList.length === 0 
              ? (<tr><td colSpan={6}><p className="text-center">Нет данных</p></td></tr>)
              : accountList.map(account => (
                  <tr key={account.id} className={styles.accountTableRow} onClick={() => handleTableRowClick(account.id)}>
                    <td>{account.id}</td>
                    <td>{account.title}</td>
                    <td>
                      {account.regions.map(region => <p key={region.id}>{region.title}</p>)}
                    </td>
                    <td>
                      <p><TextByStatus status="Не хватает бабла">Не хватает бабла</TextByStatus></p>
                      <p>Баланс: <span className={styles.accountTextValue}>0,89 ₽</span></p>
                      <p>Осталось дней: <span className={styles.accountTextValue}>0 / <span style={{fontWeight: 300}} className="muted-text">29.11.2021</span></span></p>
                    </td>
                    <td>
                      <p>Заявок: <span className={styles.accountTextValue}>7895</span></p>
                      <p>Обращений: <span className={styles.accountTextValue}>6542</span></p>
                    </td>
                    <td>
                      <p>{account.createdAt}</p>
                      <p>{account.modifiedAt}</p>
                    </td>
                  </tr>  
              ))
            }
            </>
          </tbody>
        </table>
        <div className={styles.accountTableFooter}>
          <ChevronLeft />
          <ChevronRight />
        </div>
      </Card>
    </div>
    )
}

function TextByStatus({children, status}) {
  let cn = {};
  if (status === 'ACTIVE') { cn = styles.accountTextSuccess }
  if (status === 'SUSPENDED') { cn = styles.accountTextDanger }
  return <span className={cn}>{children}</span>
}