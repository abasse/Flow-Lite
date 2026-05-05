import Browser from './Browser'
import { ThankYou as ThankYouSection } from './sections'

const ThankYou = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <ThankYouSection/>
    </Browser>
  )
}

export default ThankYou
