import React from 'react'
import styles from './table.module.css'

export default function Table({children, ...props}) {
  const [columns, setColumns] = React.useState(props.columns || []);
  const isSearchPanel = props.searchPanel || false;
  
  return (
    <div className="tableWrapper">
      <table className={styles.table}>
        {(columns && columns.length) && (
        <thead>
          <tr>
            {columns.map((column, index) => <td key={index}>{column.title}</td>)}
          </tr>
        </thead>        
        )}
        <tbody>
          {isSearchPanel && (<tr><td colspan={columns.length-1}><input className={styles.searchInput} type="text" /></td></tr>)}
          {children}
        </tbody>
      </table>  
    </div>
  )
}

export const RowTable = ({children, ...props}) => {
  return <tr className={styles.row}>{children}</tr>;
}

export const CellTable = (props) => {
  return <td className={styles.cell}>{props.content}</td>;
}