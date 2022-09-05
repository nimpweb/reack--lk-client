import { ManageSearch } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'
import { Button } from '../../../components/ui'
import styles from './newinput.module.css';

export default function NewInput({title, type, onChange, icon = null, value = '', error=false, helperText = '', ...props}) {
  // const [text, setText] = useState(value === '' ? (props.value) ? props.value : '' : '');
  const [text, setText] = useState(value ? value : '')
  const [inputClassName, setInputClassName] = useState(null);

  const ButtonIcon = icon
  const ButtonClick = props.onButtonClick || (() => {})

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
    <>
      <div className={`${styles.input} ${error && styles.errorInput}`}>
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
        { ButtonIcon !== null &&  <Button type="button" className={styles.inputButton}  onClick={ButtonClick}>
          { () => <ButtonIcon /> }
        </Button> }
        <label>{title}</label>
      </div>
      { helperText.length > 0 && <div className={`${error ? styles.errorText : styles.helperText}`}>{helperText}</div> }
    </>
  )
}

