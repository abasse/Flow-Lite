import Browser from './Browser'
import { CallToAction as CallToActionSection } from './sections'

const CallToAction = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <CallToActionSection/>
    </Browser>
  )
}

export default CallToAction
