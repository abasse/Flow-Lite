import Browser from './Browser'
import { CreditCard } from './sections'

const Payment = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <CreditCard />
    </Browser>
  )
}

export default Payment
