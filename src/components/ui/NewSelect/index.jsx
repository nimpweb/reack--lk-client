import React, {useRef, useState } from 'react'
import { ArrowDropDown, ArrowDropUp, Delete } from '@mui/icons-material'
import cn from 'classnames';
import styles from './newselect.module.css';

export default function NewSelect({items, title, underText = '', onChange}) {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');
  const [data, setData] = useState(items);

  const inputRef = useRef(null);
  const onFocus = () => setIsActive(true);
  
  const onBlur = () => {
    setTimeout( () => {
      setIsActive(false)
    }, 200) 
  }; 

  const handleChange = (e) => {
    setText(e.target.value);
    setData([...items.filter(p => p.value.toString().toLowerCase().includes(e.target.value.toString().toLowerCase()))]);
  }

  const handleItemClick = (item) => {
    let text = '';
    if (item && item.value) { text = item.value }
    if (item && item.title) { text = item.title }

    setText(text);
    if (item.onSelect) {
      return item.onSelect(item)
    } else {
      onChange(item);
      return item;
    }
  }

  const handleClearText = () => { 
    // setText('');
    handleItemClick(null);
    setData([...items]);
    inputRef.current.focus();
  }
  return (
    <>
    <div className={styles.selectContainer}>
      <div className={styles.select}> 
        <input 
          ref={inputRef} 
          type="text" 
          className={(text && text.length > 0) ? styles.fill : ''} 
          onChange={handleChange} 
          onFocus={onFocus} 
          onBlur={onBlur} 
          value={text} 
        />
        <label>{title}</label>
        {(text && text.length > 0) && <Delete className={styles.arrowRemove} onClick={handleClearText} /> }
        {isActive ? <ArrowDropUp className={styles.arrow} /> : <ArrowDropDown className={styles.arrow} /> }
      </div>
      <ul className={cn(styles.selectList, {[styles.active] : isActive})}>
        {data.map(item => (
          <li key={item.id} 
            className={styles.selectListItem} 
            onClick={ () => item.click ? item.click() : handleItemClick(item)}
          >{item.value ? item.value : item.title}</li>
        ))}
      </ul>
      {underText.length > 0 && <div className={styles.underText}>{underText}</div> }
    </div>
    <div className={styles.overlay}>
      
    </div>
    </>
  )
}
