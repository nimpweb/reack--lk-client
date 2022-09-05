import React from 'react'
import styles from './panel.module.css'

export default function Panel({children, ...props}) {
  const title = props.title || null;
  const wrap = props.wrap || null;
  let style = {}
  style = wrap && {...style, flexWrap: wrap}
  return (
    <div className={styles.panel}>
      {title && <div className={styles.panelTitle}>{title}</div>}
      <div className={styles.panelContent} style={style}>
        {children}
      </div>
    </div>
  )
}
