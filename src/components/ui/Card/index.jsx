import React from 'react'
import './card.css'

export default function Card({children, title, className, ...props}) {
  const classes = ['card'];
  const direction = props.direction || 'column'
  const mt = props.mt || 0;
  const styles = props.style || {}
  styles.flexDirection = direction;
  if (className) { classes.push(className); }
  styles.marginTop = mt;
  // let classes = 'card' + (props.className) ? ' '+props.className : '';
  return (
    <div className={classes.join(' ')} {...props} style={styles}>
      {title && <div className="cardTitle">{title}</div>}
      {children}
    </div>
  )
}
