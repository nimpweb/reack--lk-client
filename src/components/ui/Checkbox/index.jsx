import React, { useState, useRef, useEffect } from 'react'
import styles from './checkbox.module.css'

export default function Checkbox({title, name, value, onChange, type = 'checkbox', ...props}) {
  const [checked, setChecked] = useState(props.checked ? props.checked : false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
    onChange(e);
  }
  
  const ref = useRef(null);

  useEffect(() => {
    ref.current.innerHTML = title;
  }, [title])

  return (
    <label className={styles.checkbox}>
      <input type={type} name={name} checked={checked} onChange={handleChange}/>
      <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
      </span>
      <span ref={ref}></span>
    </label>
  )
}
