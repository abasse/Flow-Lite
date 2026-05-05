import Browser from './Browser'
import { Form as FormSection } from './sections'

const Form = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <FormSection/>
    </Browser>
  )
}

export default Form
