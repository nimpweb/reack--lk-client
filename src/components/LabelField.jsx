import {Field, useField} from 'formik'
import s from '../styles/form.module.css'

const LabelField = ( { title, subTitle=null, fieldName, value, ...props } ) => {
  const [field, meta] = useField(props)
  console.log('META', field)
  return (
    <>
      <div className={s.dataText}><span>{ title }:</span>{value} { subTitle  && <span className={s.dataTextComment}> / {subTitle}</span>} </div>
      <Field 
        name={fieldName} 
        type="hidden" 
        {...field} 
        value={meta.value}
        // value={props.defaultValue ? props.defaultValue : ''} 
      />
    </>
  )
}

export default LabelField