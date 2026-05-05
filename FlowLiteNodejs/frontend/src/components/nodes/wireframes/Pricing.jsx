import Browser from './Browser'
import { Pricing as PricingSection } from './sections'

const Pricing = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <PricingSection />
    </Browser>
  )
}

export default Pricing
