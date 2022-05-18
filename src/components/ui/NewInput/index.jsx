import React, { useState, useEffect } from 'react'
import styles from './newinput.module.css';

export default function NewInput({title, type, onChange, value = '', ...props}) {
  // const [text, setText] = useState(value === '' ? (props.value) ? props.value : '' : '');
  const [text, setText] = useState(value ? value : '')
  const [inputClassName, setInputClassName] = useState(null);

  useEffect( () => {
    if (text.length) { setInputClassName(styles.fill) }
    else {setInputClassName(null)}
  }, [text])

  const handleChange = (e) => {
    setText(e.target.value);
    // onChange(e.target.value, e);
    onChange(e);
  }
  return (
    <div className={styles.input}>
      { 
        type === 'textarea'
        ? <textarea 
            name={props.name} 
            rows={props?.rows || 3} 
            className={inputClassName} 
            onChange={onChange}
          >
            {text}
          </textarea> 
        : <input 
            {...props} 
            type={type} 
            className={inputClassName} 
            onChange={handleChange} 
            value={text}
          />
       }
      <label>{title}</label>
    </div>
  )
}
