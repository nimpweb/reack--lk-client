import React from 'react'
import cn from 'classnames';
import styles from './detail.module.css';

function SchetComponent(schetList) {
  return (
    <div className={styles.schetContainer}>
      <table className={styles.table}>
        <thead>
          <th>№ счета</th>
          <th className={styles.textCenter}>Дата по графику</th>
          <th className={styles.textCenter}>Сумма к оплате</th>
          <th className={styles.textCenter}>Оплачено</th>
          <th className={styles.textCenter}>Скан-счета</th>
        </thead>
        <tbody>
          {schetList 
            ? schetList.map( (item, index) => (
            <tr key={index}>
              <td>{item.title} от {item.date}</td>
              <td className={styles.textCenter}>{item.payDate}</td>
              <td className={styles.textCenter}>{item.money} ₽</td>
              <td className={styles.textCenter}>
                <button className={cn(styles.payButton)} onClick={() => console.log('Делаем оплату')}>Оплатить</button>
              </td>
              <td className={styles.textCenter}>
                <a href={item.link} download>Скачать</a>
              </td>
            </tr>
            ))
            : (<tr><td colSpan={5} className={styles.textCenter}>Выставленные счета отсутствуют</td></tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default SchetComponent;