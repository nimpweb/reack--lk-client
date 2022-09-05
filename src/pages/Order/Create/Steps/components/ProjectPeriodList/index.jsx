import { Delete, PlusOne } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { NewInput, Button } from '../../../../../../components/ui';
import styles from './projectperiod.module.css';

export default function ProjectPeriodList({items, setItems}) {
  const [data, setData ] = useState(items);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const handleRemoveItem = (index) => setData(prev => {
    const data = prev;
    data.splice(index, 1);
    return [...data];
  });
  const handleAddItem = () => setData([...data, { year: '', kvartl: '', power: '' }]);

  return (
    <div className={styles.containerList}>
      <h4>Сроки проектирования и поэтапного введения в эксплуатацию</h4>
      { data.map( (item, index) => <Item key={index} index={index} data={item} setData={setData} remove={() => handleRemoveItem(index)} />) }
      <Button onClick={handleAddItem}><PlusOne /> Добавить этап</Button>
    </div>
  )
}

function Item({ index, data, setData, remove }) {
  const [year, setYear] = useState(data.year);
  const [kvartl, setKvartl] = useState(data.kvartl);
  const [power, setPower] = useState(data.power);

  useEffect(() => {
    setData(prev => {
      const data = prev;
      data.splice(index, 1, {year, kvartl, power})
      return [...data];
    })
  }, [year, kvartl, power]);

  return (
    <div className={styles.containerRow}>
      <NewInput title="Год" name={`year${index}`} onChange={value => setYear(value)} value={ year } />
      <NewInput title="Квартал" name={`kvartl${index}`} onChange={value => setKvartl(value)} value={ kvartl } />
      <NewInput title="Мощность (кВт)" name={`power${index}`} onChange={value => setPower(value)} value={ power }/>
      <Button variant="icon" onClick={remove}><Delete /></Button>
    </div>
  );
}