import { useField } from 'formik'
import { Checkbox } from './ui'

const CheckField = ({label, ...props}) => {
  const [field, meta] = useField(props)
  return <Checkbox title={label} {...field} {...props} />
}

export default CheckField