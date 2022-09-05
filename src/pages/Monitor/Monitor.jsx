import { Accessible, AccessibleForward, AddTask, HistoryToggleOff } from '@mui/icons-material';
import React from 'react'
import { Card, Chart } from '../../components/ui'
import Block from './components/Block';
import styles from './monitor.module.css'

export default function MonitorPage() {
  
  const orderData = [
    { name: '1', count: 15, },
    { name: '2', count: 32, },
    { name: '3', count: 7, },
    { name: '4', count: 84,},
    { name: '5', count: 36,},
    { name: '6', count: 45,},
    { name: '7', count: 12, },
    { name: '8', count: 48,},
    { name: '9', count: 42,},
    { name: '10', count: 74, },
    { name: '11', count: 15, },
    { name: '12', count: 32, },
    { name: '13', count: 7, },
    { name: '14', count: 84,},
    { name: '15', count: 36,},
    { name: '16', count: 45,},
    { name: '17', count: 12, },
    { name: '18', count: 48,},
    { name: '19', count: 42,},
    { name: '20', count: 74, },    
    { name: '21', count: 15, },
    { name: '22', count: 32, },
    { name: '23', count: 7, },
    { name: '24', count: 84,},
    { name: '25', count: 36,},
    { name: '26', count: 45,},
    { name: '27', count: 12, },
    { name: '28', count: 48,},
    { name: '29', count: 42,},
    { name: '30', count: 74, },       
  ];
  const appealData = [
    { name: '1', count: 1, },
    { name: '2', count: 7, },
    { name: '3', count: 89, },
    { name: '4', count: 13,},
    { name: '5', count: 52,},
    { name: '6', count: 16,},
    { name: '7', count: 98, },
    { name: '8', count: 41,},
    { name: '9', count: 14,},
    { name: '10', count: 36, },
    { name: '11', count: 75, },
    { name: '12', count: 85, },
    { name: '13', count: 2, },
    { name: '14', count: 65,},
    { name: '15', count: 25,},
    { name: '16', count: 12,},
    { name: '17', count: 28, },
    { name: '18', count: 74,},
    { name: '19', count: 12,},
    { name: '20', count: 15, },    
    { name: '21', count: 34, },
    { name: '22', count: 54, },
    { name: '23', count: 62, },
    { name: '24', count: 12,},
    { name: '25', count: 11,},
    { name: '26', count: 45,},
    { name: '27', count: 63, },
    { name: '28', count: 15,},
    { name: '29', count: 2,},
    { name: '30', count: 74, },       
  ];

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomData = async (value) => {
    const secs = random(1000, 3000);
    return new Promise((resolve, reject) => {
      setTimeout(() => {resolve(random(1, 15000))}, secs);
    });
  }

  return (
    <div className="monitor">
      <Card title="Заявки">
        <div className={styles.blocks}>
          <Block title="Новые заявки" iconColor="green" icon={AddTask} value={4578} to="/" load={randomData(15000)} />
          <Block title="Ожидающие оплату" iconColor="teal" icon={HistoryToggleOff} load={randomData(15000)} to="/" />
          <Block title="Оплата просрочена" iconColor="#c2c238" icon={Accessible} load={randomData(15000)} to="/" />
          <Block title="Истекает по регламентному сроку" iconColor="coral" icon={AccessibleForward} load={randomData(15000)} to="/" />
        </div>
      </Card>
      <br />
      <Card title="Графики">
        <div className={styles.graphics}>
          <div className={styles.graphLeft}>
            <Chart title="Количество заявок за текущий месяц по дням" data={orderData} grid={true} dataKey="count"/>
          </div>
          <div className={styles.graphRight}>
            <Chart title="Количество обращений за текущий месяц по дням" data={appealData} grid={true} dataKey="count"/>
          </div>
        </div>
      </Card>
    </div>
  )
}

