import React from 'react';
import s from './layout.module.css'

export default function Layout({children, ...props}) {
  let style = {display: 'flex'}
  style = {...style, alignItems: props.align ? props.align : 'center'}
  style = {...style, justifyContent: props.content ? props.content : 'flex-start'}
  style = {...style, flexDirection: props.direction ? props.direction : 'row'}
  style = {...style, gap: props.gap ? props.gap : '15px'}
  style = {...style, margin: props.margin ? props.margin : '10px 0'}
  style = {...style, padding: props.padding ? props.padding : '0'}
  if (props.border) { style = {...style, border: props.border } }
  if (props.borderRounded) {style = {...style, borderRadius: props.borderRounded}}
  if (props.noBoxShadow) { style = {...style, boxShadow: 'none '} }

  return <div className={s.rootDiv} style={style}>
    {children}
  </div>;
}
