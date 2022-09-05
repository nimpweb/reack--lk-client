import React, { useState } from 'react'
import { useEffect } from 'react';
import {Checkbox} from '../../ui'
import styles from './radiolist.module.css'

export default function RadioList({title, items, name, type, value, onChange}) {

  const [select, setSelect] = useState(1);
  
  const handleChange = (id) => {
    console.log('123')
    setSelect(id);
  }

  useEffect(() => {
    if (onChange) { onChange(select); }
  }, [select])

  return (
    <div className={styles.radioList}>
      {title.length > 0 && <div className={styles.radioListTitle}>{title}</div>}
      <div className={styles.radioListContainer}>
        {items.map(item => <Checkbox type={type}
          key={item.id} 
          name={name}
          title={item.title} 
          value={item.id===select ? true : false} 
          // value={false}
          onChange={(e) => handleChange(item.id, e)} 
        />)}
      </div>
    </div>
  )
}
