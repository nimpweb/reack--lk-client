import React from 'react'
import styles from './floatbutton.module.css';

export default function FloatButton({children, onClick}) {
  return <span className={styles.button} onClick={onClick}>{children}</span>
}
