import React, {useEffect, useState} from 'react'
import { Loading } from '../../../components';
import styles from './select.module.css'

export default function Select(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState(props.items || null);
  const selectContainerClass = ['selectContainer'];
  const loadData = props.loadData || null;

  useEffect(() => {
    if (loadData) {
      const func = async() => {
        setIsLoading(true);
        const result = await loadData();
        setItems(result);
        setIsLoading(false);
      }
      func();
    }
  }, [loadData]);


  return (
    <div className={selectContainerClass.join(' ')}>
      {isLoading 
        ? <Loading /> 
        : (
          <select className={styles.select} disabled={isLoading || (items && items.length === 0)}>
            {items && items.map((item, index) => <option key={index} value={item.id || index}>{item.title || item}</option>)}
          </select>
      )}
    </div>
  )
}
