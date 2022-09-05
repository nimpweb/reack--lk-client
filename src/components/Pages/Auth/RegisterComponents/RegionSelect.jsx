import React, {useEffect, useState} from 'react'
import { Loading } from '../../../../components';
import $api from '../../../../http'

export default function RegionSelect(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState(null);
  
  const accountId = props.accountId || null;
  const isShowLabel = props.showLabel || true;

  useEffect(() => {
    const doRequest = async () => {
      setIsLoading(true);
      const response = (accountId) ? await $api(`/region/byAccount/${accountId}`) : await $api('/region');
      if (response.data.success) {
        setItems(response.data.result);
      }
      setIsLoading(false);
    }
    doRequest();
  });

  const handleChange = (e) => {
    const id = +e.target.value;
    props.onChange(items.find(item => item.id === id));
  }  

  return (
    <div className="col-12 form-ctrl w-100">
    {isShowLabel && (<label className="form-ctrl-label">Регион: </label>)}
    {isLoading 
      ? <Loading marginLeft={10} marginTop={10}>Загрузка...</Loading>
      : (
        <>
        {items ? (
          <>
          {items.length === 1 
            ? (
              <div>
                {items[0].title}
                <input type="hidden" name="region" value={items[0].id} />
              </div>
              
            )
            : (
              <select className="form-ctrl-select" name="regionId" style={props.style || {}} onChange={handleChange}>
                <option value="0">Укажите регион</option>
                {items && items.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
              </select>
            )}
          </>
        )
      : <div style={{color: 'gray', marginLeft: 5}}>отсутствует</div>}
        </>
       
    )}
    </div>
  )
}
