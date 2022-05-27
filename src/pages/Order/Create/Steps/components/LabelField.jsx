import {Field, useField} from 'formik'
import s from '../../../../../styles/form.module.css'

const LabelField = ( { title, subTitle=null, fieldName, value } ) => {
  return (
    <>
      <div className={s.dataText}><span>{ title }:</span>{value} { subTitle  && <span className={s.dataTextComment}> / {subTitle}</span>} </div>
      <Field name={fieldName} type="hidden" value={value} />
    </>
  )
}

export default LabelField