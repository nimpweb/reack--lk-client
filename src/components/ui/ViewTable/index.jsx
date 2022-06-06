import React from 'react'
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

  console.log('CLASS_NAMES', classNames);
  return (<div className={`${s.ViewTableCol} ${classNames.length > 0 && classNames.map(cl => s[cl])}`} { ...props } style={ styles } >{ children }</div>)
}

const ViewTable = ( { children, ...props } ) => {
  return (
    <div className={s.ViewTable}>
      { children }
    </div>
  )
}

const ViewTableFilterRow = ( {} ) => {
  return (
    <ViewTableRow>
      <div className={s.FilterInputBlock}>
        <input type="text" className={s.FilterInput}  placeholder="Введите значение чтобы осуществить поиск" />
      </div>
    </ViewTableRow>
  )
}

const VMTable = ( { items, columns, options } ) => {
  const objectAsArray = (obj) => {
    let array = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        array[key] = obj[key]
      }
    }
    return array;
  }

  const renderSimpleArray = (array) => {
    let mas = [];
    for ( let x=0; x < array.length; x++) {
      mas.push(<ViewTableCol>array[x]</ViewTableCol>)
    }
    return mas;
  }

  return (
    <div className={s.ViewTable}>
      <ViewTableRow>
      { columns.map( (column, index) => (
        <ViewTableCol key={index} type="header" width={column?.width}>
          { column.title }
        </ViewTableCol>
      )) }
      </ViewTableRow>
      { options.filtered && <ViewTableFilterRow />}

      { items.map( (item, index) => {
        const data = objectAsArray(item);
        renderSimpleArray(data).forEach(Component => <Component />)
       
      })}

    </div>
  )
}

export default VMTable;