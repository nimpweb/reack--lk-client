import React from 'react'
import styles from './Datatable.module.css'

export default function DataTable(props) {
  const inputData = props.data || [];
  const headers = props.headers || [];
  const [filterData, setFilterData] = React.useState(inputData);
  return (
    <div className={styles.datatableWrapper}>
      {inputData.length === 0 
        ? <p className={styles.nodata}>Данные отсутствуют... </p>
        : (
          <table className={styles.datatable}>
            <thead>
              <tr className={styles.row}>
                {headers.map((header, index) => <td key={index} className={styles.headerCell}>{header.title}</td>)}
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        )
      }
    </div>
  )
}
