import { ArrowDropDown, ArrowDropUp, Cancel, DoneAll } from '@mui/icons-material';
import React, {useState, useRef, useEffect} from 'react';
import cn from 'classnames';
import styles from './accordeonblock.module.css'
import Transition from 'react-transition-group/Transition';

export default function AccordeonBlock({ children, title, subtitle, open, initial, disabled }) {
  const [isOpen, setIsOpen] = useState(open)

  const handleHeaderClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={cn(styles.accordeon, {[styles.disabled]:disabled})}>
        <div className={styles.accordeonHeader} onClick={handleHeaderClick}>
          {
            disabled 
            ? <Cancel className={cn(styles.accordeonIcon, styles.accordeonIconSilver)} />
            : <DoneAll className={cn(styles.accordeonIcon, styles.accordeonIconGreen)} />
          }
          
          <div className={styles.accordeonTitles}>
            <h3>{title}</h3>
            <Transition in={isOpen} timeout={400}><h5>{subtitle}</h5></Transition> 
          </div>
          <ArrowDropUp 
            className={cn(styles.accordeonSwipeIcon, {[styles.rotate]: isOpen})}  
          />
        </div>
        {!disabled && (
          <div className={cn(styles.accordeonContent, {[styles.open]: !isOpen})}>
            <div className={styles.accordeonBody}>{children}</div>
          </div>
        )}
      </div>
  )
}
