import Browser from './Browser'
import { ContactForm } from './sections'

const Contact = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <ContactForm/>
    </Browser>
  )
}

export default Contact
