import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Loading } from '../../../components'
import styles from './block.module.css'

export default function Block({to, icon, iconColor, title, ...props}) {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue]  = useState(0);
  const load = props.load || null;

  useEffect(() => {
    const init = async() => {
      setValue(await load || 0);
      setIsLoading(false);
    }
    init();
  }, [load]);

  return (
    <Link className={styles.blockLink} to={to}>
      <div className={styles.block}>
        {isLoading 
          ? <Loading />
          : (
            <>
              <BlockIcon color={iconColor} className={styles.blockIcon} Component={icon} />
              <div className={styles.blockOuter}>
                <div className={styles.blockHeader}>{title}</div>
                <div className={styles.blockValue}>{value}</div>
              </div>
            </>
          )
        }
        
      </div>
    </Link>
  )
}


function BlockIcon({Component, color, ...props}) {
  return (<Component style={{color}} {...props} />)
}
