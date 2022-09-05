import React, { useState } from 'react'
import { objectAsArray } from '../../../utils/functions'
import s from './ViewTable.module.css'

export const ViewTableRow = ( { children, ...props } ) => {
  return (<div className={s.ViewTableRow} { ...props} >{ children }</div>)
}

export const ViewTableCol = ( { children, type = '', ...props } ) => {
  let classNames = []
  let styles = {};
  const { textAlign } = props
  if (type !== '') {
    classNames.push(type);
  }
  styles.textAlign = textAlign ? textAlign : 'flex-start'
  if (props.width) {
    styles.maxWidth = `${props.width}px`;
  }
  return (<div className={`${s.ViewTableCol} ${classNames.length > 0 && classNames.map(cl => s[cl])}`} { ...props } style={ styles } >{ children }</div>)
}

const ViewTableFilterRow = ( { onFilter } ) => {

  const handleFilterChange = (e) => {

  }

  return (
    <ViewTableRow>
      <div className={s.FilterInputBlock}>
        <input type="text" className={s.FilterInput}  placeholder="Введите значение чтобы осуществить поиск" onChange={handleFilterChange} />
      </div>
    </ViewTableRow>
  )
}

const VMTable = ( { items, columns, options, ...props } ) => {
  const [data, setData] = useState(items);

  const handleRowClick = (sk) => props.onRowClick(sk) || (() => {})
  return (
    <div className={s.ViewTable}>
      <ViewTableRow>
      { columns.map( (column, index) => (
        <ViewTableCol key={index} type="header" width={column?.width}>
          { column.title }
        </ViewTableCol>
      )) }
      </ViewTableRow>
      { options.filtered && <ViewTableFilterRow onFilter={ (newData) => setData(newData)} />}

      { data.map( item => {
        return (<ViewTableRow onClick={() => handleRowClick(item)}>
          { columns.map(c => <ViewTableCol width={c?.width}>{item[c.field]}</ViewTableCol>) }
        </ViewTableRow>)

      })}

    </div>
  )
}

export default VMTable;