import React from 'react'
import { Card } from '../../../components/ui';
import { Link, useHistory } from 'react-router-dom';
import {Add, DoneAll, SmsFailed, ThumbUpAltOutlined, ThumbDownAltOutlined} from '@mui/icons-material';
import { Loader } from '../../../components/Loading';
import styles from './orderlist.module.css'
import Workflow from './Workflow';


const ClientList = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const history = useHistory();

  React.useEffect(() => {
    setTimeout(() => {
      setData([
        { 
          id: 6876345, 
          netId: 5,
          netTitle: 'ООО "Сетевая компания"',
          orderNumber: '76',
          typeTitle: 'Заявка на ТП физического лица мощностью до 15кВт',
          status: 'comleted',
          statusTitle: 'Заявка завершена успешно',
          statusDate: '5 ноября 2021',
          state: 'completed',
          stateTitle: 'Завершена',
          createdAt: '-'
        },
        { 
          id: 1876345, 
          netId: 5,
          netTitle: 'ООО "Сетевая компания"',
          orderNumber: '12345',
          typeTitle: 'Заявка на ТП физического лица мощностью до 15кВт',
          status: 'not_completed',
          statusTitle: 'Заявка заполнена не полностью',
          statusDate: '5 ноября 2021',
          state: 'draft',
          stateTitle: 'Черновик',
          createdAt: '3 ноября 2021'
        },
        { 
          id: 1876365, 
          netId: 7,
          netTitle: 'ООО "Энергетическая компания"',
          orderNumber: '4532',
          typeTitle: 'Заявка на ТП физического лица мощностью до 15кВт',
          status: 'draft',
          statusTitle: 'Черновик',
          statusDate: '11 аперля 2022',
          state: 'draft',
          stateTitle: 'Черновик',
          createdAt: '3 ноября 2021'
        },
      ]);
      setLoading(false);
    }, 600);
  }, []);


  const handleOrderAddButton = () => {
    history.push('/order/create');
  }

  return (
    <div className={styles.orderList}>

      <div className={styles.orderListFilterContainer}>

      </div>

      {loading 
        ? <Loader color="#014c8c" visible={loading} content="Идет загрузка..." />
        : (<>
            <span className={styles.orderListAddButton} onClick={handleOrderAddButton}><Add /></span>
            {data.map(order => (
              <Link key={order.id} 
              className={styles.orderListItemLink} 
              to={`order/detail/${order.id}`} 
              >
                <Card style={{flexDirection: 'column'}}>
                  <div className={styles.orderListItem}>
                    {order.state === 'draft' ? <SmsFailed className={`${styles.orderListItemIcon} ${styles.failed}`}/> : <DoneAll className={`${styles.orderListItemIcon} ${styles.completed}`} />}
                    <div className={styles.orderListItemNumber}>
                      {order.orderNumber}
                    </div>
                    <div className={styles.orderListItemContent}>
                      <div className={styles.orderListItemText}>{order.typeTitle}</div>
                      <div className={styles.orderListItemText}><span className={styles.failed}>{order.statusTitle}</span>&nbsp;&nbsp;<span className={styles.muted}>обновлено: {order.statusDate}</span> </div>
                    </div>
                    <Workflow  />
                    <div className={styles.orderListItemDate}>{order.createdAt}</div>
                  </div>
                  <div className={styles.order}>

                  </div>
                </Card>
              </Link>
            ))}
          </>
        )
      }
    </div>
  )
}

export default ClientList;