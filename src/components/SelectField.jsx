import { useField } from 'formik'
import { NewSelect } from './ui'

const SelectField = ({label, ...props}) => {
  const [field, meta] = useField(props)
  return <NewSelect title={label} {...field} {...props} />
}

export default SelectField