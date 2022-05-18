import React, {useState} from 'react'

export default function AddressField( props ) {

  const initState = {region : props.region || '', town: props.town || '', street: props.street || '', dom: props.dom || '', korpus: props.korpus || '', kvart: props.kvart || ''};
  const title = props.title

  const [addr, setAddr] = useState(initState)

  const handleChangeInput = event => {
    const name = event.target.name
    const value = event.target.value || ''
    setAddr(prev => ({...prev, [name]:value }))
  }

  return (
    <>
      <div className="row">
          <div className="col-12">
              <h5 className="text-left mb10px">
                  {title}
              </h5>
          </div>
          <div className="col-12 col-6 wr-inp form-ctrl required-ctrl">
              <label className="form-ctrl-label">Область <sup>*</sup></label>
              <input type="text" className="form-ctrl-input required" placeholder="Укажите область(край)" name="region" onChange={handleChangeInput} value={addr.region} />
          </div>

          <div className="col-12 col-6 wr-inp form-ctrl required-ctrl">
              <label className="form-ctrl-label">Населенный пункт <sup>*</sup></label>
              <input type="text" className="form-ctrl-input required" placeholder="Укажите населенный пункт" name="town" onChange={handleChangeInput} value={addr.town} />
          </div>

          <div className="col-12 col-6 wr-inp form-ctrl required-ctrl">
              <label className="form-ctrl-label">Улица <sup>*</sup></label>
              <input type="text" className="form-ctrl-input required" placeholder="Укажите улицу" name="street" onChange={handleChangeInput} value={addr.street} />
          </div>

          <div className="col-12 col-2 wr-inp form-ctrl required-ctrl">
              <label className="form-ctrl-label">Дом <sup>*</sup></label>
              <input type="text" className="form-ctrl-input required" placeholder="Укажите дом" name="dom" onChange={handleChangeInput} value={addr.dom} />
          </div>
          <div className="col-12 col-2 wr-inp form-ctrl required-ctrl">
              <label className="form-ctrl-label">Корпус</label>
              <input type="text" className="form-ctrl-input" placeholder="" name="korpus" onChange={handleChangeInput} value={addr.korpus} />
          </div>
          <div className="col-12 col-2 wr-inp form-ctrl required-ctrl">
              <label className="form-ctrl-label">Квартира</label>
              <input type="text" className="form-ctrl-input" placeholder="" name="kvart" onChange={handleChangeInput} value={addr.kvart} />
          </div>
        </div>
      </>
    )
}
