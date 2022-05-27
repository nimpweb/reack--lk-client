import { useField } from 'formik'
import { NewInput } from '../../../../../components/ui'

const InputField = ({label, ...props}) => {
  const [field, meta] = useField(props)
  return <NewInput title={label} {...field} />
}

export default InputField