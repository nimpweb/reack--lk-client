import React, {useEffect, useState} from 'react'
import $api from '../../../../http'
import { Loading } from '../../../../components';

export default function AccountSelect(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState(null);

  useEffect(() => { 
    const doRequest = async () => {
      const response = await $api.get('/account/list');
      if (response.data.success) {
        setItems([...response.data.result]);
      }
      setIsLoading(false);
    }
    doRequest();
  }, []);

  const handleChange = (e) => {
    const value = +e.target.value;
    props.onChange(value);
  }

  return (
    <div className="col-12 form-ctrl w-100">
      <label className="form-ctrl-label">Сетевая компания: </label>
      {isLoading 
        ? <Loading marginLeft={10} marginTop={10}>Загрузка...</Loading>
        : (
          <select className="form-ctrl-select" name="accountId" style={props.style || {}} onChange={handleChange}>
            <option value="0">Выберите сетевую компанию</option>
            {items && items.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
          </select>
      )}
      </div>
  )
}
