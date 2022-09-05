import React from 'react'
import './button.css'

export default function Button({children, ...props}) {
  const variant = props.variant || 'rounded';
  const color = props.color || '';
  const size = props.size || 'normal'
  const classes = ['btn'];
  classes.push(size);
  classes.push(variant);
  if (color.length) { classes.push(color); }
  return (
    <button 
      className={classes.join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
