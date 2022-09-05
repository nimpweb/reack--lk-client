import { useField } from 'formik'
import { NewInput } from './ui'

const InputField = ({label, ...props}) => {
  const [field, meta] = useField(props)
  return <NewInput title={label} {...field} {...props} />
}

export default InputField